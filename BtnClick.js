
// .checked = properties that determines the checked state of an HTML checked 
// or radio button element
const myCheckbox = document.getElementById("myCheckbox")
const visaBtn= document.getElementById("visaBtn")
const masterCardBtn = document.getElementById("masterCardBtn")
const payPalBtn = document.getElementById("payPalBtn")
const mySubmit = document.getElementById("mySubmit")
const subResult = document.getElementById("subResult")
const paymentResult = document.getElementById("paymentResult")


mySubmit.onclick = function (){
    if (myCheckbox.checked){
        subResult.textContent =  `You are subscribed!...😁  `
    }
    else{
        subResult.textContent =  `You are not subscribed! .😒.`
    }
    if (visaBtn.checked){
        paymentResult.textContent =  `You are paying with visa card !😘...`
    }
    else if (masterCardBtn.checked) {
        paymentResult.textContent = `You are paying with Mastercard!.🙏..`
    }
    else if(payPalBtn.checked) {
        paymentResult.textContent = `You are paying with Papal Card!..🌸`
    }
    else {
        paymentResult.textContent = `You must select a payment!. 🌻.`
    }
}