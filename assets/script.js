$(document).ready(function() {

var animals = ["cat", "dog", "fish", "squirrel", "bird", "rabbit", "racoon", "skunk", "snake", "lion", "puppy", "kitten", "hamster", "deer", "owl", "hawk"];

function renderButtons() {
    $("#searchbutton").empty();
    for (var i = 0; i < animals.length; i++) {
        var a = $("<button>");
        a.addClass("animal btn btn-secondary btn-sm");
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
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=Bk5QuTfcpPza5xYFYcMKbn1rl0kIDzw6&q=" + searchterm + "&limit=10&offset=0&rating=G&lang=en"
        
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response)
        });
    };
});