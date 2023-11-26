# Assignment 1 - ReactJS app.

Name: Maciej Marchel

## Overview.

This repository hosts a React-Based Movies App built to work with the TMDB API, It seamlessly integrates Firebase for time database operations and authentication. The react app includes a dyanmic home page, sections for upcoming releases, trending movies, currently playing movies, top rated movies and a favorites page to track your favortie movies. These are just a few of the applications pages. From the home page, users can easily choose to favorite movies they like or view more info about the movie by going into the details of a selected movie that caught their eye. The favorites page features an additional button to allow for users to write reviews for their favorite movie and give it a rating using review form. 

The movie details page accessed by the more info button in a card features details about the movie like release date, production countries and rating count etc. Additionally you can access buttons to view Reviews, Similar and Recommended movies. The implemented Firebase authentication system enables users to easily sigin with a Google account or create an account inside the app using Firebase. The real-time firebase database safely stores the account information to be used for future log in.

A card-based filter system improves the user experience by allowing users to filter movies by either searching for the name, filtering using genres or sort them based on popularity or release date using sorting. You can use all three filter options simultaneously.

This movies react app is a prime example of how to seamlessly integrate Firebase services and the TMDB API to create a robust and feature rich application while being able to offer users an enjoyable experience.

### Features.
+ Firebase authentication (login, register, reset, dashboard)
+ Firebase database to store account information
+ Static endpoint pages (trending, top rated and now playing)
+ Parameterized endpoint pages (recommended and similar, links to them are added in the movie details)
+ Added ability to sort by release date, popularity (ascending and descending)
+ Modified the navbar to include a drop down feature to not bloat it with page links
+ Modified the style of the navbar, filter card and movies card to a more friendly UI design
+ New Material UI compontent added (Navbar drop down IconButton)
+ Error/Exception handling (Firebase features and movie app features)

### Features Not Part of this assignment.
+ Cypress testing for majority of features
+ Code Splitting and Bundling & Code Splitting for Routes

## Setup requirements.

Apart from the standard install of running npm install to install the node_modules I recommend to do npm build just in case for the code splitting that was added for the agile assignment, I had to include the agile assignment work in this repo as I had made several bug fixes and additions for error handling while working on that assignment.

Apart from that you will need the API keys for TMBD API and Firebase Auth.

## API endpoints.

+ Similar movies - movie/:id/similar
+ Recommended movies - movie/:id/recommendations
+ Top Rated - movie/top_rated
+ Now Playing - movie/now_playing
+ Trending - movie/popular

## Routing.

+ /movies/trending - displays all currently trending movies.
+ /movies/nowPlaying - displays all movies currently playing.
+ /movies/topRated - displays all the top rated movies.
+ /movies/:id/recommended - displays all the recommended movies from the movie details page based on the id of selected movie.
+ /movies/:id/similar - displays all the similar movies from the movie details page based on the id of selected movie.
+ / - displays the login page for firebase auth.
+ /register - displays the register page for firebase auth.
+ /reset - displays the reset page for firebase auth.
+ /dasboard - displays the dashboard page for firebase auth.

The whole app is protected initially and requires an account or to log in to view the contents of the app.

## Independent learning (If relevant).

For independent learning I looked into integrating firebase authentication and database into my project, I researched on how I could implement it to work alongside reactjs and also how I could potentially store the user info so the account wouldn't have to be remade constantly or stored locally when the app was running only.

For Reference I used this blog post detailing integrations of Firebase along side with Reactjs: https://blog.logrocket.com/user-authentication-firebase-react-apps/ this blog post was created by Yusuff Faruq originally and edited by Atharva Deosthale on 6th of August 2021 and again updated on the 10th of January 2022 to address changes with release of Firebase v9.

For the most part the tutorial on integrating the Firebase Authentication and Database worked but had a few issues due to deprecated features from reactjs recent releases which I had to debug and change up myself which included the use of history being deprecated therefore it required me to refactor some parts of the code to handle it using navigation instead and up to date feature of reactjs.

+ src/firebase.js
+ components/login.js
+ components/reset.js
+ components/register.js
+ components/dashboard.js