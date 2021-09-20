
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
     <h3>Rightbell</h3>
     <h3>About Us</h3>
     <h3>Gallery</h3>
     <h3>Career</h3>
    
    
    </Col>
    <Col style={{textAlign:'center'}}>
    <h3>Jobs</h3>
     <h3>Training</h3>
     <h3>Student Management System</h3>
     <h3>Legal Aid</h3>
    
    </Col>
    <Col style={{textAlign:'center'}}>
    <h1>Contact Us</h1>
    
     <h3>
         <span style={{marginRight:'10px'}}><FaMapMarkerAlt/></span>
           <span style={{}}>Kurukshetra </span>
          <p style={{marginInlineStart:'30px'}}>Haryana &#44; India</p>
         </h3>
         <h3>
             <span style={{marginRight:'10px'}}><FaPhoneAlt/></span>
             <span>+91 9485045958</span>
         </h3>
         <h3>
             <span style={{marginRight:'10px'}}><FaMailBulk/></span>
             <span>support@rightBell.com</span>
         </h3>
     
    </Col>
  </Row>
  </container>
  <div>
      <container>
   <span style={{color:'#000000'}}><hr/></span>
   <div style={{textAlign:'center'}}>
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
