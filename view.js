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
    }
];
var allviewBtn = document.getElementsByClassName("view-product");

for (let i = 0; i < allviewBtn.length; i++) {
    var viewBtn = allviewBtn[i];
    viewBtn.addEventListener('click', () => {
        loadPage(products[i])
    })

}
function loadPage(product) {
    var productInfo = document.getElementById("#this-product");
    console.log(productInfo)

}
window.onload = function () {
    var purBtn = document.querySelector('#purchase')
    purBtn.addEventListener('click', function () {
        console.log('as')
        alert('Your order is successfully purchased!');
    })

};





