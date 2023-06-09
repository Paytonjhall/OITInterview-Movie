## OITInterview-Movie
**Finished version with explanation is on the following Branch:**
https://github.com/Paytonjhall/OITInterview-Movie/tree/post-challenge


This was a tough coding challenge. I got through the express backend without too many challenges. The movie api was a little funny to play with but I got it working.
I was especially proud of getting the poster string formatting to work correctly! Along with using promises and awaits to correctly call my backend through postman and a URL.

However, I struggled with setting up the nuxt vue front end. I have done vue and nuxt before but have managed to get through using the BYU OIT nuxt generator.
Doing it from scratch was another story! I got it running locally with my backend, however, whenever I tried to call my backend through a v-btn, the btn was unclickcable.
I struggled getting everything on the vue end connected. I ran out of time when trying to configure nuxt. I'm interested in learning on what I was missing!

In order to get the backend running, you need to set an env variable for MOVIE_KEY, this will be the key you get from the movie database website so you can call their api.
Then you can simple run the index.js file inside of webservice/src.

The front end can be ran once you npm install and generate the nuxt. I was testing through the following command: npx nuxi dev. (use npm run dev for the post challenge version)

My thought process:
I decided to start by drawing some simple diagrams and thinking of a sequence diagram to see how the program would lay out.
I have found coders who take a step back and look at things from a whole run into less problems than those who just jump right in!
![img.png](img.png)
Knowing I was timed, I quickly drew this out on lucid chart and sribbled down a sequence diagram and got going. 

I'm thankful for this opportunity to test myself. Although I didn't quite finish the front end, I feel confident about my work and my progress.
Thank you for your time in reviewing my code. I hope you find me as a strong cadidate.

** Post challenge assessment **
I found that the issue with nuxt and vue was the machine I was using did not set up the variables correctly. While redoing the front end in the post-challenge branch on my home computer, nuxt and vue was set up without any issue.  