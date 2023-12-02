import styled from 'styled-components';

export const FooterContainer = styled.div`
  background: #000;
  color: #fff;
  width: 100%;
  height: auto;
  padding: 20px 0;
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: ${({ theme }) => theme.screens.mediumSize}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 30px;
  }
`;
export const FooterIconsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  img {
    width: 150px;
  }
  div {
    display: flex;
    align-items: center;
    gap: 10px;
    padding-top: 10px;

    svg {
      color: #fff;
      font-size: 20px;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.screens.mediumSize}) {
    div {
      justify-content: center;
    }
  }
`;
export const FooterServiceBox = styled.div`
  display: flex;
  flex-direction: column;

  h5 {
    text-transform: uppercase;
    margin-bottom: 20px;
  }

  ul li {
    margin-bottom: 10px;
  }

  @media screen and (max-width: ${({ theme }) => theme.screens.mediumSize}) {
    h5 {
      margin-bottom: 10px;
    }
  }
`;
export const FooterContactBox = styled.div`
  display: flex;
  flex-direction: column;

  h5 {
    text-transform: uppercase;
    margin-bottom: 20px;
  }

  ul li {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: ${({ theme }) => theme.screens.mediumSize}) {
    h5 {
      margin-bottom: 10px;
    }
  }
`;
// export const FooterContainer = styled.div``;
// export const FooterContainer = styled.div``;
// export const FooterContainer = styled.div``;
