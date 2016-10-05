var cart = [];

function getCart() {
  return cart;
}

function addToCart(item) {
  var b = Math.random() * 100
  var c = Math.floor(b)
  cart.push({[item]: c})
  console.log (`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
var cartArray = []
var cartPrice = Object.keys(cart)
  if (cart.length === 0) {
    console.log ("Your shopping cart is empty.");
  }
  else {
    console.log("In your cart, you have")
    for (let i = 0; i < cart.length; i++) {
      var z = cart[i]
      var h = cart[cartPrice[i]]
      cartArray.push("z at h")
      return cartArray;
    }  } }

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}
