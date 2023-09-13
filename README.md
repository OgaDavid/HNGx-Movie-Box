# HNGx Task Two 🔥

## Moviebox

### 🎯 Objective:
Create a movie discovery web application that allows users to search for movies, view details about them, and save their favorite movies. You’ll be consuming data from the TMDB API.

### ✍ Requirements
1. User Interface:
Create a responsive and visually appealing user interface for the application. Here's the link to the design you're expected to replicate: https://www.figma.com/file/tVfgoNfhYkQaUkh8LGqRab/MovieBox-(Community)?type=design&node-id=1220-324&mode=design&t=6998DWtjQrxz8mOf-0
You should list the top 10 movies on the homepage.
They should be displayed in a grid layout with their movie posters.
The Card component should display the movie title and release date.
card - [data-testid: movie-card]
movie poster - [data-testid: movie-poster]
movie title - [data-testid: movie-title]
movie release date - [data-testid: movie-release-date]
2. Movie Search:
Implement a search feature that allows users to search for movies by title.
Display search results, including movie posters, titles, and release dates.
Show a loading indicator while fetching search results.
3. Movie Details:
When i go to to /movies/:id route (where :id is the imdb_id), I should see the movie details page.
I should see
title - [data-testid: movie-title]
release date (in UTC) - [data-testid: movie-release-date]
runtime (in minutes) - [data-testid: movie-runtime]
overview - [data-testid: movie-overview]
API Integration:
Consume the TMDB API to fetch movie data.
Use the following API endpoints:
Fetch movie details by ID: https://api.themoviedb.org/3/movie/{movie_id}
Error Handling:
Implement error handling to display meaningful error messages to users in case of API failures or other issues.
Submission:
Host your frontend application on a platform of your choice (e.g., GitHub Pages, Netlify).
Provide clear instructions on how to run your project locally in your README.md file.
Ensure that the code is well-documented and organized.
This frontend challenge requires you to build a dynamic movie discovery app that interacts with a real API to fetch and display movie data.
PS: You MUST use react or  Next js


# Solution 🏆
## Demo Link - https://moviebox-hngx.vercel.app/
<br />
<br />

![Demo screen](https://github.com/OgaDavid/HNGx-Movie-Box/blob/master/public/images/sipderman%20mobile.png)
<br />
<br />

![Demo screen](https://github.com/OgaDavid/HNGx-Movie-Box/blob/master/public/images/spiderman%20laptop.png)
<br />
<br />

![Demo screen](https://github.com/OgaDavid/HNGx-Movie-Box/blob/master/public/images/mobile%20(4).gif?raw=true)
