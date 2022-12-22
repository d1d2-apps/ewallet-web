import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  padding: 0 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  img {
    max-width: 25rem;
    width: 100%;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    h2 {
      font-family: ${({ theme }) => theme.fontFamily.montserrat};
      font-size: ${({ theme }) => theme.fontSize['2xl']};
      font-weight: 900;
      margin: 0;
    }

    p {
      max-width: 35rem;
      font-size: ${({ theme }) => theme.fontSize.lg};
      font-weight: 300;
      text-align: center;
      margin: 0;
    }
  }
`;
