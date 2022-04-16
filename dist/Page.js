"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const CostiveComponent_1 = require("./CostiveComponent");
function Page({ loop = 0 }) {
    console.log(`page start`);
    console.time(`page`);
    let rtn = (0, jsx_runtime_1.jsx)(CostiveComponent_1.CostiveComponent, { loop: loop });
    console.timeEnd(`page`);
    return rtn;
}
exports.Page = Page;
