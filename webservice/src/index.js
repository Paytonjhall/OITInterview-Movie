import server from './server.js'
async function start() {
    // start up server
    const app = await server()
    // listen on port 8080
    app.listen(8080, () => {
        console.log('listening on port 8080')
    })
}

start().then(r=> {}).catch(err => console.log('error running server'))