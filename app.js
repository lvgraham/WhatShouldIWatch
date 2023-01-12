const movieButton = document.getElementById('Movie');
const seriesButton = document.getElementById('Series');
const searchResults = document.querySelector('.container div');
let searchTerm;
const seriesUrl = "https://www.omdbapi.com/?s=house&type=series&apikey=274cb9ed";

//get movie results
movieButton.addEventListener('click', getMovieResults);

async function getMovieResults(){
  let searchTerm = document.getElementById('search').value
  let movieUrl = "https://www.omdbapi.com/?s="+searchTerm+"&type=movie&apikey=274cb9ed";
  const tvData = await fetch(movieUrl,{
    headers:{
      'Accept':'application/json',
    } });
    const tvDataObj = await tvData.json();
    console.log(tvData);
    console.log(tvDataObj);

    //the below code shows the title of the first entry in tvDataObj 
    // document.getElementById('results').innerHTML = JSON.stringify(tvDataObj.Search[9].Title)
}

//get series results
seriesButton.addEventListener('click',getSeriesResults)

async function getSeriesResults(){
  let searchTerm = document.getElementById('search').value
  let seriesUrl = "https://www.omdbapi.com/?s="+searchTerm+"&type=series&apikey=274cb9ed";
  const tvData = await fetch(seriesUrl,{
    headers:{
      'Accept':'application/json',
    } });
    const tvDataObj = await tvData.json();;

    document.getElementById('title').textContent = tvDataObj.Search[0].Title
    document.getElementById('year').textContent = tvDataObj.Search[0].Year
    document.getElementById('poster').src = tvDataObj.Search[0].Poster
    
    console.log(tvData);
    console.log(tvDataObj);

    //I think I need to do something with math.random to get the random results through the results.

    //the below code shows all data in tvDataObj 
    // document.getElementById('results').innerHTML = JSON.stringify(tvDataObj);
}

