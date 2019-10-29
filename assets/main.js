$(document).ready(function () {
// create an array of topics

    var topics = ["new york jets", "dave chappelle", "tacos", "dominican republic"];

// function that creates buttons

    function renderButtons() {
        $("#buttons-go-here").empty();

// for loop to go through array
        for (var i = 0; i < topics.length; i++) {

// create a variable and give it a value of buttons, adding class of topics and passing attribute of data-SVGPathSegCurvetoQuadraticSmoothAbs,
// and adding that button to the DOM
            var btn = $("<button>");


            btn.addClass("topics");

            btn.attr("data-search", topics[i]);

            btn.text(topics[i]);

            $("#buttons-go-here").append(btn);
        }

    }
    // grabbing users input to create a button and dynamically adding it to the html
    $("#add-button").submit(function (event) {

        event.preventDefault();
       
        var userInput = $("#input").val().trim();
        topics.push(userInput);
        renderButtons();
        console.log(topics);
    });

    renderButtons();

// creating a click event that will replace the topic every time users inputs value
    $(document).on("click", ".topics", function(){
		var x = $(this).data("search");
        console.log(x);
        
// ajax call to the gif api and prepending ratings and img to html
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=eXB5R1zPqIqwTl7XTFq8RkMNTH2Mrknc&limit=10"; 
		console.log(queryURL);

		$.ajax({url:queryURL, method: "GET"})
			.done(function(response){
				console.log(response);
				for (var i=0; i < response.data.length; i++){
					$("#gif-area").prepend("<p>Rating: " + response.data[i].rating+"<p>");
					$("#gif-area").prepend("<img src='" + response.data[i].images.downsized.url + "'heigth=200px, width=200px>");
				}
            })
            
				
            });
            
            
        
        
});