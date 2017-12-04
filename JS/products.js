$(document).ready(function(){

    $("#blackCoffee").on("click",function(){
        $(this).closest("div").closest("li").find("div").classRemove("hidden");
    });

});

