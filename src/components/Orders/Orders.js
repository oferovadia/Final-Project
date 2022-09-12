import { useState, useEffect } from "react";
import { getOrders } from "../../DAL/serverFunctions";


function MyOrders(props) {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        async function getData() {
            const data = await getOrders()
            setOrders(data[0]['orders'])
            console.log(data[0]['orders']);
        }
        getData()
    }, [])

    return (
        <div>
            {/*
                orders.map((order, index) => <p key={index}>{order['order_date']}</p>)
    */}
        </div>
    )
}

export default MyOrders

