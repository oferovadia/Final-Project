import "./Wishlist.css";
import React, { useState, useEffect } from 'react';
import { getWishlist } from "../../DAL/serverFunctions";
import WishlistItem from "./WishlistItem";

function Wishlist() {

    const [wishlist, setWishlist] = useState([]);


    useEffect(() => {
        async function getData() {
            const wishlistItems = await getWishlist()
            if (wishlistItems) {
                setWishlist(wishlistItems)
            }
        }
        getData()
    }, [])

    return (
        <div className="wishlistDiv">
            {wishlist.map(({ id, product }, index) =>
                <WishlistItem
                    key={id}
                    wishlistID={id}
                    product_id={product.id}
                    name={product.product_name}
                    photo={product.photos[0].photo_source}></WishlistItem>)
            }
        </div>
    )
}

export default Wishlist