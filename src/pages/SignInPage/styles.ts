import styled from 'styled-components';

export const SignInPageContainer = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignInForm = styled.form`
  max-width: 35rem;
  background-color: white;
  padding: 2.5rem;
  margin: 0 1rem;
  border-radius: 0.5rem;
  box-shadow: ${({ theme }) => theme.shadows.md};

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  header {
    text-align: center;

    h1 {
      font-family: ${({ theme }) => theme.fontFamilies.montserrat};
      font-size: ${({ theme }) => theme.fontSizes['2xl']};
    }

    h2 {
      font-family: ${({ theme }) => theme.fontFamilies.montserrat};
      font-size: ${({ theme }) => theme.fontSizes.lg};
      font-weight: 400;
      color: ${({ theme }) => theme.colors.secondary[300]};
      margin-top: 0.5rem;
    }
  }

  h3 {
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: 500;
  }

  main {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  footer {
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes.sm};

    span {
      margin-right: 0.5rem;
    }

    a {
      font-weight: bold;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
