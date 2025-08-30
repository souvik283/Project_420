let proceed_btn = document.getElementById("proceed")
let quantity = document.getElementsByClassName("quantity")
let subtotal = document.getElementsByClassName("subtotal")
let individual_amount = document.getElementsByClassName("amount")

proceed_btn.addEventListener("click", () => {
    for (let i = 0; i < individual_amount.length; i++) {
    subtotal[i].innerHTML = `$${(individual_amount[i].innerHTML * quantity[i].value)}`
    }
})