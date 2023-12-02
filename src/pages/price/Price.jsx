import React from 'react';
import { FadeIn } from '../../components/fadeIn/FadeIn';
import * as Styles from './priceStyles';
import { TeamSection } from './TeamSection';

export const Price = () => {
  return (
    <div id='price'>
      <TeamSection />
      <Styles.PriceContainer>
        <Styles.PriceWrapper>
          <Styles.PriceListTittle>
            <FadeIn delay={0.1} direction='right'>
              <h2>
                Pricing <br />
                List
              </h2>
            </FadeIn>
          </Styles.PriceListTittle>
          <Styles.PriceListTittle show>
            <FadeIn delay={0.1} direction='right'>
              <h2>Pricing List</h2>
            </FadeIn>
          </Styles.PriceListTittle>
          <div>
            <FadeIn delay={0.3} direction='left'>
              <Styles.PriceListWrapper>
                <h4>hair cut with blow dry</h4>

                <div />

                <h4>$35</h4>
              </Styles.PriceListWrapper>
            </FadeIn>
            <FadeIn delay={0.5} direction='left'>
              <Styles.PriceListWrapper>
                <h4>Blow dry & curls</h4>
                <div />
                <h4>$25</h4>
              </Styles.PriceListWrapper>
            </FadeIn>
            <FadeIn delay={0.7} direction='left'>
              <Styles.PriceListWrapper>
                <h4>color & highlights</h4>
                <div />
                <h4>$100</h4>
              </Styles.PriceListWrapper>
            </FadeIn>
            <FadeIn delay={0.8} direction='left'>
              <Styles.PriceListWrapper>
                <h4>shampoo & set</h4>
                <div />
                <h4>$45</h4>
              </Styles.PriceListWrapper>
            </FadeIn>
            <FadeIn delay={0.9} direction='left'>
              <Styles.PriceListWrapper>
                <h4>dreadlocking</h4>
                <div />
                <h4>$65</h4>
              </Styles.PriceListWrapper>
            </FadeIn>
          </div>
        </Styles.PriceWrapper>
      </Styles.PriceContainer>
    </div>
  );
};
