import styled from 'styled-components';

export const TeamsContainer = styled.div``;
export const TeamsTitleContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bgDark};
  color: ${({ theme }) => theme.colors.textLight};

  img {
    width: 600px;
    height: 100%;
    object-fit: contain;
  }

  @media screen and (max-width: ${({ theme }) => theme.screens.mediumSize}) {
    display: none;
  }
`;
export const TeamsTitleWrapper = styled.div`
  position: absolute;
  width: 400px;
  margin: auto;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.colors.bgDark};
  opacity: 0.7;
  padding: 20px 10px;

  h3 {
    font-size: 32px;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    line-height: 20px;
  }
`;
export const TeamsInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 50px;
  @media screen and (max-width: ${({ theme }) => theme.screens.mediumSize}) {
    flex-wrap: wrap;
  }
`;
export const TeamsInfoBox = styled.div`
  max-width: 300px;
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;

  h5 {
    text-transform: uppercase;
    font-size: 18px;
  }

  @media screen and (max-width: ${({ theme }) => theme.screens.mediumSize}) {
    height: 200px;
  }
`;
// export const TeamsContainer = styled.div``;
