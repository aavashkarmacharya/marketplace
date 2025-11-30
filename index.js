const item = document.getElementById("item");
const btn1 = document.getElementById("btn-srch");
const pdt = document.getElementById("product-list");
const prdt = document.getElementById("products");

const data = [
{
id: 1,
pname: "Random",
price: 150,
stock: 100,
},
{
   id: 2,
pname: "random",
price: 150,
stock: 100, 
},
{
id: 3,
pname: "Random",
price: 150,
stock: 100,
},
{
id: 4,
pname: "Random",
price: 150,
stock: 100,
},
{
id: 5,
pname: "Random",
price: 150,
stock: 100,
},
{
id: 6,
pname: "Random",
price: 150,
stock: 100,
},

]

 const JSONstring = JSON.stringify(data);
localStorage.setItem("setJSON", JSONstring);
const allproduct = localStorage.getItem("setJSON");
const pharsedallproduct = JSON.parse(allproduct);
console.log(pharsedallproduct);




//creating cards

data.forEach(product =>{
    const contain = document.createElement("div");
    contain.classList.add("productcard");
    const details = document.createElement("li");
    details.classList.add("productlist")

    const name = document.createElement("p");
    name.textContent =  "Name: " + product.pname;
   
    const pr = document.createElement("p");
    pr.textContent = "price: " + product.price;

    const stk = document.createElement("p");
    stk.textContent = "stock: " + product.stock;
    

    details.appendChild(name);
    details.appendChild(pr);
    details.appendChild(stk);

    contain.appendChild(details);
    prdt.appendChild(contain);
   


}
)
//search function
btn1.onclick = () => {
const tester = item.value;
    const result = data.filter(p => p.pname == tester);
    prdt.textContent = "";
    if(result.length === 0){
        const display = document.createElement("h3");
        display.innerHTML = "No product found!!";
        prdt.appendChild(display);

    }
    if(result.length>0){
        result.forEach(product=> {
     const containsrch = document.createElement("div");
     containsrch.classList.add("productcard");
     const values = document.createElement("li");
     values.classList.add("productli");
     const name = document.createElement("p");
     name.textContent = "Name: " + product.pname;
     const pr = document.createElement("p");
     pr.textContent = "Price: " + product.price;
     const stk = document.createElement("p");
     stk.textContent = "Stock: " + product.stock;
     values.appendChild(name);
     values.appendChild(pr);
     values.appendChild(stk);
     containsrch.appendChild(values);
     prdt.appendChild(containsrch);
    });
    }
    
}

let text = localStorage.getItem("setJSON");
if(text){
let arrobj = JSON.parse(text);
if(!Array.isArray(arrobj)){
    arrobj = [arrobj];
}
arrobj.forEach(obj =>
{
const jname = obj.name;
const jprice = obj.amount;
const jstock = obj.quantity;
console.log(jname, jprice, jstock);

const contain = document.createElement("div");
    contain.classList.add("productcard");
    const details = document.createElement("li");
    details.classList.add("productlist")

    const name = document.createElement("p");
    name.textContent =  "Name: " + jname;
   
    const pr = document.createElement("p");
    pr.textContent = "price: " + jprice;

    const stk = document.createElement("p");
    stk.textContent = "stock: " + jstock;
    

    details.appendChild(name);
    details.appendChild(pr);
    details.appendChild(stk);

    contain.appendChild(details);
    prdt.appendChild(contain);
})

}





