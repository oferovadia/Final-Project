import { useState, useEffect } from "react";
import { getOrders } from "../../DAL/serverFunctions";
import "./Orders.css";


function Order(props) {
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
            {/*<tr>
                <td><img className="orderImage" src={props.image} alt={props.name}></img></td>
                <td>{props.name}</td>
                <td>{props.size}</td>
                <td>{props.quantity}</td>
                <td>{props.price}</td>
    </tr>*/}
        </div>
    )
}

export default Order

