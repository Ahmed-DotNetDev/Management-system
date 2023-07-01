let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let category = document.getElementById("category");
let submit = document.getElementById("submit");
//testing
console.log(title, price, taxes, ads, discount, category, submit);


//get total
function get_total() {
    try {
        if (price.value != '') {
            let result = +price.value + +ads.value + +taxes.value - +discount.value;
            total.innerHTML = result;
            total.style.background = 'green';
        }
        else {
            total.style.background = '#e20c9b';
            total.innerHTML = '';
        }
    } catch (error) {
        console.log(error);
    }
}

//create product
let dataPro;
if (localStorage.product != null) {
    dataPro = JSON.parse(localStorage.product);
} else {
    dataPro = [];
}
submit.onclick = function () {
    let newPro = {
        title: title.value,
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,
        category: category.value,
    }
    dataPro.push(newPro);
    localStorage.setItem('product', JSON.stringify(dataPro));
    console.log(dataPro);
    ClearData();
    ShowData();
}

//clear inputs
function ClearData() {
    title.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    discount.value = '';
    total.innerHTML = '';
    count.value = '';
    category.value = '';
}

//read
function ShowData() {
    let table = '';
    for (let i = 0; i < dataPro.length; i++) {
        table +=
            `
    <tr>
    <td>${i}</td>
    <td>${dataPro[i].title}</td>
    <td>${dataPro[i].price}</td>
    <td>${dataPro[i].taxes}</td>
    <td>${dataPro[i].ads}</td>
    <td>${dataPro[i].discount}</td>
    <td>${dataPro[i].total}</td>
    <td>${dataPro[i].category}</td>
    <td><button id="update">Update</button></td>
    <td><button onclick="DeleteItem(${i})" id="delete" >Delete</button></td>
    </tr>
    `;
        console.log(title);
    }
    document.getElementById("tbody").innerHTML = table;
}
ShowData();

//delete item
function DeleteItem(i) {
    dataPro.splice(i, 1);//Add new array after delete
    localStorage.product = JSON.stringify(dataPro);
    ShowData();
}




//delete all
//update
//search
//clean code