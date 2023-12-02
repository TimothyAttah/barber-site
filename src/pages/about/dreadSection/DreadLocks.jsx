import React from 'react';
import * as Styles from './dreadlocksStyles';
import { FadeIn } from '../../../components/fadeIn/FadeIn';
import dreadImg1 from '../../../assets/dread1.png';
import dreadImg2 from '../../../assets/dread2.png';
import dreadImg3 from '../../../assets/dread3.png';
import dreadImg4 from '../../../assets/image9.png';

const DreadLocks = () => {
  return (
    <Styles.DreadlocksContainer>
      <FadeIn delay={0.2} direction='up'>
        <h2>We also specialize in dreadlocks</h2>
      </FadeIn>
      <Styles.DreadlocksImageContainer>
        <FadeIn delay={0.2} direction='down'>
          <Styles.DreadlocksImageBox>
            <img src={dreadImg1} alt='' />
          </Styles.DreadlocksImageBox>
        </FadeIn>
        <FadeIn delay={0.4} direction='down'>
          <Styles.DreadlocksImageBox>
            <img src={dreadImg2} alt='' />
          </Styles.DreadlocksImageBox>
        </FadeIn>
        <FadeIn delay={0.6} direction='down'>
          <Styles.DreadlocksImageBox>
            <img src={dreadImg3} alt='' />
          </Styles.DreadlocksImageBox>
        </FadeIn>
        <FadeIn delay={0.8} direction='down'>
          <Styles.DreadlocksImageBox>
            <img src={dreadImg4} alt='' />
          </Styles.DreadlocksImageBox>
        </FadeIn>
      </Styles.DreadlocksImageContainer>
    </Styles.DreadlocksContainer>
  );
};

export default DreadLocks;
