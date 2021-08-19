
import React from 'react';
import {Row} from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaWhatsapp,  FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaMailBulk } from 'react-icons/fa';
import {FaTwitter} from "react-icons/fa";


import './Footer.css'

function Footer() {
    return (
        <div style={{marginTop:'100px'}}>
           <footer className="custom text-light">
<container fluid>
<Row>
    <Col style={{textAlign:'center'}}>
     <h1>RIGHTBELL</h1>
     <h4>About Us</h4>
     <h4>Gallery</h4>
     <h4>Career</h4>
    
    
    </Col>
    <Col style={{textAlign:'center'}}>
    <h4>Jobs</h4>
     <h4>Training</h4>
     <h4>Student Management System</h4>
     <h4>Legal Aid</h4>
    
    </Col>
    <Col style={{textAlign:'center'}}>
    <h1>Contact Us</h1>
    
     <h4>
         <span style={{marginRight:'10px'}}><FaMapMarkerAlt/></span>
           <span style={{}}>Kurukshetra </span>
          <p style={{marginInlineStart:'30px'}}>Haryana &#44; India</p>
         </h4>
         <h4>
             <span style={{marginRight:'10px'}}><FaPhoneAlt/></span>
             <span>+91 9485045958</span>
         </h4>
         <h4>
             <span style={{marginRight:'10px'}}><FaMailBulk/></span>
             <span>support@rightBell.com</span>
         </h4>
     
    </Col>
  </Row>
  </container>
  <div>
      <container>
   <span style={{color:'#000000'}}><hr/></span>
   <div style={{textAlign:'center'}}>
   <h1>Stay Connected..</h1>
   <span style={{marginLeft:'10px',color:'#4267B2', fontSize:'45px'}}><FaFacebook/></span>
  <span style={{marginLeft:'10px',color:'#8a3ab9', fontSize:'45px'}}> <FaInstagram/></span>
   <span style={{marginLeft:'10px',color:'#25D366', fontSize:'45px'}}><FaWhatsapp/></span> 
   <span style={{marginLeft:'10px',color:'#1DA1F2', fontSize:'45px'}}><FaTwitter /></span>
   <span style={{marginLeft:'10px',color:'#0e76a8', fontSize:'45px'}}><FaLinkedinIn/></span>
   </div>
   <hr/>
   <p className="text-center">
            Copyright &copy; RightBell.In
            </p>
      </container>
  </div>
 
        </footer>
        </div>
    )
}

export default Footer
