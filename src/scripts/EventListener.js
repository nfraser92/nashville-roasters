import { createOrder } from "./CreateOrder.js"

/*
    Use the `as` keyword to alias a function
    name from another module to use in this module
    when there is a naming conflict
*/
import { createOrder as postOrder } from "./DataManager.js"


const buyButton = document.querySelector("#placeOrder")

let postOrderToCard = () => {
buyButton.addEventListener("click", () => {
    // Collect user input
    const name = document.querySelector("#customerName").value
    const productId = document.querySelector("#productSelect").value
    const quantity = document.querySelector("#productQuantity").value
    const sizeId = document.querySelector("#orderSize").value

    // Build order object from input
    const newOrderObject = createOrder(name, quantity, productId, sizeId)

    // POST to API (x)
    postOrder(newOrderObject)

    // Build new card from current order
    let orderEl = document.querySelector("#orderOutput")
    let newOrderCard = (newOrderObject) => {
        orderEl.innerHTML +=`
        <h2>${newOrderObject.customerName}</h2>
        <div>${newOrderObject.quantity}</div>
        <div>${newOrderObject.productId}</div>
        <div>${newOrderObject.sizeId}</div>
        `
    }
    // Append new card to DOM
   let outEl = document.querySelector("#orderOutput")
    newOrderCard(newOrderObject)
})
}

export { postOrderToCard }