const quote = document.getElementById("quote");
const author = document.getElementById("author");

const button = document.getElementById("btn"); 
const Tweet = document.getElementById("twt");

const api_url = "https://api.quotable.io/random";

async function getquote(url){
  const response = await fetch(url);
  var data = await response.json();
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}
getquote(api_url);


button.addEventListener("click", () =>{
  getquote(api_url);
})


Tweet.addEventListener("click", ()=>{
  tweet();
})

function tweet(){
  window.open("https://twitter.com/intent/tweet?text="  + `"${quote.innerHTML}"`+ " ---- by " + author.innerHTML , "Tweet Window", "width=600, height=300");
}