## WORK IN PROGRESS

### Run

Clone the repository:
```bash
git clone https://github.com/selendra/selendra-wiki.git && cd selendra-wiki
```

Using yarn, run:
```bash
yarn install
```

> The site is built using Docusaurus: you may need to install Docusaurus before running the Wiki locally.

```bash
yarn add @docusaurus/core@latest @docusaurus/preset-classic@latest
```

### Start Local

```bash
yarn selendra:start
```

### Build

```bash
yarn selendra:build
```

### Serve
In order to run the build version, you need to download `serve`
```bash
npm install -g serve
```

```bash
yarn selendra:serve
```

## Developer Mode Only
After every commits to the repository, need to build before push into git.
```bash
./script/updatebuild.sh

```


## Fast Testing Mode
### In case, you just to want run the prebuild version of wiki on your local:

Clone the repository:
```bash
git clone https://github.com/selendra/selendra-wiki.git && cd selendra-wiki
```

Install Serve:
```bash
npm install -g serve
```

Run the prebuild version of the wiki:
```bash
yarn selendra:serve
```



### License
The repository is a folked projects from Polkadot Wiki and is under license [GPL](https://github.com/selendra/selendra-wiki/blob/master/LICENSE)
