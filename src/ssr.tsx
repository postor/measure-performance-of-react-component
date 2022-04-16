import { renderToString } from 'react-dom/server'
import { Page } from './Page'

for (let loop of [0, 1000, 1000000, 1000000000]) {
    let label = `render ${loop} -------------`
    console.log(`render start`)
    console.time(label)
    renderToString(<Page loop={loop} />)
    console.timeEnd(label)
}
