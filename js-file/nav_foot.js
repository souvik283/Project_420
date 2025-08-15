let bar =document.getElementById("hambar")
let navbar = document.getElementById("navbar")
if(bar){
    bar.addEventListener("click", ()=>{
        navbar.classList.toggle("active2");
    })
}
