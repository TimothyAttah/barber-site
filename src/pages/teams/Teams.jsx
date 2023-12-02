import React from 'react';
import unsplash1 from '../../assets/unsplash4.png';
import unsplash2 from '../../assets/unsplash2.png';
import icon1 from '../../assets/icon_1.svg';
import icon2 from '../../assets/icon_2.svg';
import icon3 from '../../assets/icon_3.svg';
import { FadeIn } from '../../components/fadeIn/FadeIn';
import * as Styles from './TeamsStyle';

export const Teams = () => {
  return (
    <Styles.TeamsContainer>
      <FadeIn delay={0.4} direction='left'>
        <Styles.TeamsTitleContainer>
          <img src={unsplash1} alt='' />
          <Styles.TeamsTitleWrapper>
            <h3>Natural styling and cuts</h3>
            <p>
              You dream about sleek, healthy looking hair that looks picture
              perfect, ready to rock on any occasion?
              <br />
              We will make your dreams come true.
            </p>
          </Styles.TeamsTitleWrapper>
          <img src={unsplash2} alt='' />
        </Styles.TeamsTitleContainer>
      </FadeIn>
      <Styles.TeamsInfoContainer>
        <FadeIn delay={0.2} direction='right'>
          <Styles.TeamsInfoBox>
            <img src={icon1} alt='' />
            <h5>
              personalized
              <br />
              experience
            </h5>
            <p>
              Each guest is our favorite guest. Come and make sure that service
              is exceptional.
            </p>
          </Styles.TeamsInfoBox>
        </FadeIn>
        <FadeIn delay={0.4} direction='right'>
          <Styles.TeamsInfoBox>
            <img src={icon2} alt='' />
            <h5>
              professional
              <br />
              care
            </h5>
            <p>
              All products we use are professional and have proven efficiency.
              No compromises.
            </p>
          </Styles.TeamsInfoBox>
        </FadeIn>
        <FadeIn delay={0.6} direction='right'>
          <Styles.TeamsInfoBox>
            <img src={icon3} alt='' />
            <h5>
              we care
              <br />
              what we do
            </h5>
            <p>
              People that you'll meet in our studio are doing job they love.
              Come and make sure there is a difference.
            </p>
          </Styles.TeamsInfoBox>
        </FadeIn>
      </Styles.TeamsInfoContainer>
    </Styles.TeamsContainer>
  );
};
