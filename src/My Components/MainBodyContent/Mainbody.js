import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';
import { Fragment } from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Marquee from "react-easy-marquee";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import './Mainbody.css'



function Mainbody() {
  const images = ["Images/hdfc.png", "Images/ICICI-Bank-Logo.jpeg", "Images/mahindra.jpeg", "Images/tata-motors-logo.jpg"];



  return (
    <Fragment>
      <div className="Main-Div">
        <container >
          <div>
            <h2 className="secondary-title">Our Services</h2>
            <CardGroup>
              <Row>
                <Col xl={3} sm={6}>
                  <Card style={{ marginRight: '5px', width: '100%' }}>
                    <Card.Img variant="top" className="imgcard" src="https://images.unsplash.com/photo-1476231790875-016a80c274f3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
                  </Card>
                  <h3 className="secondary-title">JOBS</h3>
                </Col>

                <Col xl={3} sm={6}>
                  <Card style={{ marginRight: '5px', width: '100%' }}>
                    <Card.Img variant="top" className="imgcard" src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
                  </Card>
                  <h3 className="secondary-title">Training</h3>
                </Col>

                <Col xl={3} sm={6}>
                  <Card style={{ marginRight: '5px', width: '100%' }}>
                    <Card.Img variant="top" className="imgcard" src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80" />
                  </Card>
                  <h3 className="secondary-title">Student Management System</h3>
                </Col>

                <Col xl={3} sm={6}>
                  <Card style={{ marginRight: '5px', width: '100%' }}>
                    <Card.Img variant="top" className="imgcard" src="https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
                  </Card>
                  <h3 className="secondary-title">Legal Aid</h3>
                </Col>
              </Row>

            </CardGroup>

          </div>
        </container>
        <div style={{ marginTop: '60px', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:"column"}} >
           <h2 className="secondary-title">Do Business With Us</h2>
            <img src={"Images/office-image.jpg"} alt="imgb" style={{ height: '600px' }} />
        </div>
        <div style={{ marginTop: '40px' }}>
          <h2 className="secondary-title">Our Association</h2>
          <div className="sec-Div">
            <Marquee duration={10000} background="#fafafa" height="250px">

              {images.map((image) => (
                <img src={image} alt="picsum" />
              ))}
            </Marquee>
          </div>
        </div>

        <div style={{ marginTop: '60px' }}>
          <h2 className="secondary-title">Testimonial</h2>
          <div className="sec-Div">
            <Carousel
              showArrows={true}
              infiniteLoop={true}
              showThumbs={false}
              showStatus={false}
              autoPlay={true}
              interval={6100}
            >
              <div >

                <div className="myCarousel">
                  <h1>Shirley Fultz</h1>
                  <h4>Designer</h4>
                  <p>
                    It's freeing to be able to catch up on customized news and not be
                    distracted by a social media element on the same site
                  </p>
                </div>
              </div>

              <div>

                <div className="myCarousel">
                  <h1>Daniel Keystone</h1>
                  <h4>Designer</h4>
                  <p>
                    The simple and intuitive design makes it easy for me use. I highly
                    recommend Fetch to my peers.
                  </p>
                </div>
              </div>
              <div >
                <div className="myCarousel">
                  <h1>Theo Sorel</h1>
                  <h4>Designer</h4>
                  <p>
                    I enjoy catching up with Fetch on my laptop, or on my phone when
                    I'm on the go!
                  </p>
                </div>
              </div>
            </Carousel>
          </div>
        </div>

      </div>

    </Fragment>
  )
}


export default Mainbody
