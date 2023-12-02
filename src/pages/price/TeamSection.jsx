import React from 'react';
import { FadeIn } from '../../components/fadeIn/FadeIn';
import * as Styles from './TeamSectionStyles';
import team1 from '../../assets/team1.png';
import team2 from '../../assets/team2.png';
import team3 from '../../assets/team3.png';

export const TeamSection = () => {
  return (
    <Styles.TeamSectionContainer>
      <Styles.TeamSectionWrapper>
        <FadeIn delay={0.2} direction='left'>
          <Styles.TeamSectionImageBox>
            <img src={team1} alt='' />
          </Styles.TeamSectionImageBox>
        </FadeIn>
        <FadeIn delay={0.2} direction='right'>
          <Styles.TeamSectionInfoBox>
            <h2>Kate HenShaw</h2>
            <small>manager</small>
            <p>
              We are well equipped with years of hair and dreadlocks know-how,
              and ready to create your best look with natural products. Hair is
              our passion and our passion shows on every client that walks out
              of our doors full of confidence.
            </p>
          </Styles.TeamSectionInfoBox>
        </FadeIn>
      </Styles.TeamSectionWrapper>
      <Styles.TeamSectionWrapper mobile>
        <FadeIn delay={0.4} direction='left'>
          <Styles.TeamSectionInfoBox>
            <h2>Patrick Goodness</h2>
            <small>Hair stylist / colorist</small>
            <p>
              Design to maintain your current colour, blend out a growing root
              or balance your blonde while providing full and demi-permanet
              coverage. Our custom kit can disguise grey-white hair.
            </p>
          </Styles.TeamSectionInfoBox>
        </FadeIn>
        <FadeIn delay={0.4} direction='right'>
          <Styles.TeamSectionImageBox>
            <img src={team2} alt='' />
          </Styles.TeamSectionImageBox>
        </FadeIn>
      </Styles.TeamSectionWrapper>
      <Styles.TeamSectionWrapper normal>
        <FadeIn delay={0.4} direction='left'>
          <Styles.TeamSectionImageBox>
            <img src={team2} alt='' />
          </Styles.TeamSectionImageBox>
        </FadeIn>
        <FadeIn delay={0.4} direction='right'>
          <Styles.TeamSectionInfoBox>
            <h2>Patrick Goodness</h2>
            <small>Hair stylist / colorist</small>
            <p>
              Design to maintain your current colour, blend out a growing root
              or balance your blonde while providing full and demi-permanet
              coverage. Our custom kit can disguise grey-white hair.
            </p>
          </Styles.TeamSectionInfoBox>
        </FadeIn>
      </Styles.TeamSectionWrapper>
      <Styles.TeamSectionWrapper>
        <FadeIn delay={0.6} direction='left'>
          <Styles.TeamSectionImageBox>
            <img src={team3} alt='' />
          </Styles.TeamSectionImageBox>
        </FadeIn>
        <FadeIn delay={0.6} direction='right'>
          <Styles.TeamSectionInfoBox>
            <h2>Nancy Gibson</h2>
            <small>Hair stylist / colorist</small>
            <p>
              Design to maintain your current colour, blend out a growing root
              or balance your blonde while providing full and demi-permanet
              coverage. Our custom kit can disguise grey-white hair.
            </p>
          </Styles.TeamSectionInfoBox>
        </FadeIn>
      </Styles.TeamSectionWrapper>
    </Styles.TeamSectionContainer>
  );
};
