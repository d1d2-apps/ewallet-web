import styled from 'styled-components';

export const Title = styled.h3`
  text-align: center;
  font-size: var(--font-size-md);
  font-weight: bold;
  margin-bottom: 2rem;
`;

export const Footer = styled.footer`
  margin-top: 2rem;
  text-align: center;

  a {
    font-size: var(--font-size-sm);
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;
