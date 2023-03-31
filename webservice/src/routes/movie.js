// Example API Call: https://api.themoviedb.org/3/movie/550?api_key=682bcc8e553e53435aa0d8804307fab6
// API KEY: 682bcc8e553e53435aa0d8804307fab6
// API READ ACCESS TOKEN: eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODJiY2M4ZTU1M2U1MzQzNWFhMGQ4ODA0MzA3ZmFiNiIsInN1YiI6IjY0MjcwZGY0OWNjNjdiMDVlMjAwY2IzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IUC22th0k0LZF1Iuy3LTIiGLn0Qo1YWgoC6E7MlIWfE
// const https = require('https');
// example given by movie.com https://api.themoviedb.org/3/movie/550?api_key=
const key = process.env.MOVIE_KEY
import axios from 'axios'
export async function searchMovie(query) {
        // Make new promise for async function
        return new Promise(function (resolve, reject) {
            try {
            console.log("searching for movies: ")
                //Create api url
            let url = 'https://api.themoviedb.org/3/search/movie?api_key=' + key + '&language=en-US&query=' + query + '&page=1&include_adult=false'
            axios.get(url).then(response => {
                //Create movie array for movie objects
                let movies = []
                let data = response.data
                for (let i = 0; i < data.results.length; i++){
                    //We only want 10 movies so grab the first 10, add them to array
                    if ( i < 10 )
                        movies.push({
                            "movie_id": data.results[i].id,
                            "title": data.results[i].title,
                            "post_image_url": 'https://image.tmdb.org/t/p/original' + data.results[i].poster_path, //links to tmdb url for picture
                            "popularity_summary": data.results[i].vote_average + ' out of ' + data.results[i].vote_count
                        })
                }
                // Return array
                console.log(movies)
                resolve(movies)
                //return movies
            }) } catch (error) {
        console.log("error: " + error)
                reject(error)
        //return "error"
    }})
}