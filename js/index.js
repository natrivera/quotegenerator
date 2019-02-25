//initialize variables and first quote
var number,
  search,
  gyphy,
  embed = "https://giphy.com/embed/Xc0HkcmDXrXDG",
  first = 0;
var quote = "You don't win friends with salad. -Simpsons";

//functions that will load quote
function run() {
  //get a random number
  number = Math.floor(Math.random() * quotes.length);

  //will not get a random quote the first time
  if (first != 0) {
    quote = quotes[number];
    first++;
  } else {
    first++;
  }

  //unnicode the quote to prepare tweet
  var unicode = encodeURIComponent(quote);
  unicode = unicode.replace("'", "%27");
  var twitter = "https://twitter.com/home/?status=" + unicode + " %0D%23SimpsonsQuotes %0Dhttps://natrivera.github.io/quotegenerator/" ;
  gyphy = "https://api.giphy.com/v1/gifs/search?q=the simpsons " + quote + "&api_key=dc6zaTOxFJmzC";

  //get a gif to load
  $.getJSON(gyphy, function(gif) {
    search = gif.data[0].images.fixed_height.url;
    embed = gif.data[0].embed_url;
  });

  //wait a 100 mili-second to load it since getJSON is async
  setTimeout(function() {
    $(".gif").html(
      "<iframe  frameBorder='0'  src='" +
        embed +
        "' allowFullScreen></iframe><p><a target= '_blank' href='" +
        search +
        "'>via GIPHY</a></p>"
    );
    $(".display").html(
      "<strong><h3><i class = 'fa fa-2x fa-pull-left fa-quote-left'></i> " +
        quote +
        "</h3></strong><a target='_blank' href='" +
        twitter +
        "'><p class='fa fa-2x fab fa-twitter'></p></a>"
    );
     
        //change the css to prepare output
        $(".header").html("");
        $("#one").removeAttr("class");
        $("#two").removeAttr("class");
        $("#showing").css("border", "solid yellow 4px");
        $("#showing").css("padding", "2%");
        $("iframe").css("position","relative");
        $("iframe").css("top","0px"); 
        $("iframe").css("left","0px"); 
        $("iframe").css("overflow","hidden");
        $("iframe").css("bottom","0px"); 
        $("iframe").css("right","0px"); 
        $("iframe").css("width","100%"); 
        $("iframe").css("min-height","50vh"); 
        $("iframe").css("border","none"); 
        $("iframe").css("margin","auto"); 
        $("iframe").css("padding","auto");
     
  }, 500);//end of setTimeout
}//end of run//

//run the function when the cloud is clicked
$(".button").click(function() {
  run();
});

//when the dom is ready run the function
$(document).ready(function() {
  setTimeout(function() {
    run();
  }, 3000);

  setInterval(function() {
    run();
  }, 12000);
});
