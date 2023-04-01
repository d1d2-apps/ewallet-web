import { opacify } from 'polished';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;

  & > main {
    padding-bottom: 3rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;

    ${({ theme }) =>
      theme.mixins.screen.md(css`
        flex-direction: row;
        align-items: flex-start;
        gap: 8rem;
      `)}
  }
`;

export const ProfilePictureSection = styled.section`
  max-width: 12rem;
  width: 100%;

  display: flex;
  justify-content: center;

  position: relative;

  ${({ theme }) =>
    theme.mixins.screen.md(css`
      max-width: 15rem;
    `)}

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    ${({ theme }) =>
      theme.mixins.screen.md(css`
        position: fixed;
      `)}

    section {
      width: 100%;
      margin-top: 2rem;

      display: flex;
      flex-direction: column;
      gap: 2rem;

      & > div {
        flex: 1;
        text-align: center;

        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        span {
          text-transform: uppercase;
          font-size: ${({ theme }) => theme.fontSize.xs};
          color: ${({ theme }) => opacify(-0.5, theme.colors.neutral)};
        }

        strong {
          font-size: ${({ theme }) => theme.fontSize.md};
        }
      }
    }
  }
`;

export const ProfileDataSection = styled.section`
  flex: 1;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${({ theme }) =>
    theme.mixins.screen.md(css`
      gap: 4rem;
    `)}
`;

export const ProfileInfoWrapper = styled.main`
  background-color: ${({ theme }) => theme.colors.backgroundOffset};
  padding: 2rem;
  border-radius: ${({ theme }) => theme.rounded.lg};
  box-shadow: ${({ theme }) => theme.shadow.sm};

  display: flex;
  flex-direction: column;
  gap: 3rem;

  section {
    width: 100%;

    & + section {
      border-top: 1px solid ${({ theme }) => opacify(-0.9, theme.colors.neutral)};
      padding-top: 2rem;
    }
  }
`;
