$(document).ready(function(){
    $(".newAmmount").on("change",function () {
        var price =
        $(this).closest(".product").find(".price").text()
    })
});