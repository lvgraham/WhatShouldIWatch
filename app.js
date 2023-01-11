const movieButton = document.getElementById('Movie');
const seriesButton = document.getElementById('Series');
const searchResults = document.querySelector('.container div');
const movieUrl = "https://www.omdbapi.com/?i=tt3896198&apikey=274cb9ed";
const seriesUrl = "https://www.omdbapi.com/?i=tt3896198&apikey=274cb9ed";

movieButton.addEventListener('click', getMovieResults);

async function getMovieResults(){
  const tvData = await fetch(movieUrl,{
    headers:{
      'Accept':'application/json',
    } });
    const tvDataObj = await tvData.json();
    console.log(tvData);
    console.log(tvDataObj);
}

seriesButton.addEventListener('click',getSeriesResults)

async function getSeriesResults(){
  const tvData = await fetch(movieUrl,{
    headers:{
      'Accept':'application/json',
    } });
    const tvDataObj = await tvData.json();
    console.log(tvData);
    console.log(tvDataObj);
}

