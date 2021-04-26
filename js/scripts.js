//Business logic
function Price(pizza, size, crust, toppings, quantity,delivery) {
    this.pizzaType = pizza;
    this.pizzaSize = size
    this.pizzaCrust = crust;
    this.pizzaToppings = toppings;
    this.quantity = quantity;
    this.delivery = delivery;
}





//User interface logic
$(document).ready(function(){
    $("form#placeorder").submit(function(event){
        event.preventDefault();
        var pizza = $("#pizza option:selected").val();
        var size = $("#pizzasize option:selected").val();
        var crust = $("#pizzacrust option:selected").val();
        var toppings = $("#toppings option:selected").val();
        var quantity = $("#quantity option:selected").val();
        var delivery = $("#deliveryoption option:selected").val();
    })
})