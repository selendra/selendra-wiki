const visit = require("unist-util-visit");

const R_SELENDRA = /{{ selendra: ([\s\S]+?) :selendra }}/gim;
const R_KUSAMA = /{{ kusama: ([\s\S]+?) :kusama }}/gim;
const R_KUSAMA_HEAD = /{{ kusama: [\s\S]*/gim;
const R_KUSAMA_TAIL = /[\s\S]* :kusama }}/gim;
const R_SELENDRA_HEAD = /{{ selendra: [\s\S]*/gim;
const R_SELENDRA_TAIL = /[\s\S]* :selendra }}/gim;

const conditionalReplace = (node, options) => {
  const { isSelendra, debug } = options;
  let foundTarget = false,
    foundDelete = false;
  const children = [];

  const TARGET = isSelendra ? "selendra" : "kusama";
  const R_TARGET = isSelendra ? R_SELENDRA : R_KUSAMA;
  const R_TARGET_HEAD = isSelendra ? R_SELENDRA_HEAD : R_KUSAMA_HEAD;
  const R_TARGET_TAIL = isSelendra ? R_SELENDRA_TAIL : R_KUSAMA_TAIL;

  const R_DELETE = isSelendra ? R_KUSAMA : R_SELENDRA;
  const R_DELETE_HEAD = isSelendra ? R_KUSAMA_HEAD : R_SELENDRA_HEAD;
  const R_DELETE_TAIL = isSelendra ? R_KUSAMA_TAIL : R_SELENDRA_TAIL;

  node.children.forEach((childNode) => {
    if (childNode.type !== "text") {
      if (!foundDelete) {
        children.push(childNode);
      }
      return;
    }

    let text = childNode.value;

    debug && console.log(`Before ${JSON.stringify({ foundTarget, foundDelete })}:`, `[${text}]`);

    text = text.replace(R_DELETE, "").replace(R_TARGET, "$1");

    let foundSomething = false;
    if (R_TARGET_HEAD.test(text)) {
      foundTarget = true;
      foundSomething = true;
      text = text.replace(`{{ ${TARGET}: `, "");
    }

    if (R_TARGET_TAIL.test(text)) {
      foundTarget = false;
      foundSomething = true;
      text = text.replace(` :${TARGET} }}`, "");
    }

    if (R_DELETE_HEAD.test(text)) {
      foundDelete = true;
      foundSomething = true;
      text = text.replace(R_DELETE_HEAD, "");
    }

    if (R_DELETE_TAIL.test(text)) {
      foundDelete = false;
      foundSomething = true;
      text = text.replace(R_DELETE_TAIL, "");
    }

    if (foundDelete && !foundSomething) {
      text = "";
    }

    debug && console.log(`After ${JSON.stringify({ foundTarget, foundDelete })}:`, `[${text}]`);
    children.push({ ...childNode, value: text });
  });

  node.children = children;
};

function transform(options) {
  return (tree) => {
    visit(tree, ["paragraph", "emphasis", "heading"], (node) => {
      conditionalReplace(node, options);
    });
  };
}

function injectPlugin(param) {
  return [
    transform,
    { isSelendra: param.isSelendra, dryRun: false, verbose: false, debug: false },
  ];
}

module.exports = { injectPlugin };
