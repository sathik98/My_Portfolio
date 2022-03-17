import React from 'react'
import myimg from "../assests/images/myimg.jpg";
import { Col, Row, Button, Container, Form, InputGroup } from "react-bootstrap";


function Profile() {
  return (
    <>
      
      <div className='pro-details'>
        <Container>
          <Row>
            <Col>
              <b>Name</b>
            </Col>
            <Col>
              <p>sathik ali A</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <b>Job Role</b>
            </Col>
            <Col>
              <p>Frontend developer</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <b>Name</b>
            </Col>
            <Col>
              <p>kihb efiebcf</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <b>Name</b>
            </Col>
            <Col>
              <p>kihb efiebcf</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Profile;
