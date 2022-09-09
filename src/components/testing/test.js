export function getCustomers() {
    return fetch("http://localhost:3000/api/customer", { credentials: "include" })
        .then(response => response.json())
        .then(customers => (customers))
}

export function getCustomersByID() {
    return fetch("http://localhost:3000/api/customer/1", { credentials: "include" })
        .then(response => response.json())
        .then(customers => (customers))
}

export async function postLogin(data) {
    console.log(JSON.stringify(data));
    const result = await fetch("http://localhost:3000/api/customer/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    console.log(result);
    if (result.status === 201) return true;
    return false;
}