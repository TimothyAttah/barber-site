import styled, { css } from 'styled-components';

export const TeamSectionContainer = styled.div`
  margin-top: 80px;
`;
export const TeamSectionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.normal &&
    css`
      display: none;
    `}

  ${(props) =>
    props.mobile &&
    css`
      display: flex;
    `}

  @media screen and (max-width: ${({ theme }) => theme.screens.mediumSize}) {
    flex-direction: column;

    ${(props) =>
      props.mobile &&
      css`
        display: none;
      `}

    ${(props) =>
      props.normal &&
      css`
        display: flex;
      `}
  }
`;
export const TeamSectionImageBox = styled.div`
  max-width: 650px;
  /* height: 500px; */
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media screen and (max-width: ${({ theme }) => theme.screens.mediumSize}) {
    margin-top: 50px;
  }
`;
export const TeamSectionInfoBox = styled.div`
  max-width: 650px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  /* background-color: ${({ theme }) => theme.colors.overlay}; */
  color: ${({ theme }) => theme.colors.textDark};
  padding: 0 50px;

  h2 {
    font-size: 35px;
    text-align: center;
  }

  small {
    text-transform: uppercase;
    letter-spacing: 1px;
    text-align: center;
  }

  p {
    text-align: center;
    line-height: 25px;
  }

  @media screen and (max-width: ${({ theme }) => theme.screens.smallSize}) {
    h2 {
      font-size: 25px;
    }
  }
`;
