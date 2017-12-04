$(document).ready(function(){

    $("#blackCoffee").on("click",function(){
        if($(this).closest("div").closest("li").find("div:nth-child(2)").hasClass("hidden")) {
            $(this).closest("div").closest("li").find("div").removeClass("hidden");
        }
        else{
            $(this).closest("div").closest("li").find("div:nth-child(2)").addClass("hidden");
        }
    });

    $("#cappuccino").on("click",function(){
        if($(this).closest("div").closest("li").find("div:nth-child(2)").hasClass("hidden")) {
            $(this).closest("div").closest("li").find("div").removeClass("hidden");
        }
        else{
            $(this).closest("div").closest("li").find("div:nth-child(2)").addClass("hidden");
        }
    });

    $("#espresso").on("click",function(){
        if($(this).closest("div").closest("li").find("div:nth-child(2)").hasClass("hidden")) {
            $(this).closest("div").closest("li").find("div").removeClass("hidden");
        }
        else{
            $(this).closest("div").closest("li").find("div:nth-child(2)").addClass("hidden");
        }
    });

    $("#irishCoffee").on("click",function(){
        if($(this).closest("div").closest("li").find("div:nth-child(2)").hasClass("hidden")) {
            $(this).closest("div").closest("li").find("div").removeClass("hidden");
        }
        else{
            $(this).closest("div").closest("li").find("div:nth-child(2)").addClass("hidden");
        }
    });

    $("#greenTea").on("click",function(){
        if($(this).closest("div").closest("li").find("div:nth-child(2)").hasClass("hidden")) {
            $(this).closest("div").closest("li").find("div").removeClass("hidden");
        }
        else{
            $(this).closest("div").closest("li").find("div:nth-child(2)").addClass("hidden");
        }
    });
});

