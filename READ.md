# メモ帳

WEB+DB PRESS vol.97のシングルアプリページ入門をする

# 開発環境

- node v8.1.2
- npm 5.3.0

# 開発環境構築について

- 使用ツール

    - webpack
    - babel
    - postcss

# ローカルの立ち上げ方

```
  "scripts": {
    "build": "./node_modules/.bin/webpack",
    "start": "./node_modules/.bin/webpack-dev-server"
  },
```


# エラー集
WEB+DB PRESS vol.97のwebpackプラグインより最新にしている。
がゆえに、様々なエラーが起こった。

## entryの書き方エラー
```
webpack1系の書き方

entry: {
    js: './src/main.js',
    css: './src/main.css'
},

entry: [
    './src/main.js', 
    './src/main.css'
],

webpack2系,3系の書き方

```

## postCSSでエラー
webpack1系とwebpack2,3系ではpostCSSの書き方が少し変わる。
`postcss.config.js`のファイルが必要になる。

## devserverでエラー
webpack3では、サンプルコードのままではエラーが出る。
`proxy: { '*': 'http://127.0.0.1:8081' }`を
new webpack.LoaderOptionsPlugin({})で囲む必要がある。

## バックログ
npm startをしても`Content not from webpack is served from ./public`と出るがなぜか読み込むことができている。
が、この先にバグになる可能性大。

