const msg = document.getElementById("msg");
document.getElementById("btn").addEventListener("click",
    () => { 
        msg.textContent = "You clicked me!";
});

const box = document.getElementById("box");
if (!box) {
    console.error("Element eith id 'box' not found");
}
if(box) {
    document.getElementById("colorBtn").addEventListener("click",
    () => {
        box.style.backgroundColor = "orange";
    }); 
}