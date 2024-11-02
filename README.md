# Overview

このリポジトリは，[ase-lab.space](https://ase-lab.space)に関するリポジトリです．

ASE-Lab. メンバーがこのリポジトリを使う用途としては，以下が挙げられます．

1. Pull Request を通して website の体裁を調整したり新しいページを追加したい場合

## 環境構築

まず，この repository を clone します．

```bash
cd /path/to/your/directory
git clone git@github.com:ase-lab-space/ase-lab.git
cd ase-lab
```

ローカル環境に`npm`と`yarn`をインストールしていない場合はインストールします．
node のバージョン管理には `nodenv` をお勧めします。

```bash
corepack enable
```

必要なパッケージをインストールします．

```bash
yarn
```

### ローカルで開発する

開発をする場合は，このコマンドを打つことで開発を進めることができます．

```bash
cd /path/to/your/directory
cd ase-lab
yarn dev
```

開発する際は適当な名前でブランチを main から切り，push してください．main への direct push は禁止されています．

```bash
git checkout -b create-hoge-feature
# 何か機能を追加する
git add .
git commit -m "Implement hoge"
git push -u origin create-hoge-feature
```

push した後は，Pull Request を出して他の人からレビューをもらってください．その後 main に merge され，自動でデプロイされます．
