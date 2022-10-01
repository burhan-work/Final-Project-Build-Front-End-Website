import React, { useEffect, useState } from 'react';
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { BiSearch } from 'react-icons/bi';
import SearchFilter from 'react-filter-search';
import CardProduct from '../components/CardProduct';

const Product = () => {
    const [filter, setFilter] = useState('');
    const [products, setProducts] = useState([]);

    async function getProducts() {
        const res = await fetch('https://fakestoreapi.com/products')
            .then(res => res.json());
        setProducts(await res);
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <Container className="py-4">
            <Row className="justify-content-center">
                <Col xs={10} md={7} lg={6} xl={4} className="mb-3 mx-auto text-center">
                    <InputGroup className="mb-3">
                        <InputGroup.Text className="bg-secondary text-dark">
                            <BiSearch size="2rem" />
                        </InputGroup.Text>
                        <FormControl
                            placeholder="Search"
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            className="bg-light-black text-dark"
                        />
                    </InputGroup>
                </Col>
                <SearchFilter
                    value={filter}
                    data={products}
                    renderResults={results => (
                        <Row className="justify-content-center">
                            {results.map((item, i) => (
                                <CardProduct data={item} key={i} />
                            ))}
                        </Row>
                    )}
                />
            </Row>
        </Container>
    );
};

export default Product;