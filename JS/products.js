$(document).ready(function(){

    $(".comments").on("click", function(){

        if($(this).closest("div").find("form").hasClass(".hidden")){
            $(this).closest("div").find("form").removeClass(".hidden");
        }
        else{
            $(this).closest("div").find("form").addClass(".hidden");
        }
    });

    $(".info").on("click",function(){

        if($(this).closest("div").closest("li").find("div:nth-child(2)").hasClass("hidden")) {
            $(this).closest("div").closest("li").find("div").removeClass("hidden");
        }
        else{
            $(this).closest("div").closest("li").find("div:nth-child(2)").addClass("hidden");
        }
    });





});

