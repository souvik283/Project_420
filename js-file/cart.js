let proceed_btn = document.getElementById("proceed")
let quantity = document.getElementsByClassName("quantity")
let subtotal = document.getElementsByClassName("subtotal")
let individual_amount = document.getElementsByClassName("amount")
let cart_subtotal = document.getElementById("cart_subtotal")
let shipping_fee = document.getElementById("shipping_fee")
let total = document.getElementById("grand_total")
let table1 = document.getElementById("table1")
let cart_total = document.getElementsByClassName("total")
let coupon = document.getElementById("coupon_code")
let coupon_amount = document.getElementById("coupon_discount")
let total_para = cart_total[0].firstElementChild.firstElementChild.nextElementSibling.nextElementSibling;
let amount = 0, shipping_amount, grand_total, discount = 0;

function amount_setting() {
    let ihtml = ``;
    amount = 0
    for (let i = 0; i < individual_amount.length; i++) {
        amount += (individual_amount[i].innerHTML * quantity[i].value)
        subtotal[i].innerHTML = `$${(individual_amount[i].innerHTML * quantity[i].value)}`
    }
    // console.log(amount)
    cart_subtotal.innerHTML = `$${amount}`
    if (amount < 700) {
        ihtml = `* Add $${700 - amount} more for free shipping <br>`
        shipping_amount = 49;
        shipping_fee.innerHTML = `+ $${shipping_amount}`
    } else {
        shipping_amount = 0;
        ihtml = ''
        shipping_fee.innerHTML = `Free`
    }
    if (coupon.value == "souvik1111") {
        ihtml += `** You got 69% discount`
        discount = (amount * 69.0) / 100;
        coupon_amount.innerHTML = `- $${discount}`
    } else if (coupon.value != "" && coupon.value != "fuckyou69") {
        // console.log(coupon.value)
        ihtml += "** Enter a valid coupon code"
        coupon.value = "";

    }
    total_para.innerHTML=ihtml
    grand_total = amount + shipping_amount - discount;
    total.innerHTML = `$${grand_total}`

}
amount_setting()

document.body.addEventListener("click", () => {
    amount_setting()
})