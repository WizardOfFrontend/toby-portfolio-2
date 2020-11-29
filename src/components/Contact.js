import React from 'react'
import styled from "styled-components"
import Title from "./Title"
import { MdPhoneAndroid, MdEmail } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa";
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" class="section">
      <Title title="Contact" />

      <div className="section-center contact-center">
        <div className="email">
          <i className="fas fa-envelope fa-2x"></i>
          <h3><MdEmail className="contact-icon" />Email</h3>
          <p>WizardOfFrontend@gmail.com</p>
        </div>
        <div className="phone">
          <i className="fas fa-phone fa-2x"></i>
          <h3><MdPhoneAndroid className="contact-icon" />Phone</h3>
          <p>(425) 440-1618</p>
        </div>
        <div className="address">
          <i className="fas fa-address-card fa-2x"></i>
          <h3><FaRegAddressCard className="contact-icon" />Address</h3>
          <p>Issaquah, WA</p>
        </div>
      </div>

    </section >
  )
}


export default Contact
