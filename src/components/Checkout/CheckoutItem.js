import { useState, useEffect } from "react";
import Cartitem from "../Cart/CartItem";
import "./Checkout.css";


function CheckoutItem(props) {

    return (
        <div>
            
            {/*<tr>
                <td><img className="orderImage" src={props.image} alt={props.name}></img></td>
                <td>{props.name}</td>
                <td>{props.size ? props.size : ' ONE SIZE'}</td>
                <td>{props.quantity}</td>
                <td>{props.price}$</td>
                <td className="removeItemCheckout">REMOVE</td>
    </tr>*/}
        </div>

    )
}

export default CheckoutItem

