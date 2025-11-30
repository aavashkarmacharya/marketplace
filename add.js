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
    const data = {
        name: pname,
        amount: price,
        quantity: stock
    }
    
    const product = localStorage.getItem("setJSON");
    const parsedProduct = JSON.parse(product)

    const newProducts = [...parsedProduct, data]
    JSONstring = JSON.stringify(newProducts);

    localStorage.setItem("setJSON", JSONstring);
    console.log({newProducts});
    
}


