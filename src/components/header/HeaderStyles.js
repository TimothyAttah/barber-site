import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MainHeaderContainer = styled.header`
  position: relative;
  width: 100%;
  /* border: 2px solid white; */
`;

export const HeaderContainer = styled.div`
  /* max-width: 1500px; */
  /* width: 100%; */
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding-left: 2.5rem /* 40px */;
  padding-right: 2.5rem /* 40px */;
  /* padding-top: 2.5rem 40px; */
  background: ${({ theme }) => theme.colors.bgDark};
  opacity: 0.7;

  @media screen and (max-width: ${({ theme }) => theme.screens.smallSize}) {
    img {
      width: 130px;
    }
  }
`;

export const NavContainer = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  a {
    color: ${(props) => props.theme.colors.textLight};
    font-size: 24px;
    /* background-attachment: fixed; */

    :hover {
      color: ${(props) => props.theme.colors.textDark};
      background: linear-gradient(90deg, #2af598, #009efd);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      /* background-clip{} */
    }

    @media screen and (max-width: ${({ theme }) => theme.screens.mediumSize}) {
      display: none;
    }
  }

  svg {
    color: ${(props) => props.theme.colors.textLight};
    font-size: 30px;
    display: none;

    @media screen and (max-width: ${({ theme }) => theme.screens.mediumSize}) {
      display: flex;
    }
  }
`;

export const MediumHeaderContainer = styled(motion.div)`
  max-width: 300px;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bgDark};
  position: absolute;
  right: 0px;
  top: 0px;
  z-index: 10;
  /* display: none; */

  svg {
    position: absolute;
    right: 10px;
    top: 20px;
    color: ${(props) => props.theme.colors.textLight};
    font-size: 30px;
  }
`;

export const MediumNavContainer = styled(motion.div)`
  width: 100%;
  position: absolute;
  top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a {
    color: ${(props) => props.theme.colors.textLight};
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px auto;
    text-transform: uppercase;
    font-size: 30px;
    font-weight: normal;
    transition: background 1.5s ease-in all;
    :hover {
      background: linear-gradient(90deg, #2af598, #009efd);
    }
  }
`;
