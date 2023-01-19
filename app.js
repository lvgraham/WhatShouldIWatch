const movieButton = document.getElementById('Movie');
const seriesButton = document.getElementById('Series');
const searchResults = document.querySelector('.container div');
let searchTerm;
const seriesUrl = "https://www.omdbapi.com/?s=house&type=series&apikey=274cb9ed";

//------------------MOVIE REULTS FUNCTIONS---------------------

//get movie results
movieButton.addEventListener('click', getMovieResults);

async function getMovieResults(){
  //variables for API URL
  let searchTerm = document.getElementById('search').value
  let movieUrl = "https://www.omdbapi.com/?s="+searchTerm+"&type=movie&apikey=274cb9ed";

  //API Connection
  const movieResponse = await fetch(movieUrl);

  //response from API
  const movieResponseObj = await movieResponse.json();

  //get random result from response
  let searchResult = Math.floor(Math.random()* movieResponseObj.Search.length);

  //display result on page
    document.getElementById('title').textContent = movieResponseObj.Search[searchResult].Title
    document.getElementById('year').textContent = movieResponseObj.Search[searchResult].Year
    document.getElementById('poster').src = movieResponseObj.Search[searchResult].Poster

}

//------------------SERIES REULTS FUNCTIONS---------------------

//get series results
seriesButton.addEventListener('click',getSeriesResults)

async function getSeriesResults(){
  //variables for API URL
  let searchTerm = document.getElementById('search').value
  let seriesUrl = "https://www.omdbapi.com/?s="+searchTerm+"&type=series&apikey=274cb9ed";

  //API Connection
  const seriesResponse = await fetch(seriesUrl);
  
  //response from API
  const seriesResponseObj = await seriesResponse.json();

  //get random result from response
  let searchResult = Math.floor(Math.random()* seriesResponseObj.Search.length);

  //display results on the page
    document.getElementById('title').textContent = seriesResponseObj.Search[searchResult].Title
    document.getElementById('year').textContent = seriesResponseObj.Search[searchResult].Year
    document.getElementById('poster').src = seriesResponseObj.Search[searchResult].Poster
    
}

