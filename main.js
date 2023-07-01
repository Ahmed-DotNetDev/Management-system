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

//Create Product
let data = localStorage.Product !== '' ? JSON.parse(localStorage.Product) : [];

submit.onclick = function () {
    let producting = {
        title: title.value,
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,
        category: category.value,
    }
    data.push(producting);
    localStorage.setItem('Product', JSON.stringify(data));
    console.log(data);
    ClearData();
}


function ClearData() {
    //location.reload();
    title.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    discount.value = '';
    total.innerHTML = '';
    count.value = '';
    category.value = '';
}














function selectSearch(event) {
    var button = event.target;
    button.classList.toggle("selected");
}
