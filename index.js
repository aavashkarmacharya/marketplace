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
   id: 1,
pname: "random",
price: 150,
stock: 100, 
},
{
id: 1,
pname: "Random",
price: 150,
stock: 100,
},
{
id: 1,
pname: "Random",
price: 150,
stock: 100,
},
{
id: 1,
pname: "Random",
price: 150,
stock: 100,
},
{
id: 1,
pname: "Random",
price: 150,
stock: 100,
},

]
data.forEach(product =>{
    const contain = document.createElement("div");
    contain.classList.add("productcard");
    const details = document.createElement("li");
    details.classList.add("productlist")

    const name = document.createElement("p");
    name.textContent =  "Name: " + product.pname;
    console.log(name);

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