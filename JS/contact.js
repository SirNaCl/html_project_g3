$(document).ready(function () {
    $(".contactToggle").on("click", function () {
        //Shows and hides the <p> when the button/image is clicked
        $(this).closest("div").find("p").slideToggle()
    })
});