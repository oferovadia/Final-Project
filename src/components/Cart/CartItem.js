import "./cartItem.css";

function Cartitem(props) {
    return (
        <div>
            <div className="singleProduct">
                <img className="productPhoto" src={props.photo} alt={props.name} />
                <div className="productDesc">
                    <p>Name: {props.name}</p>
                    <p>Quantity: {props.quantity}</p>
                    <p>Total Price: {props.price}$</p>
                    {/*<button>remove</button>*/}
                </div>
            </div>
        </div>
    )
}

export default Cartitem

