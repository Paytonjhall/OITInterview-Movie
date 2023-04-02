import server from './server.js'
import cors from "cors";

async function start() {

    // start up server
    const app = await server()
    // app.use(cors())

    // listen on port 8080
    app.listen(8080, () => {
        console.log('listening on port 8080')
    })
}

start().then(r=> {}).catch(err => console.log('error running server'))