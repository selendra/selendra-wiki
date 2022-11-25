import * as React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Translate, { translate } from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";


function FooterNavColumn({ headline, children }) {
  return (
    <Col xs={6} md={4} lg={3} className="mb-3 mb-md-5">
      <h5 className="text-white text-heading font-weight-medium">{headline}</h5>
      <ul className="list-unstyled">{children}</ul>
    </Col>
  );
}

function FooterSocialColumn() {
  const SocialItem = ({ href, className }) => {
    return (
      <li className="text-white mr-2 mr-lg-0 mr-xl-2 mb-2">
        <a href={href} target="_blank" rel="noopener noreferrer">
          <i className={className} />
        </a>
      </li>
    );
  };

  const Social = () => (
    <ul className="list-social-links mb-4 mt-5 mt-lg-0">
      <SocialItem href="https://twitter.com/SelendraNetwork" className="socicon-twitter" />
      <SocialItem href="https://www.reddit.com/r/selendrachain" className="socicon-reddit" />
      <SocialItem href="https://github.com/selendra/selendra" className="socicon-github" />
      <SocialItem
        href="https://www.youtube.com/channel/UCWO6SVOPiR6CFBrHRLD2DDA"
        className="socicon-youtube"
      />
      <SocialItem href="https://sel.li/discord" className="socicon-discord" />
    </ul>
  );

  

  return (
    <Col md={12} lg={3} className="px-lg-0">
      <Social />
    </Col>
  );
}

function FooterLegalLink({ href, content }) {
  return (
    <li>
      <a href={href} className="text-white text-small" target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    </li>
  );
}

function FooterLink({ href, content }) {
  return (
    <li className="py-0 py-md-1">
      <a href={href} className="text-white" target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    </li>
  );
}

export default function Footer() {
  const { siteConfig } = useDocusaurusContext();
  const { footer } = siteConfig.themeConfig;

  return (
    <footer className="nav-footer spacer-y-4 pb-4" id="footer">
      <Container className="container-custom">
        <Row className="justify-content-start">
          <FooterNavColumn
            headline={translate({
              message: "General",
              id: "footer.body.general",
              description: "Headline of General column in Footer",
            })}
          >
            <FooterLink
              content={translate({
                message: "About",
                id: "footer.body.general.about",
                description: "About link in General column in Footer",
              })}
              href="https://selendra.com/about"
            />
            <FooterLink
              content={translate({
                message: "Roadmap",
                id: "footer.body.general.roadmap",
                description: "Roadmap link in General column in Footer",
              })}
              href="https://selendra.com/launch-roadmap"
            />
            <FooterLink
              content={translate({
                message: "Build",
                id: "footer.body.general.build",
                description: "Build link in General column in Footer",
              })}
              href="https://selendra.com/build"
            />
            <FooterLink
              content={translate({
                message: "Staking",
                id: "footer.body.general.staking",
                description: "Staking link in General column in Footer",
              })}
              href="https://selendra.com/staking/"
            />
            <FooterLink
              content={translate({
                message: "FAQ",
                id: "footer.body.general.faq",
                description: "FAQ link in General column in Footer",
              })}
              href="https://selendra.com/faq"
            />
            <FooterLink
              content={translate({
                message: "Contact",
                id: "footer.body.general.contact",
                description: "Contact link in General column in Footer",
              })}
              href="https://selendra.com/contact"
            />
          </FooterNavColumn>
          <FooterNavColumn
            headline={translate({
              message: "Technology",
              id: "footer.body.technology",
              description: "Headline of Technology column in Footer",
            })}
          >
            <FooterLink
              content={translate({
                message: "Telemetry",
                id: "footer.body.technology.telemetry",
                description: "Telemetry link in Technology column in Footer",
              })}
              href="https://telemetry.polkadot.io/#list/0xfe6cd5f021c70fe24e768c4c6352cd8f7c4453feea126ebeaf0ba9d316a1eeb0"
            />
            <FooterLink
              content={translate({
                message: "Substrate",
                id: "footer.body.technology.substrate",
                description: "Substrate link in Technology column in Footer",
              })}
              href="https://www.parity.io/substrate"
            />
            <FooterLink
              content={translate({
                message: "Whitepaper",
                id: "footer.body.technology.whitepaper",
                description: "Whitepaper link in Technology column in Footer",
              })}
              href="https://selendra.com/SelendraPaper.pdf"
            />
            <FooterLink
              content={translate({
                message: "Lightpaper",
                id: "footer.body.technology.lightpaper",
                description: "Lightpaper link in Technology column in Footer",
              })}
              href="https://selendra.org/Selendra-lightpaper.pdf"
            />
          </FooterNavColumn>
          <FooterNavColumn
            headline={translate({
              message: "Community",
              id: "footer.body.community",
              description: "Headline of Community column in Footer",
            })}
          >
            <FooterLink
              content={translate({
                message: "Treasury",
                id: "footer.body.community.treasury",
                description: "Treasury link in Community column in Footer",
              })}
              href="https://selendra.com/treasury/"
            />
            <FooterLink content="Medium" href="https://medium.com/selendra" />
          </FooterNavColumn>
          <FooterSocialColumn />
        </Row>
        <Row className="footer-legal align-items-end mt-5 pt-4">
          {footer && (
            <Col lg={2} className="mb-2 mb-lg-0">
              
            </Col>
          )}
          <Col lg={10}>
            <ul className="list-unstyled d-flex flex-wrap list-pipe-separator">
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
