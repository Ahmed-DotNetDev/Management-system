let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let category = document.getElementById("category");
let submit = document.getElementById("submit");
//testing
//console.log(title, price, taxes, ads, discount, category, submit);

function GoAccount() {
    window.open('https://github.com/Ahmed-DotNetDev', '_blank');
}

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
    if (validationCreate()) {
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
        if (mode === 'create') {
            if (newPro.count > 0) {
                for (let i = 0; i < newPro.count; i++) {
                    dataPro.push(newPro);
                }
            } else {
                dataPro.push(newPro);
            }
        } else {
            dataPro[tmp] = newPro;
            mode = 'create';
            submit.innerHTML = 'Create';
            count.style.display = 'block';
        }
        localStorage.setItem('product', JSON.stringify(dataPro));
        // console.log(dataPro);
        ClearData();
        ShowData();
    }
    else {
        alert("FILL DATA...")
    }
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
    get_total();
    let table = '';
    for (let i = 0; i < dataPro.length; i++) {
        table +=
            `
    <tr>
    <td>${i + 1}</td>
    <td>${dataPro[i].title}</td>
    <td>${dataPro[i].price}</td>
    <td>${dataPro[i].taxes}</td>
    <td>${dataPro[i].ads}</td>
    <td>${dataPro[i].discount}</td>
    <td>${dataPro[i].total}</td>
    <td>${dataPro[i].category}</td>
    <td><button onclick="UpdateData(${i})" id="update">Update</button></td>
    <td><button onclick="DeleteItem(${i})" id="delete" >Delete</button></td>
    </tr>
    `;
        // console.log(title);
    }
    document.getElementById("tbody").innerHTML = table;
    let deleteallbtn = document.getElementById("deleteALL");
    if (dataPro.length > 0) {
        deleteallbtn.innerHTML = `<button onclick="ClearDllData()" id="clear">Delete All (${dataPro.length})</button>`;
    }
    else {
        deleteallbtn.innerHTML = ``;
    }
}
ShowData();

//delete item
function DeleteItem(i) {
    dataPro.splice(i, 1);//Add new array after delete
    localStorage.product = JSON.stringify(dataPro);
    ShowData();
}

//delete all
function ClearDllData() {
    localStorage.clear();
    dataPro.splice(0);
    ShowData();
    location.reload();
}

let mode = 'create';
let tmp;
//update
function UpdateData(i) {
    //test
    //console.log(i);
    title.value = dataPro[i].title;
    price.value = dataPro[i].price;
    taxes.value = dataPro[i].taxes;
    ads.value = dataPro[i].ads;
    discount.value = dataPro[i].discount;
    get_total();
    count.style.display = 'none';
    category.value = dataPro[i].category;
    submit.innerHTML = 'Update';
    mode = 'update';
    tmp = i;
    scroll({
        top: 0,
        behavior: "smooth",
    })
}

//search
let searchMode = 'title';
let searchinput = document.getElementById("search");
function GetSearchMood(id) {
    //Test
    // console.log(id);
    if (id == 'search-title') {
        searchMode = 'title';
    }
    else {
        searchMode = 'category';
    }
    searchinput.placeholder = `Search By: ${searchMode}`
    searchinput.focus();
    searchinput.style.outline = '1px solid red';
    //searchinput.style.borderBottom='2px solid red';
    //Test
    // console.log(searchMode);
    searchinput.value = '';
    ShowData();
}

function searchData(value) {
    //Test
    let table;
    //console.log(value);
    for (let i = 0; i < dataPro.length; i++) {
        if (searchMode == 'title') {
            if (dataPro[i].title.includes(value)) {
                //  test
                //  console.log("yes");
                table += `
        <tr>
        <td>${i + 1}</td>
        <td>${dataPro[i].title}</td>
        <td>${dataPro[i].price}</td>
        <td>${dataPro[i].taxes}</td>
        <td>${dataPro[i].ads}</td>
        <td>${dataPro[i].discount}</td>
        <td>${dataPro[i].total}</td>
        <td>${dataPro[i].category}</td>
        <td><button onclick="UpdateData(${i})" id="update">Update</button></td>
        <td><button onclick="DeleteItem(${i})" id="delete" >Delete</button></td>
        </tr>
        `;
            }
        }
        else {
            if (dataPro[i].category.includes(value)) {
                //  test
                //  console.log("yes");
                table += `
        <tr>
        <td>${i + 1}</td>
        <td>${dataPro[i].title}</td>
        <td>${dataPro[i].price}</td>
        <td>${dataPro[i].taxes}</td>
        <td>${dataPro[i].ads}</td>
        <td>${dataPro[i].discount}</td>
        <td>${dataPro[i].total}</td>
        <td>${dataPro[i].category}</td>
        <td><button onclick="UpdateData(${i})" id="update">Update</button></td>
        <td><button onclick="DeleteItem(${i})" id="delete" >Delete</button></td>
        </tr>
        `;
            }
        }
    }
    document.getElementById("tbody").innerHTML = table;
}

function validationCreate() {
    if (title.value != '' || category.value != '' || price.value != '') {
        return true;
    }
    else {
        return false;
    }
}
//Finish project...✅