let bar =document.getElementById("hambar")
let navbar = document.getElementById("navbar")
let mid = document.getElementById("middle")
console.log(bar)
console.log(mid)
if(bar){
    bar.addEventListener("click", ()=>{
        navbar.classList.toggle("active2");
    })
}
mid.addEventListener("click", ()=>{
    navbar.classList.remove("active2")
})