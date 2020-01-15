const path = require("path");

module.exports = {
    entry: {
        all_files: "./src/JS_files/scripts_for_all_files.js",
        google_analytics: "./src/JS_files/google_analytics.js",
        contact_form: "./src/Contact/contact.js"
    },
    output: {
        filename: "out-[name].js",
        path: path.resolve(__dirname, "./dist/JS")
    },
    watch: false,
    mode: "development",
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}