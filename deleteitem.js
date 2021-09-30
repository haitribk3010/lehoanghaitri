var products = [
    {
        name: "Analogue Resin Strap",
        tag: "analogueresinstrap",
        photo: "anhshop1front",
        price: 20,
        inCart: 0,
    },
    {
        name: "Blush Beanie",
        tag: "blushbeanie",
        photo: "anhshop2front",
        price: 15,
        inCart: 0,
    },
    {
        name: "Ridley High Waist",
        tag: "ridleyhighwaist",
        photo: "anhshop3front",
        price: 22,
        inCart: 0,
    },
    {
        name: "Cluse La Boheme Rose Gold",
        tag: "cluselabohemerosegold",
        photo: "anhshop4front",
        price: 12,
        inCart: 0,
    },
    {
        name: "Mercury Tee",
        tag: "mercurytee",
        photo: "anhshop5front",
        price: 29,
        inCart: 0,
    },
    {
        name: "La Bohème Rose Gold",
        tag: "labohèmerosegold",
        photo: "anhshop6front",
        price: 50,
        inCart: 0,
    },
    {
        name: "Analogue Resin Strap",
        tag: "analogueresinstrap",
        photo: "anhshop7front",
        price: 25,
        inCart: 0,
    },
    {
        name: "Black Mountain Hat",
        tag: "Black Mountain Hat",
        photo: "anhshop8front",
        price: 15,
        inCart: 0,
    },
    {
        name: "City Backpack Black",
        tag: "citybackpackblack",
        photo: "anhshop9front",
        price: 20,
        inCart: 0,
    },
    {
        name: "Women Black Pants",
        tag: "womenblackpants",
        photo: "anhshop10front",
        price: 25,
        inCart: 0,
    },
    {
        name: "Mercury Tee",
        tag: "mercurytee",
        photo: "anhshop11front",
        price: 23,
        inCart: 0,
    },
    {
        name: "Men Pants",
        tag: "menpants",
        photo: "anhshop12front",
        price: 30,
        inCart: 0,
    },
    {
        name: "Short Sleeved Hoodie",
        tag: "shortsleevedhoodie",
        photo: "anhshop3front",
        price: 24,
        inCart: 0,
    },
    {
        name: "Sweatshirt In Geometric Print",
        tag: "sweatshirtingeometricprint",
        photo: "anhshop14front",
        price: 20,
        inCart: 0,
    },
    {
        name: "Dusk Pom Beanie",
        tag: "duskpombeanie",
        photo: "anhshop15front",
        price: 23,
        inCart: 0,
    },
    {
        name: "Circle Snapback Cap",
        tag: "circlesnapbackcap",
        photo: "anhshop16front",
        price: 32,
        inCart: 0,
    },
]

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}
function ready() {
    var buttonRemove = document.getElementsByClassName('btn-dangerous');
    for (var i = 0; i < buttonRemove.length; i++) {
        var beingRemovedBtn = buttonRemove[i];
        beingRemovedBtn.addEventListener('click', function (event) {
            var buttonClicked = event.target
            buttonClicked.parentElement.parentElement.parentElement.parentElement.remove()
            updateCartTotal()
        })
    }
    var quantityInput = document.getElementsByClassName('quantity-input')

    for (var i = 0; i < quantityInput.length; i++) {
        var input = quantityInput[i];
        input.addEventListener('change', quantityChanged)

    }
    

}

var addToCartButtons = document.querySelectorAll('.add-to-cart')
for (let i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i];
    button.addEventListener('click', () => {
        cartNumbers(products[i])
        totalCost(products[i])
    }
    )
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers')
    if (productNumbers) {
        document.querySelector('.added-cart span').textContent = productNumbers;
    }

}

function cartNumbers(product) {
    var productNumbers = localStorage.getItem('cartNumbers')
    productNumbers = parseInt(productNumbers)

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1)
        document.querySelector('.added-cart span').textContent = productNumbers + 1

    } else {
        localStorage.setItem('cartNumbers', 1)
        document.querySelector('.added-cart span').textContent = 1

    }
    function setItems() {
        let cartItems = localStorage.getItem('productsInCart')
        cartItems = JSON.parse(cartItems)
        if (cartItems != null) {
            if (cartItems[product.tag] == undefined) {
                cartItems = {
                    ...cartItems,
                    [product.tag]: product
                }
            }
            cartItems[product.tag].inCart += 1
        } else {
            product.inCart = 1;
            cartItems = {
                [product.tag]: product
            }
        }


        localStorage.setItem("productsInCart", JSON.stringify(cartItems))
    }
    setItems(product)

}

function setItems() {
    console.log("inside of setitems")
    console.log("my product is", product)
}

function quantityChanged(event) {
    var input = event.target
    console.log(input.value)

    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
    totalCost()
    displayCart()
    function totalCost(product) {
        // console.log("the product's price is", product.price)
        let cartCost = localStorage.getItem("totalCost")
        if (cartCost != null) {
            cartCost = parseInt(cartCost)
            localStorage.setItem("totalCost", cartCost + product.price)
        } else {
            localStorage.setItem("totalCost", product.price)
    
        }
    }

}

function totalCost(product) {
    // console.log("the product's price is", product.price)
    let cartCost = localStorage.getItem("totalCost")
    if (cartCost != null) {
        cartCost = parseInt(cartCost)
        localStorage.setItem("totalCost", cartCost + product.price)
    } else {
        localStorage.setItem("totalCost", product.price)

    }
}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    let cartCost = localStorage.getItem("totalCost")

    cartItems = JSON.parse(cartItems)
    let productContainer = document.querySelector(".cart-section")
    console.log(cartItems)
    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            
            <div class="container" style="display: flex; justify-content: center;">
                <div class="myrow cart-items">
                    <div class="cart-info">
                        <div class="col-5 product-info" style="display: flex;">
                            <div class="product-img">
                                <img src="images/${item.photo}.jpeg" alt="">
                            </div>
                            <div class="product-title">
                                ${item.name}
                            </div>
                        </div>
                        <div class="col-3 product-price">
                            <div class="price-item">
                                $${item.price},00
                            </div>
                        </div>
                        <div class="col-2 quantity-product">
                            <div class="quantity-choose">
                                <!-- <button id="minus-btn" class="btn btn-decrease">-</button> -->
                                <input id="input-number" type="number" class="quantity-input" value="${item.inCart}">
                                <!-- <button id="plus-btn" class="btn btn-increase ">+</button> -->

                            </div>
                        </div>
                        <div class="col-1 total-price-item">
                            <div class="total-price">
                                $${item.price*item.inCart},00
                            </div>
                        </div>
                        <div class="col-1 remove">
                            <div class="remove-icon">
                                <button class="btn-dangerous">
                                    <i class="far fa-trash-alt"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <hr>
            
        </div>
            `
        });
        productContainer.innerHTML += `
        <div class="total">
                <div class="container">
                    <div class="myrow">
                        <div class="total-cart">
                            <span style="margin-right: 100px;">Total cost: </span><span class="very-total">$${cartCost},00</span>
                        </div>
                        <div class="checkout">
                        <a href="checkout.html"><button class="btn btn-checkout">Check out</button></a>
                        </div>
                        <div class="checkout">
                            <a href="index.html"><button class="btn btn-checkout">Back to shop</button></a>
                        </div>
                    </div>
                </div>

            </div>
        `

    }

}
onLoadCartNumbers();
displayCart();


////////////////////////////////////////////////////////////////
    function updateCartTotal() {
        var cartItemContainer = document.getElementsByClassName('cart-items')[0]
        var cartRows = cartItemContainer.getElementsByClassName('cart-info')
        var total = 0;
        for (var i = 0; i < cartRows.length; i++) {
            var cartRow = cartRows[i];
            var priceElement = cartRow.getElementsByClassName('price-item')[0]
            var quantityElement = cartRow.getElementsByClassName('quantity-input')[0]
            var subtotal = cartRow.getElementsByClassName('total-price')[0]
            var price = parseFloat(priceElement.innerText.replace('$', ''))
            var quantity = quantityElement.value
            total = total + price * quantity
            subtotal.innerText = '$' + price * quantity +',00'

        }
        total = Math.round(total * 100) / 100
        document.getElementsByClassName('very-total')[0].innerText = '$' + total +',00';
        console.log(total)
    }

function updateInput(){

}

