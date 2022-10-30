import { deleteFromCart } from "../../DAL/serverFunctions";
import "./cartItem.css";

function Cartitem(props) {

    function removeItemFromCart() {
        deleteFromCart(props.id)
        window.location.reload();
    }

    return (
        <div>
            <div className="singleProduct">
                <img className="productPhoto" src={props.photo} alt={props.name} />
                <div className="productDesc">
                    <p>Name: {props.name}</p>
                    <p>Quantity: {props.quantity}</p>
                    <p>Total Price: {props.price}$</p>
                    <p className="removeBtn" onClick={removeItemFromCart}>X</p>
                </div>
            </div>
        </div>
    )
}

export default Cartitem

