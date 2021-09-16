# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### install procedure

1. node と npm のインストールが完了しているかを確認する

下記コマンドを実行してバージョン情報がでたら OK

node -v / npm -v

2.React のプロジェクトを作成するフォルダを指定する

ターミナルで作成用ディレクトリに移動して下記コマンドを実行

npx create react-app プロジェクト名

3.プロジェクトの作成が完了したら

cd プロジェクト名
　 npm start / yarn start 　などのメッセージがでるはずなので
　いずれか実行してみて、localhost:3000 に React の初期画面が表示されるかを確認する

4.一旦ここで、Github へプッシュ

5.ESLint の設定について

create react app で作成したアプリはデフォルトで ESLint が導入されているが、初期設定は必要

VScode 側の ESLint の拡張をダウンロード
　＊ワークスペースでの有効化をすること

ワークスペースの設定として書きを追加すると良い（例）

"editor.formatOnSave": false,

"editor.codeActionsOnSave": {

"source.fixAll.eslint": true
}

＊エディタ自体の設定による意図しないフォーマットを防ぐことが目的

6.ESLint の初期設定
　以下コマンドを実行する

npx eslint --init / yarn run -s eslint --init

対話式で設定が始まる

How would you like to use ESLint?
What type of modules does your project use?
Which framework does your project use?
Does your project use TypeScript? No / Yes
Where does your code run?
How would you like to define a style for your project?
Which style guide do you want to follow? (Use arrow keys)
What format do you want your config file to be in? (Use arrow keys)
Would you like to install them now with npm? No / Yes

指定したいものを選択すると設定が完了する
　エラーがでたら、エラーメッセージに沿って対応

7.スタイルガイドの導入を実施

airbnb なら下記のコマンドでパッケージをインストールする

yarn add -D eslint-config-airbnb

その他なら自身で調べて実施

8.有効化されたら、再度 localhost:3000 で挙動を確認

→ 発生しているエラーを解消すれば完了

# CSS ライブラリ

Tailwind を使ってみる

1.環境構築を実施する
https://tailwindcss.com/docs/guides/create-react-app

npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9

npm install @craco/craco

インストールが完了したら、package.json ファイルの中身を書き換える

Before
"start": "react-scripts start",
"build": "react-scripts build",
"test": "react-scripts test",
After
"start": "craco start",
"build": "craco build",
"test": "craco test",

書き換えが終わったら、プロジェクトのルートディレクトリに対して craco.config.js を作成

tailwind と autoprefixer を POSTCSS のプラグインとしてインストールする
tailwind は一番はじめにインストールしたので、POSTCSS のと Autoprefixer を追加インストールは不要

VSCode の issue が発生した
Unknown at rule @tailwindcss(unknownAtRules) for base, components, utilities (Tailwind CSS) #103163
https://github.com/microsoft/vscode/issues/103163

https://qiita.com/masakinihirota/items/bd8c07aa54efad307588
setting.json でエラーを無視するように設定

エラー出たので一旦アンインストールして下記コマンドを実施する
npm install tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9

# UI ライブラリ

Headless UI を使ってみる
