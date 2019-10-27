$(document).ready(function () {

    var topics = ["new york jets", "dave chappelle", "tacos", "dominican republic"];


    function renderButtons() {
        $("#buttons-go-here").empty();

        for (var i = 0; i < topics.length; i++) {

            var gif = $("<button>");

            gif.addClass("topics");

            gif.attr("data-search", topics[i]);

            gif.text(topics[i]);

            $("#buttons-go-here").append(gif);
        }

    }
    $("#add-button").submit(function (event) {
        event.preventDefault();
       
        var userInput = $("#input").val().trim();
        topics.push(userInput);
        renderButtons();
        console.log(topics);
    });

    renderButtons();

    $(document).on("click", ".topics", function(){
		var x = $(this).data("search");
		console.log(x);

		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=eXB5R1zPqIqwTl7XTFq8RkMNTH2Mrknc&limit=10"; 
		console.log(queryURL);

		$.ajax({url:queryURL, method: "GET"})
			.done(function(response){
				console.log(response);
				for (var i=0; i < response.data.length; i++){
					$("#gifs-go-here").prepend("<p>Rating: " + response.data[i].rating+"<p>");
					$("#gifs-go-here").prepend("<img src='" + response.data[i].images.downsized.url + "'heigth=400px, width=300px>");
				}
            })
            
				
            });
            
            // function gifAnimate() {
            //     var state = $(this).attr("data-state");
            //     if (state === "still") {
            //         $(this).attr("src", $(this).attr("data-animate"));
            //         $(this).attr("data-state", "animate");
            //     } else {
            //         $(this).attr("src", $(this).attr("data-still"));
            //         $(this).attr("data-state", "still");
        
            //     }
            // }
        
    
    
});