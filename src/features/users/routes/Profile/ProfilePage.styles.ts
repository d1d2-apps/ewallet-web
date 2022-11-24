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
  max-width: 15rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

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

export const ProfilePicture = styled.div`
  width: fit-content;
  padding: 0.5rem;
  background-color: white;
  border-radius: var(--rounded-full);
  box-shadow: var(--shadow-sm);
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 10rem;
    aspect-ratio: 1 / 1;
    border-radius: var(--rounded-full);
    object-fit: cover;
  }

  button {
    position: absolute;
    right: 0;
    bottom: 0;
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

  header {
    h2 {
      font-family: var(--font-family-montserrat);
      font-size: var(--font-size-2xl);
      font-weight: 500;
      color: var(--gray-400);
    }
  }
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
