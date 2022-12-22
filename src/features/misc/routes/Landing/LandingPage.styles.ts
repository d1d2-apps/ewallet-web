import { opacify } from 'polished';
import styled, { css } from 'styled-components';

import financesImg from '../../assets/images/finances.png';

export const Container = styled.div`
  height: 100vh;
  background: ${({ theme }) =>
    `linear-gradient(to bottom, ${theme.colors.backgroundOffset} 20%, ${theme.colors.background} 100%)`};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  width: 100%;
  padding: 0 0 0 1rem;
  background-color: ${({ theme }) => theme.colors.backgroundOffset};
  color: ${({ theme }) => theme.colors.secondary};

  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ theme }) =>
    theme.mixins.screen.md(css`
      padding: 1rem 5rem;
    `)}

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    img {
      max-width: 2.5rem;
    }

    h1 {
      font-family: ${({ theme }) => theme.fontFamily.montserrat};
      font-size: ${({ theme }) => theme.fontSize['2xl']};
      color: ${({ theme }) => theme.colors.secondary};
      pointer-events: none;
    }
  }

  a {
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: ${({ theme }) => theme.rounded.full};
    transition: all 0.2s;

    display: flex;
    align-items: center;
    gap: 0.75rem;

    &:hover {
      color: ${({ theme }) => theme.colors.background};
      background-color: ${({ theme }) => theme.colors.primary};
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
      font-size: ${({ theme }) => theme.fontSize['3xl']};
      font-weight: 800;
      text-align: center;
      color: ${({ theme }) => theme.colors.secondary};

      ${({ theme }) =>
        theme.mixins.screen.md(css`
          font-size: ${theme.fontSize['5xl']};
          text-align: left;
        `)}

      strong {
        font-weight: 900;
        color: ${({ theme }) => theme.colors.primary};
      }
    }

    p {
      max-width: 30rem;
      margin: 0 auto;
      font-size: ${({ theme }) => theme.fontSize.lg};
      font-weight: 300;
      text-align: center;
      color: ${({ theme }) => opacify(-0.5, theme.colors.neutral)};

      ${({ theme }) =>
        theme.mixins.screen.md(css`
          margin: 0;
          text-align: left;
        `)}
    }

    a {
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
      filter: ${`drop-shadow(0 0 4rem ${theme.colors.primary})`};
    `)}

  ${({ theme }) =>
    theme.mixins.screen.lg(css`
      max-width: 25rem;
    `)}
`;
