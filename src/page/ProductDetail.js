import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Col, Row, Form, Button } from "react-bootstrap";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/YoujungSon/hnm-react/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} />
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div>&#8361;{product?.price}</div>
          <div>{product?.choice == true ? "Concious Choice" : ""}</div>
          <Form>
            <Form.Select aria-label="Default select example">
              <option>사이즈 선택</option>
              <option value="1">s</option>
              <option value="2">m</option>
              <option value="3">l</option>
            </Form.Select>
          </Form>
          <Button variant="dark">추가</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
