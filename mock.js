/*
 * @Author: suliang 
 * @Date: 2020-07-14 09:25:45 
 * @Last Modified by: suliang
 * @Last Modified time: 2020-07-14 09:26:38
 */
const Mock = require("mockjs")
Mock.mock("/api/data", (req, res) => {
    return {
        "data": "test"
    }
})