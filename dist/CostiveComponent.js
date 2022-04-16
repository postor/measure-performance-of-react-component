"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CostiveComponent = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
function CostiveComponent({ loop = 0 }) {
    console.log(`component start`);
    console.time(`component`);
    let j = 0;
    for (let i = 0; i < loop; i++) {
        j++;
    }
    let rtn = (0, jsx_runtime_1.jsx)("div", { children: j });
    console.timeEnd(`component`);
    return rtn;
}
exports.CostiveComponent = CostiveComponent;
