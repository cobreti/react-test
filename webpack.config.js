const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.join(__dirname, "src", "index.tsx"),
    output: { path: path.join(__dirname, "build"), filename: "index.bundle.js" },
    mode: process.env.NODE_ENV || "development",
    resolve: {
        modules: [path.resolve(__dirname, "src"), "node_modules"],
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"]
    },
    devServer: { static: path.join(__dirname, "src") },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: "awesome-typescript-loader",
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
            },
            // {
            //     test: /\.css$/,
            //     loader: "css-loader",
            // },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader",
                    {
                        loader: "css-loader"
                        // options: {
                        //     modules: true,
                        //     importLoaders: 1,
                        //     // localIdentName: "[name]_[local]_[hash:base64]",
                        //     sourceMap: true,
                        //     // minimize: true
                        // }
                    }
                ],
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: ["file-loader"]
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
        }),
    ],
};

