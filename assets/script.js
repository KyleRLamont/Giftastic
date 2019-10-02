$(document).ready(function() {

var animals = ["cat", "dog", "fish", "squirrel", "bird", "rabbit", "racoon", "skunk", "snake", "lion", "puppy", "kitten", "hamster", "deer", "owl", "hawk"];

function renderButtons() {
    $("#searchbutton").empty();
    for (var i = 0; i < animals.length; i++) {
        var a = $("<button>");
        a.addClass("animal btn btn-secondary btn-lg");
        a.attr("data-name", animals[i]);
        a.text(animals[i]);
        $("#searchbutton").append(a);
      }
    };

renderButtons();

$("#animalbtn").on("click", function(event) {
    event.preventDefault();
    var newanimal = $("#animaladd").val().trim();
    animals.push(newanimal);
    renderButtons();
    $("form").trigger("reset");
  });

$(document).on("click", ".animal", displaygifs);
    function displaygifs(){
        var searchterm = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=Bk5QuTfcpPza5xYFYcMKbn1rl0kIDzw6&q=" + searchterm + "&limit=10&offset=0&lang=en"
        
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);
            var responseedit = response.data;
            console.log(responseedit);
            for (var i = 0; i < responseedit.length; i++){
                var animalDiv = $("<div>");
                var p = $("<p>").text("Rating: " + responseedit[i].rating);
                var animgif = $("<img>");
                    animgif.attr("src", responseedit[i].images.fixed_height_small_still.url);
                    animgif.attr("data-still", responseedit[i].images.fixed_height_small_still.url);
                    animgif.attr("data-animate", responseedit[i].images.fixed_height_small.url);
                    animgif.attr("data-state", "still");
                    animgif.addClass("gif");
                animalDiv.append(p);
                animalDiv.append(animgif);
                $("#resultgif").prepend(animalDiv);
            }
        });
    };
});