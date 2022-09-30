import React from 'react';
import { Button, Container, Col, Row, Table } from 'react-bootstrap';
import { useCart } from 'react-use-cart';
import { BsCartCheck, BsCartX } from 'react-icons/bs';

const Cart = () => {
  const {
    isEmpty,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  return (
    <Container className="py-2 mt-3">
      <h1 className="my-3 text-center">
        {isEmpty ? 'Your Cart is Still Empty' : 'Shopping Cart'}
      </h1>
      <Row className="justify-content-center">
        <Table responsive="sm-12" className="mb-5">
          <tbody>
            {items.map((item, index) => {
              return (
                <tr key={index}>
                  <td className='text-center'>
                    <div style={{ padding: '.5rem' }}>
                      <img src={item.image} style={{ width: '4rem' }} alt={item.title} />
                    </div>
                  </td>
                  <td className='text-center'>
                    <h6 style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverFlow: 'ellipsis' }}>
                      {item.title}
                    </h6>
                    <p>Rp {item.price}</p>

                  </td>
                  <td className='text-center'><p>Quantity ({item.quantity})</p>
                    <Button variant="secondary" onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className="ms-2">-</Button>
                    <Button variant="secondary" onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className="ms-2">+</Button>
                    <Button variant="danger" onClick={() => removeItem(item.id)} className="ms-2">Delete</Button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
        {!isEmpty &&
          <Row
            style={{ position: 'fixed', bottom: 0 }}
            className="justify-content-center w-100"
          >
            <Col className="py-2">
              <h4>Total Price: Rp {cartTotal}</h4>
            </Col>
            <Col className="p-0" md={4}>
              <Button variant="success" className="m-2">
                <BsCartCheck size="1.7rem" />
                Checkout
              </Button>
              <Button variant="danger" className="m-2" onClick={() => emptyCart()}>
                <BsCartX size="1.7rem" />
                Delete All
              </Button>
            </Col>
          </Row>}
      </Row>
    </Container>
  );
};

export default Cart;
