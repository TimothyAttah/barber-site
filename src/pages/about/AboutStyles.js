import styled from 'styled-components';
import image3 from '../../assets/image9.png';

export const MainAboutContainer = styled.div`
  width: 100%;
`;
export const AboutContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.bgDark};

  @media screen and (max-width: ${({ theme }) => theme.screens.largeSize}) {
    flex-direction: column;
  }
`;

export const AboutTextWrapper = styled.div`
  background: ${({ theme }) => theme.colors.bgDark};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  max-width: 750px;
  width: 100%;
  /* max-height: 500px; */
  padding: 40px 50px;

  small {
    color: orange;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  h3 {
    font-size: 30px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.textLight};
  }

  p {
    font-size: 18px;
    font-weight: normal;
    color: ${({ theme }) => theme.colors.textLight};
  }

  @media screen and (max-width: ${({ theme }) => theme.screens.largeSize}) {
    width: 100%;
    max-width: 100%;
  }

  @media screen and (max-width: ${({ theme }) => theme.screens.smallSize}) {
    max-width: 550px;
    /* width: 100%; */
    min-height: 300px;
    h3 {
      font-size: 20px;
    }
    p {
      font-size: 15px;
    }
  }
`;
export const AboutImageContainer = styled.div`
  position: relative;
  max-width: 750px;
  /* width: 100%; */
  /* max-height: 500px; */
  /* background: url(${image3});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: contain; */

  /* border: 2px solid red; */
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media screen and (max-width: ${({ theme }) => theme.screens.smallSize}) {
    /* max-width: 550px;
    min-height: 300px; */
    /* width: 100%; */
  }
`;
export const OpeningHoursContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  width: 100%;

  div:first-child {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h5 {
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    h2 {
      font-size: 42px;
      text-transform: capitalize;
    }
  }

  div:last-child {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-left: 1px solid black;
    padding-left: 50px;

    p {
      text-transform: uppercase;
      font-weight: bold;
      line-height: 35px;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.screens.smallSize}) {
    flex-direction: column;

    div:first-child {
      h2 {
        font-size: 32px;
      }
    }

    div:last-child {
      border-left: 0;
      padding-left: 0;

      p {
        font-size: 12px;
        line-height: 45px;
      }
    }
  }
`;
// export const AboutContainer = styled.div``;
// export const AboutContainer = styled.div``;
