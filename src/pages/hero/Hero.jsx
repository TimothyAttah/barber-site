import React from 'react';
// import background from '../../assets/background.png';
import * as Styles from './HeroStyles';
import { Header } from '../../components/header/Header';
import { FadeIn } from '../../components/fadeIn/FadeIn';

const Hero = () => {
  return (
    <>
      <Styles.HeroContainer>
        <Header />
        <Styles.TextWrapper>
          <FadeIn delay={0.2} direction='down' padding fullWidth>
            <Styles.HeroTitle>The perfect cut</Styles.HeroTitle>
          </FadeIn>
          <FadeIn delay={0.4} direction='down' padding fullWidth>
            <Styles.HeroSubTitle>
              We see <span> "you" </span> and we create the look that matches
              best your personality
            </Styles.HeroSubTitle>
          </FadeIn>
          <FadeIn delay={0.2} direction='up' padding fullWidth>
            <Styles.Div />
          </FadeIn>
          <FadeIn delay={0.4} direction='up' padding fullWidth>
            <Styles.Date>lagos, nigeria - since 1995</Styles.Date>
          </FadeIn>
        </Styles.TextWrapper>
      </Styles.HeroContainer>
    </>
  );
};

export default Hero;
