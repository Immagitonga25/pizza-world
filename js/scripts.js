//User interface logic
$(document).ready(function () {
  $("form#placeorder").submit(function (event) {
    event.preventDefault();

    var pizza = $("#pizza option:selected").val();
    console.log(pizza);
    var size = $("#pizzasize option:selected").val();
    var crust = $("#pizzacrust option:selected").val();
    var toppings = $("#toppings option:selected").val();
    var quantity = parseInt($("input#quantity").val());
    console.log(quantity);
    var delivery = $("#deliveryoption option:selected").val();

    var price, totalPrice;
    switch (size) {
      case (size = "small"):
        price = 500;
        if (toppings === "sauce") {
          totalPrice = price + 50;
        } else if (toppings === "bacon") {
          totalPrice = price + 100;
        } else {
          totalPrice = price + 150;
        }
        break;
      case (size = "medium"):
        price = 800;
        if (toppings === "sauce") {
          totalPrice = price + 50;
        } else if (toppings === "bacon") {
          totalPrice = price + 100;
        } else {
          totalPrice = price + 150;
        }
        break;
      case (size = "large"):
        price = 1000;
        if (toppings === "sauce") {
          totalPrice = price + 50;
        } else if (toppings === "bacon") {
          totalPrice = price + 100;
        } else {
          totalPrice = price + 150;
        }
        break;
    }
    switch (crust) {
      case (crust = "crispy"):
        totalPrice = totalPrice + 100;
        break;
      case (crust = "stuffed"):
        totalPrice = totalPrice + 200;
        break;
      case (crust = "gluten-free"):
        totalPrice = totalPrice + 250;
        break;
    }
    var totalPrice = totalPrice * quantity;
    console.log(totalPrice);

    //delivery prompt
    if (delivery === "delivery") {
      var location = prompt("Enter delivery location: ");
      alert(
        "Your order will be delivered at " +
          location +
          ". Kindly pay the rider Ksh 200 on arrival."
      );
    } else {
      alert("Pick up your order from the restaurant.");
    }

    $("tbody#checkout").append(
      "<tr><td>" +
        pizza +
        "</td>" +
        "<td>" +
        size +
        "</td>" +
        "<td>" +
        crust +
        "</td>" +
        "<td>" +
        toppings +
        "</td>" +
        "<td>" +
        quantity +
        "</td>" +
        "<td>" +
        delivery +
        "</td>" +
        "<td>" +
        totalPrice +
        "</td></tr>"
    );
  });
  $(".contact-info form").submit(function (event) {
    event.preventDefault();
    var contactName = $("input#contact-name").val();
    var contactEmail = $("input#contact-email").val();
    var contactMessage =$("textarea#contact-message").val();
    alert(contactName + ", we have recieved your message. Thank you for contacting us."
    );
  });
});
