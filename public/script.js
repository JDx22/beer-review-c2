
var app=BeerReviewApp();
$(".post-beer").on("click",function(){

    var beerName=$(".beer-input").val();
    var category=$(".category-input").val();
    var rating=$( "select.rating-input option:checked" ).val();
    if(rating==="1" || rating==="2" || rating==="3" || rating==="4" || rating==="5")
    {
        app.addBeer(beerName,category,rating);
        app.renderBeers();
    }

})



$(".sort").on("click",function(){
    app.sort();
    app.renderBeers();
})

function BeerReviewApp()
{
    var beers=[]; 
    var sortAsending=false;
 
    function renderBeers()
    {
        $(".beers-list").empty();
        for(var i=0; i< beers.length ; i++)
        {
            $("ul").append("<li> Beer Name: "+beers[i]["name"]+" Category: "+beers[i]["category"]+" Rating: "+beers[i]["rating"]+"</li>");
        }
    }
    function addBeer(name,category,rating)
    {
        beers.push({"name": name, "category":category, "rating":rating});
    }

    function sort()
    {
        sortAsending=!sortAsending;

        beers.sort(function(a,b){
        if(sortAsending)
            return a.rating-b.rating;
        else
            return b.rating-a.rating;
        });
    }

    return {
            renderBeers: renderBeers,
            addBeer: addBeer,
            sort: sort

            };
}