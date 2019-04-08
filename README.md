# Deviget Reddit Feed
> Review it with love ❤️

## Summary

- [The Exercise](#the-exercise)
- [Running the Project](#running-the-project)
- [Problems Faced](#problems-faced)
- - [React List](#react-list)
- - [Reddit API](#reddit-api)
- - [AWS Account](#aws-account)
- - [Availability](#availability)
- [Possible Solutions](#possible-solutions)
- [What is Missing](#what_is_missing)

## The Exercise

We would like to have you complete the following code test so we can evaluate your Front-end skills. Please place your code in a public Github repository and commit each step of your process so we can review it.

Your assignment is to create a simple Reddit client that shows the top 50 entries from Reddit - [www.reddit.com/top](www.reddit.com/top)

To do this please follow these guidelines and use the front-end technology we talked about during your interview (Specific Javascript Framework):

The app should be able to show data from each entry such as:

- [x] Title (at its full length, so take this into account when sizing your cells)
- [x] Author
- [x] entry date, following a format like “x hours ago”
- [x] A thumbnail for those who have a picture.
- [x] Number of comments
- [x] Unread status

In addition, for those having a picture (besides the thumbnail), please allow the user to tap on the thumbnail to be sent to the full sized picture.

## Running the Project

Running locally with Yarn:

```
yarn
yarn start
```

Running with Docker:

```
docker build . -t rafaelfragosom/deviget-reddit-feed
docker run -d -p 5000:5000 -e PORT=5000 rafaelfragosom/deviget-reddit-feed
```

**[Or go to Heroku to see it live](https://deviget-reddit-feed.herokuapp.com/)**

## Problems Faced
> To give a little bit of context, let me explain the problems I faced during the development of the test.

### React List

I ended up using the regular List component from [@material-ui](https://material-ui.com/) because it played well with the animations. Because of that, I lost a lot of performance because of the huge list size and it's contents.

I did implemented a virtualized list using [react-window](https://github.com/bvaughn/react-window/) and [react-window-infinite-loader](https://www.npmjs.com/package/react-window-infinite-loader), which seems super super fast and responsive as it should. Go to the [virtualized-list branch](https://github.com/rafaelfragosom/deviget-reddit-feed/tree/virtualized-list) to see more.

I didn't kept the virtualized list version because the way the lib was implemented, it was not playing well with the animations. The library expects a function to be passed as children, not a component, so I couldn't use the [React Transition Group](https://reactcommunity.org/react-transition-group/) as intended. If I had more time, I would extend it's render method to implement the animations.

### Reddit API

The Reddit API is amazing in theory, but it's results are really confusing. I wasn't able to find a way to identify the post types (gif, text, image, video... etc.), so I did my best to identify and sanitize then, but I'm not 100% confident of the results.

I chose to write my own Reddit service instead of using a library for make requests, since I only needed one request. I compared the results from the list request and detail request and they were pretty much the same, so I only did one request and passed the data to the detail view with redux.

Pagination was not a problem.

### AWS Account

This is not a project related thing, but since I would be using AWS on Deviget, it's important to mention that my AWS account was having technical issues, I'm still waiting on support to fix it. That's why I chose Heroku to host the app.

Now Heroku supports Docker images, so the deploy is not so different from AWS. And it's free.

### Availability

One really important factor to this test was that I barely had time to focus during this weekend. I was taking care of my daughter the whole time and using the bed time to code most of the time. I'm very sleep depraved right now.

## Possible Solutions

As mentioned, I would solve the List problem with a virtualized list, extending the lib's render method to accept a component, so I can use the React Transition Group. Something like what Twitter did with their lite app.

I would also try to use the [snoowrap](https://github.com/not-an-aardvark/snoowrap) library to access the Reddit API and sanitize the results. The library seems promising, there's even a thread on Reddit itself.

Regarding the state persistence, I used localStorage to save the state inside the browser. Since I did it by hand, I missed a few things like **reconciliation** and **storage size**. Every browser have it's own localStorage limitations and I am not accounting for that. The probable solution is to implement a middleware on Redux or use a lib already written to solve those problems.

The app is not really reliable because it depends directly from an external source, so I would write a microservice to cache the Reddit API and use that instead. That way, even if Reddit is down, I could send the cached posts from the microservice and the app will always work. With that in mind, I would also handle the internet connectivity issues to give a more PWA experience and also let the user know that he is pulling cached information from the microservice if the Reddit API is down.

## What is Missing

- **Tests**: It's really important to test this application, specially because it depends on external sources and it could face unavailability and connection issues.
- **CI/CD**: To run the tests and automaticaly deploy the application.
- **Error Report**: An error report tool like [Sentry](https://sentry.io/for/javascript/) to catch the errors on the fly.
- **Caching Strategies**: Service Workers and Nginx tweaks to cache the application for faster server responses and offline experience (since I'm storing everything).

-------------------

Please, consider me 🙏
