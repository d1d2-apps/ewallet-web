import styled, { css } from 'styled-components';

import financesImg from '../../assets/images/finances.png';

export const Container = styled.div`
  height: 100vh;
  background: ${({ theme }) =>
    `linear-gradient(to bottom, ${theme.colors.secondary[900]} 20%, ${theme.colors.secondary[500]} 100%)`};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  width: 100%;
  height: 3.5rem;
  padding: 0 0 0 1rem;
  background-color: ${({ theme }) => theme.colors.secondary[900]};
  color: ${({ theme }) => theme.colors.gray[200]};

  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ theme }) =>
    theme.mixins.screen.md(css`
      padding: 0 5rem;
    `)}

  h1 {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
    color: ${({ theme }) => theme.colors.gray[50]};
    pointer-events: none;
  }

  a {
    font-weight: 500;
    padding: 0.75rem 1rem;
    border-radius: 9999px;
    transition: all 0.2s;

    display: flex;
    align-items: center;
    gap: 0.75rem;

    &:hover {
      color: ${({ theme }) => theme.colors.primary[500]};
      background-color: ${({ theme }) => theme.colors.secondary[800]};
    }
  }
`;

export const Hero = styled.main`
  flex: 1;
  width: 100%;
  max-width: 1200px;
  padding: 0 1rem;

  display: flex;
  align-items: center;
  gap: 5rem;

  & > div {
    flex: 1;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    h2 {
      font-size: ${({ theme }) => theme.fontSizes['3xl']};
      font-weight: 800;
      text-align: center;
      color: ${({ theme }) => theme.colors.gray[200]};

      ${({ theme }) =>
        theme.mixins.screen.md(css`
          font-size: ${theme.fontSizes['5xl']};
          text-align: left;
        `)}

      strong {
        font-weight: 900;
        color: ${({ theme }) => theme.colors.primary[500]};
      }
    }

    p {
      max-width: 30rem;
      margin: 0 auto;
      font-size: ${({ theme }) => theme.fontSizes.lg};
      font-weight: 300;
      text-align: center;
      color: ${({ theme }) => theme.colors.gray[300]};

      ${({ theme }) =>
        theme.mixins.screen.md(css`
          margin: 0;
          text-align: left;
        `)}
    }

    button {
      width: fit-content;
      margin: 0 auto;

      ${({ theme }) =>
        theme.mixins.screen.md(css`
          margin: 0;
        `)}
    }
  }
`;

export const HeroImage = styled.img.attrs({
  src: financesImg,
  alt: 'Finanças'
})`
  display: none;

  ${({ theme }) =>
    theme.mixins.screen.md(css`
      display: block;
      max-width: 20rem;
      object-fit: contain;
      filter: drop-shadow(0 0 4rem ${theme.colors.secondary[300]});
    `)}

  ${({ theme }) =>
    theme.mixins.screen.lg(css`
      max-width: 25rem;
    `)}
`;
