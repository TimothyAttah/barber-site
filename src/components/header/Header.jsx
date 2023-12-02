import React from 'react';
import logo from '../../assets/logo.svg';
// import { NavLink } from 'react-router-dom';
import * as Styles from './HeaderStyles';
// import { FadeIn } from '../fadeIn/FadeIn';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';

const showAnimation = {
  hidden: {
    opacity: 0,
    x: 100,
    transition: {
      duration: 1.25,
      type: 'tween',
      delay: 0.2,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.25,
      type: 'tween',
      delay: 0.2,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
};

export const MediumHeader = ({ showHeader, setShowHeader, offset }) => {
  return (
    <Styles.MediumHeaderContainer
      variants={showAnimation}
      initial='hidden'
      animate='show'
      exit='hidden'
    >
      <FaTimes onClick={() => setShowHeader(false)} />
      <Styles.MediumNavContainer>
        <Link
          to='about'
          spy={true}
          offset={offset}
          duration={1000}
          onClick={() => setShowHeader(false)}
        >
          About
        </Link>
        <Link
          to='price'
          spy={true}
          offset={offset}
          duration={1000}
          onClick={() => setShowHeader(false)}
        >
          Pricing
        </Link>
        <Link
          to='contact'
          spy={true}
          offset={offset}
          duration={1000}
          onClick={() => setShowHeader(false)}
        >
          Contact
        </Link>
      </Styles.MediumNavContainer>
    </Styles.MediumHeaderContainer>
  );
};

export const MainHeader = ({ showHeader, setShowHeader, to, offset = -50 }) => {
  return (
    <Styles.HeaderContainer>
      <img src={logo} alt='' />
      <Styles.NavContainer>
        <Link
          to='about'
          spy={true}
          offset={offset}
          duration={1000}
          onClick={() => setShowHeader(false)}
        >
          About
        </Link>
        <Link
          to='price'
          spy={true}
          offset={offset}
          duration={1000}
          onClick={() => setShowHeader(false)}
        >
          Pricing
        </Link>
        <Link
          to='contact'
          spy={true}
          offset={offset}
          duration={1000}
          onClick={() => setShowHeader(false)}
        >
          Contact
        </Link>
        <FaBars onClick={() => setShowHeader(true)} />
      </Styles.NavContainer>
    </Styles.HeaderContainer>
  );
};

export const Header = () => {
  const [showHeader, setShowHeader] = useState(false);
  return (
    <Styles.MainHeaderContainer>
      <MainHeader showHeader={showHeader} setShowHeader={setShowHeader} />

      <AnimatePresence>
        {showHeader && (
          <MediumHeader showHeader={showHeader} setShowHeader={setShowHeader} />
        )}
      </AnimatePresence>
    </Styles.MainHeaderContainer>
  );
};
