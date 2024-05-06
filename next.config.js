/** @type {import('next').NextConfig} */
const path = require("path");
const webpack = require("webpack");


const nextConfig = {
  output: "export",
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.plugins.push(
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "window.jQuery": "jquery",
            })
        );
        return config;
    },
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
    images: {
        unoptimized: true,
    },
    // distDir : "out",
    // basePath: '/designer/newpages/landingpage',
};
module.exports = nextConfig;
