export function CostiveComponent({ loop = 0 }) {
    console.log(`component start`)
    console.time(`component`)
    let j = 0
    for (let i = 0; i < loop; i++) {
        j++
    }
    let rtn = <div>{j}</div>
    console.timeEnd(`component`)
    return rtn
}