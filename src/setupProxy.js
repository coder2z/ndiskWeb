/* eslint-disable @typescript-eslint/no-var-requires */
const proxy = require("http-proxy-middleware");
module.exports = function (app) {
    app.use(
        "/api/v3",
        proxy({
            target: "http://39.106.33.62:5000",
            changeOrigin: true,
        })
    );

    app.use(
        "/custom",
        proxy({
            target: "http://39.106.33.62:5000",
            changeOrigin: true,
        })
    );

    app.use(
        "/api/v1",
        proxy({
            target: "http://127.0.0.1:1234",
            changeOrigin: true,
        })
    );
};
