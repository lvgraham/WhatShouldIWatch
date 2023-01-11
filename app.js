const movieButton = document.getElementById('Movie');
const seriesButton = document.getElementById('Series');
const searchResults = document.querySelector('.container div');
const movieUrl = "https://www.omdbapi.com/?s=house&type=movie&apikey=274cb9ed";
const seriesUrl = "https://www.omdbapi.com/?s=house&type=series&apikey=274cb9ed";

movieButton.addEventListener('click', getMovieResults);

async function getMovieResults(){
  const tvData = await fetch(movieUrl,{
    headers:{
      'Accept':'application/json',
    } });
    const tvDataObj = await tvData.json();
    console.log(tvData);
    console.log(tvDataObj);

    //the below code shows the title of the first entry in tvDataObj 
    // document.getElementById('results').innerHTML = JSON.stringify(tvDataObj.Search[0].Title)
}

seriesButton.addEventListener('click',getSeriesResults)

async function getSeriesResults(){
  const tvData = await fetch(seriesUrl,{
    headers:{
      'Accept':'application/json',
    } });
    const tvDataObj = await tvData.json();
    console.log(tvData);
    console.log(tvDataObj);

    //the below code shows all data in tvDataObj 
    // document.getElementById('results').innerHTML = JSON.stringify(tvDataObj);
}

