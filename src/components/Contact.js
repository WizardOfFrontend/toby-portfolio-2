import React from 'react'
import styled from "styled-components"
import Title from "./Title"
import { MdPhoneAndroid, MdEmail } from "react-icons/Md";
import { FaRegAddressCard } from "react-icons/fa";

const Contact = () => {
  return (
    <Wrapper id="contact" class="section">
      <Title title="Contact" />
      <div class="container">
        <div class="contact-info">
          <div>
            <i class="fas fa-envelope fa-2x"></i>
            <h3><MdEmail className="contact-icon" />Email</h3>
            <p>WizardOfQA@outlook.com</p>
          </div>
          <div>
            <i class="fas fa-phone fa-2x"></i>
            <h3><MdPhoneAndroid className="contact-icon" />Phone</h3>
            <p>(425) 440-1618</p>
          </div>
          <div>
            <i class="fas fa-address-card fa-2x"></i>
            <h3><FaRegAddressCard className="contact-icon" />Address</h3>
            <p>Issaquah, WA</p>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  h2{
    margin-top: 5rem;
  }
  .contact-info{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    margin-bottom: 2rem;
    .contact-icon{
      margin-top: 1rem;
      margin-right: 1rem;
    }
    h3{
      color: var(--clr-primary-5);
      font-weight: bold;
     
    }
    
    @media screen and (min-width: 660px) {
      flex-direction: row;
    }
  }
`
export default Contact
