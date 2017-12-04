$(document).ready(function(){
    setPriceTotal();
    $(".newAmount").on("change",updatePrice).on("click",updatePrice);
    $(".shippingField").find("label").on("click", setPriceTotal);
});

function updatePrice(){
    //Updates the price of the targeted product
    $(this).closest("div").closest("li").find(".price").text(getPriceProduct($(this)) + ":-");
    setPriceTotal();
}

function getPriceProduct(object) {
    //Calculates the total cost of the amount of the specified product
    var price = object.closest("div").closest("li").data("price");
    var amount = object.val();
    return price * amount;
}

function setPriceTotal() {
    //Calculates and displays the total price of all the products in the cart
    var total = 0;
    var price = 0;
    var amount = 0;
    $(".product").each(function () {
        price = $(this).data("price");
        amount = $(this).find(".amount").find(".newAmount").val();
        total += price * amount;
    });
    $(".totalValue").text(total + getShippingCost())
}

function getShippingCost() {
    //Returns the shipping cost of the chosen delivery method
    var shippingCost;
    var shippinglabel = $(".shippingField").find("label");
    if (shippinglabel.find("#shippingStandard").is(":checked")){shippingCost = 5; }
    else if (shippinglabel.find("#shippingExpress").is(":checked")){shippingCost = 10; }
    else if (shippinglabel.find("#shippingHome").is(":checked")){shippingCost = 20; }
    return shippingCost
}
