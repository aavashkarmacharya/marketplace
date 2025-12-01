const btn = document.getElementById("btns");
const form = document.getElementById("form");

form.addEventListener("submit", function(event){
    event.preventDefault();
})

btn.onclick= () =>{
    const newdata = new FormData(form);
    const pname = newdata.get("pname");
    const price = newdata.get("price");
    const stock = newdata.get("stock");
    
    const product = localStorage.getItem("setJSON");
    const parsedProduct = JSON.parse(product)
    const data = {
        id: parsedProduct.length +1,
        name: pname,
        amount: parseInt(price),
        quantity: parseInt( stock) 
    }

    const newProducts = [...parsedProduct, data]
    JSONstring = JSON.stringify(newProducts);

    localStorage.setItem("setJSON", JSONstring);
    
}


