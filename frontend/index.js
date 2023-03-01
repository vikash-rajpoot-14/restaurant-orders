
const amount = document.getElementById('amount');
const dish = document.getElementById('dish');
const table = document.getElementById('table');
const submit = document.getElementById('submit')
const ul1 = document.getElementById('list1')
const ul2 = document.getElementById('list2')
const ul3 = document.getElementById('list3')
submit.addEventListener('click', showHandler);

async function showHandler() {
    const orderObject = {
        amount: amount.value,
        dish: dish.value,
        category: table.value
    }
    await axios.post("http://localhost:3000/crudcrud.com/orders", orderObject);
    showData();
    amount.value = "",
        dish.value = "",
        table.value = ""
}

function showData() {
    axios.get("http://localhost:3000/crudcrud.com/orders").then(res => {
        const table1Obj = res.data.orders.filter(e => e.category == "table1");
        const table2Obj = res.data.orders.filter(e => e.category == "table2");
        const table3Obj = res.data.orders.filter(e => e.category == "table3");
        showTableData(table1Obj, ul1);
        showTableData(table2Obj, ul2);
        showTableData(table3Obj, ul3);
    }).catch(err => console.log(err));
}

function showTableData(orders, ul) {
    let listData = "";
    orders.map(order => {
        listData += '<li class="list-group">';
        listData += `${order.amount} ${order.dish} ${order.category}`;
        listData += "<button class='btn-delete' onclick='deleteData(`" + order._id + "`)'>delete</button>";
        listData += "</li>";
        ul.innerHTML = listData;
    })
}
function deleteData(id) {
    axios.delete("http://localhost:3000/crudcrud.com/orders/" + id).then(() => showData())
}
showData();
