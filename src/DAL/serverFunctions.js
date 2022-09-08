export function getProducts() {
    return fetch("http://localhost:3100/api/products")
        .then(response => response.json())
        .then(products => (products))
}

// export function getProductByName(name) {
//     return fetch(`http://localhost:3100/api/products/${name}`)
//         .then(response => response.json())
//         .then(products => (products))
// }