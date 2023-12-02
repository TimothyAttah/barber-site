import React from 'react';
import * as Styles from './footerStyles';
import logo from '../../assets/logo.svg';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaAddressBook,
  FaPhone,
  FaClock,
  FaInbox,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <Styles.FooterContainer id='contact'>
      <Styles.FooterWrapper>
        <Styles.FooterIconsBox>
          <img src={logo} alt='' />
          <div>
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
          </div>
        </Styles.FooterIconsBox>
        <Styles.FooterServiceBox>
          <h5>services</h5>
          <ul>
            <li>Hair cutting</li>
            <li>Shaving</li>
            <li>Hair colors</li>
            <li>Dreadlocks</li>
            <li>shampoo & set</li>
            <li>Blow dry & curls</li>
          </ul>
        </Styles.FooterServiceBox>
        <Styles.FooterContactBox>
          <h5>Contact us</h5>
          <ul>
            <li>
              <FaAddressBook /> 756 Roberts Ave, Lagos, Nigeria
            </li>
            <li>
              <FaPhone /> +234 567 890
            </li>
            <li>
              <FaClock /> Sun Friday, 08 am - 09 pm
            </li>
            <li>
              <FaInbox /> support@gmail.com
            </li>
          </ul>
        </Styles.FooterContactBox>
      </Styles.FooterWrapper>
    </Styles.FooterContainer>
  );
};

export default Footer;
