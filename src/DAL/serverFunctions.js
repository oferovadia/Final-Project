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


export function getCustomerByID() {
    return fetch("http://localhost:3000/api/customer/:id", { credentials: "include" })
        .then(response => response.json())
        .then(customers => (customers))
}

export async function postLoginRequest(data) {
    console.log(JSON.stringify(data));
    const result = await fetch("http://localhost:3000/api/customer/login", {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    if (result.status === 201) {
        return true;
    }
    return false;
}

export async function postSignUpRequest(data) {
    console.log(JSON.stringify(data));
    const result = await fetch("http://localhost:3000/api/customer/register", {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    console.log(JSON.stringify(data));
    if (result.status === 201) {
        return true;
    }
    return false;
}

export function getCookie() {
    return fetch("http://localhost:3000/api", { credentials: "include" })
        .then(response => response.json())
        .then(cookie => (cookie))
}