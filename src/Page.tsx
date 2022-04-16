import { CostiveComponent } from "./CostiveComponent";

export function Page({loop=0}){
    console.log(`page start`)
    console.time(`page`)
    let rtn = <CostiveComponent loop={loop}/>
    console.timeEnd(`page`)
    return rtn
}