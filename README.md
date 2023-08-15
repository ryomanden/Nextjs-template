<h1 align="center">NextJS-template</h1>
<p align="center">
EmotionとTwin.macroに加えて、ESLintとかhuskyとか使えるようにした便利なテンプレ。
</p>

## yarn
install
```zsh
yarn install
```
develop
```zsh
yarn dev
```
code format
```zsh
yarn next format
```
code check
```zsh
yarn next lint --fix
```
version update
```zsh
yarn version [ --major | --minor | --patch | --premajor | --preminor | --prepatch | --prerelease ]
git push origin --tags
```
## using package
- Emotion - CSS in JS
- Tailwind CSS - CSS framework
- Twin.macro - Tailwind-CSS in JS
- ESLint - コードのチェック
- Prettier - コードの整形
- husky - git commitの時に自動でリント・整形

## ⚠️　blogなどで使う場合　⚠️
以下のような文言を`LICENSE`に追加し、投稿したコンテンツやページの内容自体にはMITライセンスを適用しない（つまりコンテンツの著作権を放棄しない）事を明示します。
```diff
MIT License

Copyright (c) [year] [Full fullname]
+ Except for images / icons / blog contents included in this project.

Permission is hereby granted, free of charge ...
```

## source
<p align="center">
    クローン元 <a href="https://github.com/ben-rogerson/twin.examples/tree/master/next-emotion-typescript">Twin.examples →</a>
    <br>
    元の <a href="/Twin_README.md">README →</a>
</p>