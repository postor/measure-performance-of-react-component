import { CostiveComponent as Comp } from "./CostiveComponent"
// before
const Page = ()=> <Comp /> 
// after
// const Page = ()=>React.createElement(Comp)