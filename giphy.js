var princessArr = ["Princess Rapunzel", "Princess Jasmine", "Princess Elsa", "Princess Cinderella"];
function createButton(){
    var container = $("#containerForNames");
    container.empty();
    for (var i=0;i<princessArr.length; i++){
        var button = $("<button>");
        button.text(princessArr[i]);
        button.attr("data-princess", princessArr[i]);
        button.on("click", function() {
            $("#gif-appear").empty();
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
                    disneyPrincessPictures.attr("src", dataResult[i].images.fixed_height_still.url);
                    disneyPrincessPictures.attr("data-alt", dataResult[i].images.fixed_height.url);
                    disneyPrincessPictures.on("click", function(){
                        var img = $(this);
                        var src = img.attr("src");
                        var imgAlt = img.attr("data-alt");
                        img.attr("src", imgAlt);
                        img.attr("data-alt", src);
                    });
                    disneyPrincess.addClass("col-6");
                    disneyPrincess.prepend(paragraph);
                    disneyPrincess.prepend(disneyPrincessPictures);
                    $("#gif-appear").prepend(disneyPrincess);
                   
    
                }
                
            });
    
        });

        container.append(button);
    }
}   
$(function(){
    createButton();

    
    
   

});
function populatingArray(){
    var newPrincess = $("#yourPrincess").val();
    princessArr.push(newPrincess);
    createButton();
}
