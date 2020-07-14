/*
 * @Author: suliang 
 * @Date: 2020-07-14 09:53:04 
 * @Last Modified by: suliang
 * @Last Modified time: 2020-07-14 10:00:37
 */
const test = require("./data/test.json");
module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  // devServer: {
  //   open: true,
  //   host: "localhost",
  //   port: 8080,
  //   https: false,
  //   hotOnly: false,
  //   proxy: {
  //     "/api": {
  //       target: "http://localhost:8080",
  //       ws: true,
  //       changeOrigin: true,
  //       pathWrite: {
  //         "^/api": "",
  //       },
  //     },
  //   },
  //   before(app) {
  //     app.get("/test", (req, res) => {
  //       res.json(test);
  //     });
  //     app.get("/financialData", (req, res) => {
  //       res.json(test);
  //     });
  //   },
  // },
};
