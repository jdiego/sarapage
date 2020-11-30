import React from 'react';
import { Container } from 'react-bootstrap';

function ContactMap() {
  
  return (
    <Container className="embed-responsive embed-responsive-4by3">
        <iframe
          className="embed-responsive-item"
          title = "Local de atendimento de Sara" 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7938.455829762377!2d-35.209952026658634!3d-5.823451593328228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b2fff30dc13bbd%3A0x2c8640fda09bf153!2sCorporate%20Tower%20Center!5e0!3m2!1ses!2sbr!4v1604623114404!5m2!1ses!2sbr" 
          width="100%" 
          height="100%" 
          allowfullscreen = "true"
          aria-hidden="false" 
          tabindex="0">
        </iframe>
    </Container>
    );
}

export default ContactMap;