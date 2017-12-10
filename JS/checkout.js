$(document).ready(function() {
    setPriceTotal();
    $(".newAmount").on("change", updatePrice).on("click", updatePrice);
    $(".shippingField").find("label").on("click", setPriceTotal);

    $("button").click(function() {
        $(this).closest("li").hide();
    });

    $("#btnReset").click(function() {
        $('.product').show();
    });

    $('#btnEmptyCart').click(function() {
        $('.product').hide();
    });

});

function updatePrice() {
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
    $(".product").each(function() {
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
    if (shippinglabel.find("#shippingStandard").is(":checked")) { shippingCost = 5; } else if (shippinglabel.find("#shippingExpress").is(":checked")) { shippingCost = 10; } else if (shippinglabel.find("#shippingHome").is(":checked")) { shippingCost = 20; }
    return shippingCost
}

$('#checkout-form').submit(getReceipt);

function getReceipt(e) {
    e.preventDefault();
    var obj = {
        firstname: $('input[name=firstname]').val(),
        lastname: $('input[name=lastname]').val(),
        co: $('input[name=co]').val(),
        streetadress: $('input[name=streetadress]').val(),
        zipcode: $('input[name=zipcode]').val(),
        country: $('input[name=country]').val(),
        email: $('input[name=email]').val(),
    }

    $.each(obj, function(key, value) {
        var input = $('#checkout-form').find("input[name='" + key + "']");
        input.replaceWith("<span>" + value + "</span>");
    });

    $("h1").text("Receipt");
    $(".removeProduct").hide();
    $(".product .btn-danger").hide();
    $("#btnEmptyCart").hide();
    $("#btnReset").hide();
    alert("Thank you for your order!");

}