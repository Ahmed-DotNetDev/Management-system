let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let count = document.getElementById("count");
let category = document.getElementById("category");
let submit = document.getElementById("submit");
//For testing
console.log(title, price, taxes, ads, discount, total, count, category, submit);
//Get Total
function GetTotal() {
    if (price.value != '') {
        let result = +price.value + +ads.value + +taxes.value - +discount.value;
        total.innerHTML = result;
        total.style.background = 'green';
    }
    else {
        total.style.background = '#e20c9b';
        total.innerHTML = '';

    }
}


















function selectSearch(event) {
    var button = event.target;
    button.classList.toggle("selected");
}
