$(document).ready(function(){

    //Shows and hides the comment section on each product
    $(".comments").on("click", function(){

        if($(this).closest("div").find("form").hasClass("hidden")){
            $(this).closest("div").find("form").removeClass("hidden");
        }
        else{
            $(this).closest("div").find("form").addClass("hidden");
        }
    });

    //Shows and hides the info section on each product
    $(".info").on("click",function(){

        if($(this).closest("div").closest("li").find("div:nth-child(2)").hasClass("hidden")) {
            $(this).closest("div").closest("li").find("div:nth-child(2)").removeClass("hidden");
        }
        else{
            $(this).closest("div").closest("li").find("div:nth-child(2)").addClass("hidden");
        }
    });

    //Catches and prints new comments on each product
    $(".submit").on("click", function(e){
        e.preventDefault();
        if($(this).closest("form").find(".forms").val() === ""){
            alert("You need to type something before submit");
        }
        else{
            var userComment = $(this).closest("form").find(".forms").val();
            $(this).closest("form").find(".oldComments").append("<p>" + userComment + "</p>");
        }
    });



});

