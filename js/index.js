$(document).ready(function(){
  var randomQuote; 
  var randomNum;
  var author;
  getQuote();
  function getQuote(){
    
    var quotes = ["Hello, World!", "Hello, There!", "Hello, Goodbye!"];
    var author1 = ["Author1", "Author2", "Author3"];
    
    var randomNum = Math.floor((Math.random()*quotes.length));
     randomQuote = quotes[randomNum];
     author = author1[randomNum];
    
    $(".quote").text(randomQuote);
    $(".author").text(author);
  }
    
  $("#tweet").on("click", function(){
      window.open("https://twitter.com/intent/tweet?text="+randomQuote + " " + author );
    });
  
  $("#newQuote").on("click", function(){
      getQuote();
    });
  
})