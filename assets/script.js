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
        $("#resultgif").empty();
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
                var animalDiv = $("<button>");
                animalDiv.addClass("btn btn-outline-success d-inline-block");
                var p = $("<p>").text("Rating: " + responseedit[i].rating);
                var animgif = $("<img>");
                    animgif.attr("src", responseedit[i].images.fixed_height_still.url);
                    animgif.attr("data-still", responseedit[i].images.fixed_height_still.url);
                    animgif.attr("data-animate", responseedit[i].images.fixed_height.url);
                    animgif.attr("data-state", "still");
                    animgif.addClass("gif");
                animalDiv.append(p);
                animalDiv.append(animgif);
                $("#resultgif").prepend(animalDiv);
            }
        });
    };
    $(document).on("click", ".gif", function() {
        var state = $(this).attr("data-state");
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
    }});
});