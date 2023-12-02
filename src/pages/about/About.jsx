import React from 'react';
import { FadeIn } from '../../components/fadeIn/FadeIn';
import * as Styles from './AboutStyles';
import image3 from '../../assets/image9.png';
import DreadLocks from './dreadSection/DreadLocks';

const About = () => {
  return (
    <Styles.MainAboutContainer id='about'>
      <Styles.AboutContainer>
        <FadeIn delay={0.2} direction='right'>
          <Styles.AboutTextWrapper>
            <small>about</small>
            <h3>We tell amazing stories with hair</h3>
            <p>
              You dream about sleek, healthy looking hair that looks picture
              perfect, ready to rock on any occasion? We will make your dreams
              come true.
            </p>
          </Styles.AboutTextWrapper>
        </FadeIn>
        <FadeIn delay={0.2} direction='left'>
          <Styles.AboutImageContainer>
            <img src={image3} alt='' />
          </Styles.AboutImageContainer>
        </FadeIn>
      </Styles.AboutContainer>
      <DreadLocks />
      <FadeIn delay={0.4} direction='down'>
        <Styles.OpeningHoursContainer>
          <div>
            <h5>welcome</h5>
            <h2>Opening hours</h2>
          </div>
          <div>
            <p>monday to friday / 08:00AM - 08:00PM</p>
            <p>saturday / 08:00AM - 10:00PM </p>
            <p>Sunday / 10:00AM - 10:00PM </p>
          </div>
        </Styles.OpeningHoursContainer>
      </FadeIn>
    </Styles.MainAboutContainer>
  );
};

export default About;
