var princessArr = ["Rapunzel", "Jasmine", "Elsa", "Cinderella"];
    princessArr.push(" ");
    
$(function(){
    var container = $("#container");
    function createButton(){
        for (var i=0;i<princessArr.length; i++){
            var button = $("<button>");
            button.text(princessArr[i]);
            button.attr("data-princess", princessArr[i]);
            container.append(button);
        }
    }
    createButton();

    $("button").on("click", function() {
        var princess = $(this).attr("data-princess");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        princess + "&api_key=zSTnVgAYjyr7c7MzO7WFrf1YCxzqwqdg&limit=10";

        $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response){
            var dataResult = response.data;
            console.log(response.data);
            for (var i=0; i<dataResult.length; i++){
                var disneyPrincess = $("<div>");
                var paragraph = $("<p>");
                var rating = dataResult[i].rating;
                paragraph.text("Rating: " + rating);
                var disneyPrincessPictures = $("<img>");
                disneyPrincessPictures.attr("src", dataResult[i].images.fixed_height.url);
                disneyPrincess.prepend(paragraph);
                disneyPrincess.prepend(disneyPrincessPictures);
                $("#gif-appear").prepend(disneyPrincess);
            }
        });

    });
});