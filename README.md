# Overview

このリポジトリは，[ase-lab.space](https://ase-lab.space)に関するリポジトリです．

ASE-Lab. メンバーがこのリポジトリを使う用途としては，以下が挙げられます．

1. 新しいゼミを追加しそれを表示させたい場合
1. 既存のゼミの状態を変更し，それを website に反映させたい場合
1. Pull Request を通して website の体裁を調整したり新しいページを追加したい場合

## ゼミや記事，メタデータを追加・編集する方法

まず，GitHub 上で以下のいずれかのファイルを編集します．（ローカルで clone して push も可）

- [seminars.ts](https://github.com/ase-lab-space/ase-lab/blob/main/src/models/seminars.ts)
- [news.ts](https://github.com/ase-lab-space/ase-lab/blob/main/src/models/news.ts)

右上の鉛筆マークをクリックすると，編集モードに入ることができます．

次に，編集したファイルをコミットして，新しいブランチを作ります．ページ下部から作れます．

> [SHOULD] ブランチ名に関しては，変更内容がわかりやすいケバブケースであると良いです．例えば，`modify-bla-bla-seminar` や `add-bla-bla-article`などのようにです．

そのままプルリクエストを作り，必要事項を埋め，@Damin3927 に Reviewer を設定しメンションを飛ばしてください．レビューして，問題なければマージされ自動でデプロイされます．

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
