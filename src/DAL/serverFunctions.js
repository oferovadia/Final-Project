export function getCustomerByID() {
    return fetch("http://localhost:3100/api/customer/:id", { credentials: "include" })
        .then(response => response.json())
        .then(customers => (customers))
}

export async function postLoginRequest(data) {
    const result = await fetch("http://localhost:3100/api/customer/login", {
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
    const result = await fetch("http://localhost:3100/api/customer/register", {
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

export function logOut() {
    return fetch('http://localhost:3100/api/customer/logout', { credentials: "include" })
        .then(response => response.json())
        .then(products => (products))
}

export function getCookie() {
    return fetch("http://localhost:3100/api", { credentials: "include" })
        .then(response => response.json())
        .then(cookie => (cookie))
}

export function getAllProducts() {
    return fetch("http://localhost:3100/api/products", { credentials: "include" })
        .then(response => response.json())
        .then(products => (products))
}

export function getProductByID(id) {
    return fetch(`http://localhost:3100/api/products/${id}`, { credentials: "include" })
        .then(response => response.json())
        .then(products => (products))
}

export function getCart() {
    return fetch("http://localhost:3100/api/cart", { credentials: "include" })
        .then(response => response.json())
        .then(cart => (cart))
}

export function getOrders() {
    return fetch("http://localhost:3100/api/orders/user/6", { credentials: "include" })
        .then(response => response.json())
        .then(orders => (orders))
}

export function getByCategory(name) {
    return fetch(`http://localhost:3100/api/categories/${name}`, { credentials: "include" })
        .then(response => response.json())
        .then(products => (products))
}


export async function postAddToCart(data) {
    const result = await fetch("http://localhost:3100/api/products/add", {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    console.log(JSON.stringify(data), "this is data");
    console.log("hello");
    if (result.status === 201) {
        return true;
    }
    return false;
}

export async function deleteFromCart(cartDetailsID) {
    fetch(`http://localhost:3100/api/products/${cartDetailsID}`, {
        method: "DELETE",
        credentials: "include",
        //   body: JSON.stringify(cartDetailsID),
    });
    console.log(cartDetailsID);

}

export async function updateCartQuantity(cartDetailsID) {
    fetch(`http://localhost:3100/api/products`, {
        method: "PATCH",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(cartDetailsID),
    });
    console.log(cartDetailsID);

}