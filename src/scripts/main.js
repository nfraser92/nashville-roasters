import { getOrders,
    getProducts,
    getSizes,
    createOrder } from "./DataManager.js"

import { postOrderToCard } from "./EventListener.js"


let sizes = []

getSizes().then(
    (arrayOfSizes) => {
        // 100% sure we have sizes
        let sizes = arrayOfSizes
        // get sizes from API and then get them into dropdown on the DOM
        sizes.forEach(size => {
            let sizeToAdd = size.size
            document.querySelector("#orderSize").innerHTML +=`
            <option value ="${sizeToAdd}">${sizeToAdd}</option>
            `
        })
    }
).then(
    () => {
         return getProducts()
    }
)
.then(
    (productArray) => {
    productArray.forEach(product => {
        let productToAdd = product.name
        document.querySelector("#productSelect").innerHTML += `
        <option value ="${productToAdd}">${productToAdd}</option>`
    })
}
)

postOrderToCard()
