import styled, { css } from 'styled-components';

export const PriceContainer = styled.div`
  width: 100%;
  height: 400px;
  background: white;
  color: black;
  /* align-items: center; */
  /* border: 2px solid white; */
  margin-top: -20px;

  @media screen and (max-width: ${({ theme }) => theme.screens.mediumSize}) {
    height: auto;
  }
`;

export const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 850px;
  width: 100%;
  margin: auto;
  /* align-items: center; */
  /* border: 2px solid white; */
  padding-top: 100px;

  @media screen and (max-width: ${({ theme }) => theme.screens.mediumSize}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const PriceListWrapper = styled.div`
  position: relative;
  /* flex: 1; */
  display: flex;
  /* align-items: center; */
  align-items: baseline;
  justify-content: space-between;
  width: 600px;
  margin: 10px 0;

  div {
    width: 390px;
    height: 1px;
    background: #777;
    z-index: 1;
  }

  h4:first-child {
    display: flex;
    width: 200px;
    text-transform: uppercase;
    /* border: 2px solid green; */
  }

  h4:last-child {
    /* position: absolute;
    right: 0;
    z-index: 7; */
    display: flex;
    text-align: right;
    padding-left: 10px;
  }

  @media screen and (max-width: ${({ theme }) => theme.screens.mediumSize}) {
    /* flex-direction: column; */
    /* justify-content: center;
    align-items: center; */
    width: 100%;
    padding-bottom: 20px;

    div {
      width: 120px;
      height: 1px;
      background: #777;
      z-index: 1;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.screens.smallSize}) {
    /* flex-direction: column; */
    /* justify-content: center;
    align-items: center; */
    /* width: 100%; */

    div {
      width: 100px;
      height: 1px;
      background: #777;
      z-index: 1;
    }

    h4:first-child {
      display: flex;
      width: 80px;
      font-size: 14px;
      /* border: 2px solid green; */
    }

    h4:last-child {
      /* position: absolute;
    right: 0;
    z-index: 7; */
      display: flex;
      text-align: right;
      padding-left: 10px;
    }
  }
`;
export const PriceListTittle = styled.div`
  display: block;
  /* padding-top: 8px; */
  font-size: 30px;
  ${(props) =>
    props.show &&
    css`
      display: none;
    `}
  @media screen and (max-width: ${({ theme }) => theme.screens.mediumSize}) {
    display: none;
    ${(props) =>
      props.show &&
      css`
        display: flex;
        font-size: 20px;
        padding-bottom: 20px;
      `}
  }
`;
// export const PriceWrapper = styled.div``;
// export const PriceWrapper = styled.div``;
