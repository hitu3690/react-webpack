const path = require("path");

module.exports = {
  /** mode
   * 概要
   *  バンドルするファイルを整形するかどうか設定する
   * production(デフォルト)
   *  コード内の改行やインデント、余分な半角スペースなどを取り除いてバンドルする
   * devlopment
   *  修正せずバンドルする
   * none
   */
  mode: "development",
  /** entry
   * 概要
   *  まとめたいファイルをリストしているファイル(エントリーファイル)を格納する
   */
  entry: "./src/index.tsx",
  /** output
   * 概要
   *  バンドルしたファイルをどのディレクトリに出力するか設定する
   */
  output: {
    // 「/dist/main.js」という出力先にする
    path: path.join(__dirname, "dist"),
    filename: "main.js",
  },
  /** module
   * 概要
   *  babel-loaderやcss-loaderなど、Loaderの設定を行う
   * rules
   *  test
   *    正規表現でターゲットとなるファイルの拡張子を記述
   *  use
   *    使用するLoaderを文字列かオブジェクトの配列で記述。配列の後ろの要素から処理が行われる
   */
  module: {
    rules: [
      {
        // ts | tsx拡張子が対象
        test: /\.(ts|tsx)$/,
        use: [
          // ts-loader -> babel-loaderの順で処理が行われる
          {
            loader: "babel-loader",
            options: { presets: ["@babel/preset-env", "@babel/react"] },
          },
          {
            loader: "ts-loader",
            options: {
              configFile: path.resolve(__dirname, "tsconfig.json"),
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  /** devServer
   * 概要
   *  webpackで開発サーバーを立ち上げることができるライブラリ(webpacl-dev-server)の設定を行う
   *  コードを更新すると自動的にビルドして、ブラウザのビューが更新される
   * static.derectory
   *  サーバーの起点となるディレクトリを記述
   * port
   */
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3000,
  },
  /** resolve
   * 概要
   *  モジュールインポート時にパスの問題を解決する
   * extensions
   *  拡張子を配列に渡して、モジュールインポート時に記述する拡張子を省略できる
   */
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  /** target
   * 概要
   *  コンパイル先を設定する
   * node
   *  サーバーサイド
   * web
   *  フロントエンド
   */
  target: "web",
};
