import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useCart } from 'react-use-cart';
import { BsCartPlus } from 'react-icons/bs';

const CardProduct = (props) => {
    let { image, price, title } = props.data;
    const { addItem } = useCart();

    const addToCart = () => {
        addItem(props.data);
    }
    return (
        <Card
            style={{ width: '18rem', height: 'auto' }}
            className="text-center p-0 overflow-hidden shadow mx-auto mb-4"
        >
            <div style={{
                background: 'white', height: '15rem', overflow: 'hidden', display: 'flex',
                justifyContent: 'center', alignItems: 'center', marginBottom: 'inherit'
            }}>
                <div style={{ width: '9rem' }}>
                    <Card.Img variant="top" src={image} className="img-fluid" />
                </div>
            </div>
            <Card.Body>
                <Card.Title style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                    {title}
                </Card.Title>
                <Card.Title>
                    Rp <span className="h5">{price}</span>
                </Card.Title>
                <Button
                    onClick={() => addToCart()}
                    variant="light"
                    className="btn btn-outline-secondary d-flex align-item-center m-auto border-0"
                >
                    <BsCartPlus size="1.8rem" />
                    Add to Cart
                </Button> 
            </Card.Body>
        </Card>
    );
};

export default CardProduct;