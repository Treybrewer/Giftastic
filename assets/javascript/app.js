var videoGames = ["PUBG", "Battlefield One", "Just Cause 3", "The Divison"];

function displayGifInfo() {

    var gif = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=0MyriydFXBlUrBin9gk5A3XqhQWPtbBR&limit=5";

    // Creating an AJAX call 
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // Creating a div to hold the movie
        var gifDiv = $("<div class='gif'>");

        // Storing the rating data
        var results = response.data;
        var rated = results[0].rating;

        // Creating an element to have the rating displayed
        var p = $("<p>").text("Rating: " + rated);

        // Displaying the rating
        gifDiv.append(p);

        // Retrieving the URL for the image
        for (var i = 0; i < results.length; i++) {
            var imgURL = results[i].images;
            console.log(imgURL);
            var imgURL1 = imgURL.original;

            console.log(imgURL1);
            var imgURL2 = imgURL1.url;
            console.log(imgURL2);
            var image = $("<img>").attr("src", imgURL2);

        };
       


        // Appending the image
        gifDiv.append(image);

        // Putting the entire gif above the previous gifs
        $("#gifsview").append(gifDiv);
        console.log(response);
    });

}


