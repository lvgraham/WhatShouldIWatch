const button = document.querySelector('.container button');
const tvResults = document.querySelector('.container div')

button.addEventListener('click', getTvResults);

async function getTvResults(){
  const tvData = await fetch('https://api.tvmaze.com/search/shows?q=',{
    headers:{
      'Accept':'application/json',
    } });
    const tvDataObj = await tvData.json();
    console.log(tvData);
    console.log(tvDataObj);
}