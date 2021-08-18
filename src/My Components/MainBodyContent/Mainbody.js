import React from 'react';
import { Card, Container} from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';
import {Fragment} from 'react';
import { Row} from 'react-bootstrap';
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
    
 <div>
<h1 style={{fontSize:'100px',textAlign:'center',color: '#ffffff', fontweight: '900', lineheight: '64px', margin: '0 0 0', padding: '20px 30px', textalign: 'center', texttransform: 'uppercase',background:'#281931'}}>Our Services</h1>        
<container fluid>
<CardGroup>

<Row>
<Col xl={3} sm={6}>
 <Card style= {{height:'500px', marginRight:'5px'}}>
    <Card.Img variant="top"className="imgcard" src="https://images.unsplash.com/photo-1476231790875-016a80c274f3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
    <Card.Body className="card-body">
      <Card.Title><h2 >JOBS</h2></Card.Title>
      </Card.Body>
     </Card>
     </Col>

     <Col xl={3} sm={6}>
     <Card style= {{height:'500px', marginRight:'5px'}}>
    <Card.Img variant="top" className="imgcard" src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
    <Card.Body className="card-body">
      <Card.Title><h2>Training</h2></Card.Title>
    </Card.Body>
    </Card>
    </Col>

    <Col xl={3} sm={6}>
    <Card style= {{height:'500px', marginRight:'5px' }}>
   
    <Card.Img variant="top"  className="imgcard" src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80" />
    <Card.Body className="card-body">
      <Card.Title><h2>Student Management System</h2></Card.Title>
     </Card.Body>
    </Card>
    </Col>

    <Col xl={3} sm={6}>
  <Card style= {{height:'500px', marginRight:'5px' }}>
    <Card.Img variant="top" className="imgcard" src="https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
    <Card.Body className="card-body">
      <Card.Title><h2>Legal Aid</h2></Card.Title>
      </Card.Body>
   </Card>
   </Col>
   </Row>
   
</CardGroup>
</container>

</div>


<div style={{marginTop:'60px', background:'#e3dff7'}} >
 <Container className="second-content">
<Row >
    <Col xl={6} sm={true} className="text-column">
    <img src={"Images/Business partner.png" }alt="imgb"/>
    </Col>
    <Col xl={6} sm={true} className= "img-column">
    <img src={"Images/businessimg.jpg" }alt="imgb"/>

    </Col>
    </Row>
  </Container>

</div>


<div style={{marginTop:'40px'}}>
<h1 style={{fontSize:'100px',textAlign:'center',color: '#ffffff', fontweight: '900', lineheight: '64px', margin: '0 0 0', padding: '20px 30px', textalign: 'center', texttransform: 'uppercase',background:'#281931'}}>Our Association</h1>
<div className="sec-Div">
<Marquee duration={10000} background="#fafafa" height="250px">
       
        {images.map((image) => (
          <img src={image} alt="picsum" />
        ))}
      </Marquee>
      </div>
</div>

<div style={{marginTop:'60px'}}>
<h1 style={{fontSize:'100px',textAlign:'center',color: '#ffffff', fontweight: '900', lineheight: '64px', margin: '0 0 0', padding: '20px 30px', textalign: 'center', texttransform: 'uppercase',background:'#281931'}}>TestiMonial</h1>  
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
