import styled from 'styled-components';

export const Title = styled.h3`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: bold;
  margin-bottom: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Footer = styled.footer`
  margin-top: 2rem;
  text-align: center;

  a {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;
