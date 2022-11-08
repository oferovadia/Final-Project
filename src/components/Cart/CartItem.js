import { deleteFromCart, updateCartQuantity } from "../../DAL/serverFunctions";
import "./cartItem.css";
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Cartitem(props) {

    const [price, setPrice] = useState(props.price);


    function removeItemFromCart() {
        deleteFromCart(props.id)
        window.location.reload();
    }

    function changeQuantity(e) {
        updateCartQuantity({
            cartDetailsID: props.id,
            quantity: e.target.value,
            total_products_price: props.unit_price * e.target.value
        })
        setPrice(props.unit_price * e.target.value)
    }


    return (
        <div>
            <div className="singleProduct">
                <Link to={`/products/${props.product_id}`}><img className="productPhoto"
                    variant="top" src={props.photo} alt={props.name} /></Link>
                <div className="productDesc">
                    <h6 className="productCartName">{props.name}</h6>
                    <div className="cartQuantity">
                        <p className="quantityP">Quantity:</p>
                        <input
                            className="changeQuantityBtn"
                            type="number"
                            min='1'
                            defaultValue={props.quantity}
                            onChange={changeQuantity}
                        />
                    </div>
                    <p>Size: {props.size ? props.size : 'ONE SIZE'}</p>
                    <h6 className="cartTotalProduct">Total Price: {price}$</h6>
                    <p className="removeBtn" onClick={removeItemFromCart}>Remove Item</p>
                </div>
            </div>
        </div>
    )
}

export default Cartitem

