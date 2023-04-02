import express from 'express'
import {searchMovie} from './routes/movie.js'
// import {express} from 'express'
export default async function server () {
    console.log("starting server")
    const app = express()
    app.use('/', express.json())
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept"
        );
        next();
    });
    //Check health end point
    app.get('/health', (req, res) => {
        res.status(200).send('healthy')
    })

    //Movie end point
    //example api call to movie: http://localhost:8080/movie?toy%20story
    app.get('/movie', async (req, res) => {
        // substring /movie? from string and call searchMovie
        let search = req.url.substr('/movie?'.length)
        try {
            let response = await searchMovie(search)
            //If promise resolves, return 200 and movies
            res.status(200).send(response)
                } catch (e) {
            //Caught error, bad request.
            console.log(e)
            res.status(400).send("Bad Request")
        }
    })
    return app
}