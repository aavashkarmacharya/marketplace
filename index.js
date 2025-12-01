const item = document.getElementById("item");
const btn1 = document.getElementById("btn-srch");
const prdt = document.getElementById("products");

const data = [
  {
    id: 1,
    name: "Random",
    amount: 150,
    quantity: 100,
  },
  {
    id: 2,
    name: "random",
    amount: 150,
    quantity: 100,
  },
  {
    id: 3,
    name: "Random",
    amount: 150,
    quantity: 100,
  },
  {
    id: 4,
    name: "Random",
    amount: 150,
    quantity: 100,
  },
  {
    id: 5,
    name: "Random",
    amount: 150,
    quantity: 100,
  },
  {
    id: 6,
    name: "Random",
    amount: 150,
    quantity: 100,
  },
];

const JSONstring = JSON.stringify(data);


const localdata = localStorage.getItem("setJSON");
if(!localdata){
    
    localStorage.setItem("setJSON", JSONstring);
}
const stored = localStorage.getItem("setJSON");

if (stored) {
  const parsedata = JSON.parse(stored);
  parsedata.forEach((data) => {
    createcard(data);
  });
}



function createcard(product) {
  const contain = document.createElement("div");
  contain.classList.add("productcard");
  const details = document.createElement("li");
  details.classList.add("productlist");

  const name = document.createElement("p");
  name.textContent = "Name: " + product.name;

  const pr = document.createElement("p");
  pr.textContent = "price: " + product.amount;

  const stk = document.createElement("p");
  stk.textContent = "stock: " + product.quantity;

  details.appendChild(name);
  details.appendChild(pr);
  details.appendChild(stk);

  contain.appendChild(details);
  prdt.appendChild(contain);
}


//  search function

item.addEventListener("keypress", function(event){
if(event.key === "Enter"){  
    btn1.click();
}
});



btn1.onclick = () => {
const tester = item.value;

    const result = JSON.parse(stored).filter(p => p.name == tester);
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
     name.textContent = "Name:" + product.name;
     const pr = document.createElement("p");
     pr.textContent = "Price: " + product.amount;
     const stk = document.createElement("p");
     stk.textContent = "Stock: " + product.quantity;
     values.appendChild(name);
     values.appendChild(pr);
     values.appendChild(stk);
     containsrch.appendChild(values);
     prdt.appendChild(containsrch);
    });
    }
    
}

