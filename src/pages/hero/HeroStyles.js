import styled from 'styled-components';
import background from '../../assets/background.png';

export const HeroContainer = styled.div`
  min-height: 100vh;
  position: relative;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  background: url(${background});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const TextWrapper = styled.div`
  max-width: 800px;
  width: 100%;
  min-height: 30vh;
  margin: 0 auto;
  margin-top: 80px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeroTitle = styled.h1`
  color: ${({ theme }) => theme.colors.textLight};
  text-transform: uppercase;
  font-size: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: auto;
  font-weight: bolder;

  @media screen and (max-width: ${({ theme }) => theme.screens.smallSize}) {
    font-size: 40px;
  }
`;

export const HeroSubTitle = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  margin: auto;
  margin-top: 20px;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  text-align: center;
  margin: auto;
  font-size: 30px;

  span {
    text-transform: uppercase;
  }
`;

export const Div = styled.div`
  width: 300px;
  height: 5px;
  background-color: ${({ theme }) => theme.colors.bgLight};
  border-radius: 5px;
  margin-top: 100px;
  /* margin-left: 30px; */
  /* position: absolute;
  right: 50px;
  bottom: 30px; */

  @media screen and (max-width: ${({ theme }) => theme.screens.smallSize}) {
    width: 150px;
  }
`;

export const Date = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.textLight};
  margin-top: 10px;
  /* padding-left: 30px; */
  /* position: absolute;
  right: 50px;
  bottom: 0; */
  @media screen and (max-width: ${({ theme }) => theme.screens.smallSize}) {
    font-size: 12px;
  }
`;
