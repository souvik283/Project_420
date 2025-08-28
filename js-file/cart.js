let proceed_btn = document.getElementById("proceed")
let tableinputs = document.getElementsByClassName("tbody")
for (let i = 0; i < tableinputs.length; i++) {
console.log(tableinputs[i].firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML)
}
console.log(tableinputs[2].firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML)
proceed_btn.addEventListener("click",()=>{
    let amount = document.getElementById("amount1");
    let input=document.getElementById("input1")
    let subtotal = document.getElementById("subtotal1")
    console.log(amount.innerHTML* input.value)
    subtotal.innerHTML=`$${(amount.innerHTML* input.value)}`

})