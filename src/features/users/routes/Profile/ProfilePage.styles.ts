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
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  ${({ theme }) =>
    theme.mixins.screen.md(css`
      max-width: 15rem;
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

      ${({ theme }) =>
        theme.mixins.screen.md(css`
          text-align: left;
        `)}

      span {
        text-transform: uppercase;
        font-size: var(--font-size-xs);
        color: var(--gray-400);
      }

      strong {
        font-size: var(--font-size-md);
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
  background-color: white;
  padding: 2rem;
  border-radius: var(--rounded-lg);
  box-shadow: var(--shadow-sm);

  display: flex;
  flex-direction: column;
  gap: 3rem;

  section {
    width: 100%;

    & + section {
      border-top: 1px solid var(--gray-200);
      padding-top: 2rem;
    }
  }
`;
