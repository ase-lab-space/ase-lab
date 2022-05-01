# Overview

このリポジトリは，[ase-lab.space](https://ase-lab.space)に関するリポジトリです．

ASE-Lab. メンバーがこのリポジトリを使う用途としては，以下が挙げられます．

1. 新しいゼミを追加しそれを表示させたい場合
1. 既存のゼミの状態を変更し，それを website に反映させたい場合
1. 新しい記事を追加したい場合
1. 現在の参加人数や参加大学など，メタデータを編集したい場合
1. Pull Request を通して website の体裁を調整したり新しいページを追加したい場合

## ゼミや記事，メタデータを追加・編集する方法

まず，GitHub 上で以下のいずれかのファイルを編集します．（ローカルで clone して push も可）

- [articles.ts](https://github.com/ase-lab-space/ase-lab/blob/main/frontend/src/models/articles.ts)
- [seminars.ts](https://github.com/ase-lab-space/ase-lab/blob/main/frontend/src/models/articles.ts)
- [meta.ts](https://github.com/ase-lab-space/ase-lab/blob/main/frontend/src/models/meta.ts)

右上の鉛筆マークをクリックすると，編集モードに入ることができます．

次に，編集したファイルをコミットして，新しいブランチを作ります．ページ下部から作れます．

> [SHOULD] ブランチ名に関しては，変更内容がわかりやすいケバブケースであると良いです．例えば，`modify-bla-bla-seminar` や `add-bla-bla-article`などのようにです．

そのままプルリクエストを作り，必要事項を埋め，@Damin3927 に Reviewer を設定しメンションを飛ばしてください．レビューして，問題なければマージして必要なデプロイ作業を行います．
