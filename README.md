# 環境メモ
- Node.js v12.18.2
- yarn v1.22.4

環境構築は下記サイトを参考にした。
https://ics.media/entry/16329/#webpack-ts-three

# 環境構築
このプロジェクトを落として来たら以下のコマンドを叩く。

```
yarn
```

このプロジェクトでは`yarn`を使っているが`npm`でもいけると思う。

※補足
必要なパッケージはpackage.jsonに定義されているが、このプロジェクトで入れているのは以下のみ

- webpack
- webpack-cli
- typescript
- ts-loader
- three

# 実行
```
# ビルド
yarn build

# ウォッチ
yarn watch
```

# ディレクトリについて
```
root
 - dist ... webpackによってビルドされたモノが入るところ
 - src
  - index.ts ... メインの処理が書かれてるファイル
 - index.html ... このファイルをブラウザで開けば動作確認可能
 - package.json
 - README.md ... お読みください
 - tsconfig.json ... tsの設定
 - webpack.config.js ... webpackの設定
 ```