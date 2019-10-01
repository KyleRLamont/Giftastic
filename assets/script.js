var animals = ["cat", "dog", "fish", "squirrel", "bird", "rabbit", "racoon", "skunk", "snake", "lion", "puppy", "kitten", "hamster", "deer", "owl", "hawk"]




$(document).on("click", ".animal", displaygifs);
    function displaygifs(){
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=Bk5QuTfcpPza5xYFYcMKbn1rl0kIDzw6&q=" + searchterm + "&limit=10&offset=0&rating=G&lang=en"
        var searchterm = $("#searchbutton").val();

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {

        });
    };