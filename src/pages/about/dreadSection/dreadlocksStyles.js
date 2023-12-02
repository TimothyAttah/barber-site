import styled from 'styled-components';

export const DreadlocksContainer = styled.div`
  margin: 50px 0;

  h2 {
    margin-bottom: 10px;
    text-transform: uppercase;
  }
`;

export const DreadlocksImageContainer = styled.div`
  /* max-width: 750px; */
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;

  background: black;
  /* opacity: 0.9; */

  /* border: 2px solid red; */

  @media screen and (max-width: ${({ theme }) => theme.screens.mediumSize}) {
    margin: 0 auto;
  }
`;
export const DreadlocksImageBox = styled.div`
  max-width: 550px;
  /* height: 300px; */
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
// export const DreadlocksContainer = styled.div``;
// export const DreadlocksContainer = styled.div``;
// export const DreadlocksContainer = styled.div``;
