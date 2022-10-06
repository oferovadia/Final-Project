import "./cartItem.css";
import Table from 'react-bootstrap/Table';
import Order from "../Orders/Orders";

const tablee = [
    {
        "id": 12,
        "size": null,
        "quantity": 2,
        "total_products_price": 7,
        "product": {
            "id": 19,
            "product_name": "Hulk Plush",
            "description": null,
            "photos": [
                {
                    "id": 37,
                    "photo_source": "https://i5.walmartimages.com/asr/896b400e-3a4f-4f3c-94d1-74219e231225.278bbcd99546a022c1c767b47c7927d7.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
                },
                {
                    "id": 38,
                    "photo_source": "https://i5.walmartimages.com/asr/69b2ed0b-be1d-4f5a-aeb9-0d4e070cbd1c.78d4e848d5820c18537cfbf759b2a480.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
                }
            ],
            "category": {
                "id": 9,
                "category_name": "Plushies"
            },
            "productDetails": [
                {
                    "id": 37,
                    "size": null,
                    "units_in_stock": 10,
                    "unit_price": 7
                }
            ]
        }
    },
    {
        "id": 13,
        "size": null,
        "quantity": 1,
        "total_products_price": 8,
        "product": {
            "id": 18,
            "product_name": "Groot Plush",
            "description": null,
            "photos": [
                {
                    "id": 35,
                    "photo_source": "https://i5.walmartimages.com/asr/c0e65b2c-3a0f-4bb8-b841-1e827e9ee295.acd0129e7c8222c55735e592f1c8c496.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
                },
                {
                    "id": 36,
                    "photo_source": "https://i5.walmartimages.com/asr/be189b21-5ed4-424a-8d3b-0502bc444b13.d059540c15622905344d92936b9b4b08.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
                }
            ],
            "category": {
                "id": 9,
                "category_name": "Plushies"
            },
            "productDetails": [
                {
                    "id": 36,
                    "size": null,
                    "units_in_stock": 25,
                    "unit_price": 8
                }
            ]
        }
    },
    {
        "id": 14,
        "size": null,
        "quantity": 1,
        "total_products_price": 9,
        "product": {
            "id": 14,
            "product_name": "Venom Plush",
            "description": null,
            "photos": [
                {
                    "id": 27,
                    "photo_source": "https://i5.walmartimages.com/asr/0a420377-7bb5-4514-97f0-83f080f4643d.24850e8a8484e99c59312107c9cbfa04.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
                },
                {
                    "id": 28,
                    "photo_source": "https://i5.walmartimages.com/asr/aa7c3a72-de94-4389-ae6d-33e533a0fb99.e6dbdaade2e726e0cf51125ff7d27952.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
                }
            ],
            "category": {
                "id": 9,
                "category_name": "Plushies"
            },
            "productDetails": [
                {
                    "id": 32,
                    "size": null,
                    "units_in_stock": 31,
                    "unit_price": 9
                }
            ]
        }
    },
    {
        "id": 15,
        "size": null,
        "quantity": 1,
        "total_products_price": 8,
        "product": {
            "id": 12,
            "product_name": "Spiderman Plush",
            "description": null,
            "photos": [
                {
                    "id": 23,
                    "photo_source": "https://i5.walmartimages.com/asr/20359538-780f-4006-a934-90dbde46d67c.4040a34168497a2458f9eb4d76bdeadf.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
                },
                {
                    "id": 24,
                    "photo_source": "https://i5.walmartimages.com/asr/37efea81-66d3-452c-b884-57acd14e24c0.79756a1d8945f611018c68621abe1321.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
                }
            ],
            "category": {
                "id": 9,
                "category_name": "Plushies"
            },
            "productDetails": [
                {
                    "id": 30,
                    "size": null,
                    "units_in_stock": 22,
                    "unit_price": 8
                }
            ]
        }
    }
]
function Checkout() {
    return (
        <div>
            <h2>Order Date: 19/05/2022</h2>
            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th></th>
                        <th>Product Name</th>
                        <th>Size</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tablee.map(({size, quantity, product, total_products_price, photo=product['photos'][0]['photo_source']}, index) => <Order key={index} size={size}
                        quantity={quantity} price={total_products_price}
                        name={product['product_name']} image={photo}></Order>)
                    }
                </tbody>
            </Table>
            <h2>Total: 59$</h2>

        </div>
    )
}

export default Checkout

