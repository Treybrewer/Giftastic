var videoGames = ["PUBG", "Battlefield One", "Call of Duty", "Skyrim", "Rainbow Six"];

function displayGifInfo() {

    var gif = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=0MyriydFXBlUrBin9gk5A3XqhQWPtbBR&limit=5";

    // Creating an AJAX call 
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // Creating a div to hold the gif
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
       


        gifDiv.append(image);

        // Putting the entire gif above the previous gifs
        $("#gifsview").append(gifDiv);
        console.log(response);
    });

};
function renderButtons() {

   
    $("#renderedButtons").empty();

    for (var i = 0; i < videoGames.length; i++) {

      var a = $("<button>");
      // Adding a class of gif-btn to our button
      a.addClass("gif-btn");
      // Adding a data-attribute
      a.attr("data-name", videoGames[i]);
      // Providing the initial button text
      a.text(videoGames[i]);
      // Adding the button to the gif-view div
      $("#renderedButtons").append(a);

    }
  }

  // This function handles events where a gif button is clicked
  $("#add-gif").on("click", function (event) {
    event.preventDefault();
    // This line grabs the input from the textbox
    var gif = $("#gif-input").val().trim();
    console.log(gif);
    
    videoGames.push(gif);

    
    renderButtons();
  });

  $(document).on("click", ".gif-btn", displayGifInfo);

  // Calling the renderButtons function to display the intial buttons
  renderButtons();


