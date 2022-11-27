import "./Wishlist.css";
import { Link } from 'react-router-dom';
import { deleteFromWishlist } from "../../DAL/serverFunctions";
import { Card } from 'react-bootstrap';

function WishlistItem(props) {

    function removeItemFromWishlist() {
        deleteFromWishlist(props.product_id)
        window.location.reload();
    }

    return (
        <div className="wishlistItem">
            {/*<Link to={`/products/${props.product_id}`}><img className="productPhoto"
                variant="top" src={props.photo} alt={props.name} /></Link>
            <div className="productDesc">
                <h6 className="productCartName">{props.name}</h6>
                <p className="removeBtn" onClick={removeItemFromWishlist}>Remove Item From Wishlist</p>
    </div>*/}
            <div className='wishlistCard col-sm-6 col-md-4 col-lg-3'>
                <Card className='h-100'>
                    <Link to={`/products/${props.product_id}`}><img className="wishlistProductPhoto"
                        variant="top" src={props.photo} alt={props.name} /></Link>
                    <Card.Body className='productWishlistFooter'>
                        <p className="productWishlistTitle">{props.name}</p>
                        <button className='removeFromWishlistBtn' onClick={removeItemFromWishlist}>Remove From Wishlist</button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default WishlistItem