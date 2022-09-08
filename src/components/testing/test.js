export function getCustomers() {
    return fetch("http://localhost:3000/api/customer", {credentials: "include"})
        .then(response => response.json())
        .then(customers => (customers))
}

