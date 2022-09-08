import { useEffect } from "react";
import { useState } from "react";
import { getCustomers } from "./test";

function Customers() {

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        async function getData() {
            setCustomers(await getCustomers())
        }
        getData()
    }, [])

    return (
        customers.map(({first_name}, index) => <p key={index}>{first_name}</p>)
    )
}

export default Customers