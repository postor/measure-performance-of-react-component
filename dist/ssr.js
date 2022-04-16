"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const server_1 = require("react-dom/server");
const Page_1 = require("./Page");
for (let loop of [0, 1000, 1000000, 1000000000]) {
    let label = `render ${loop} -------------`;
    console.log(`render start`);
    console.time(label);
    (0, server_1.renderToString)((0, jsx_runtime_1.jsx)(Page_1.Page, { loop: loop }));
    console.timeEnd(label);
}
