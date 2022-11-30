import styled, { css } from 'styled-components';

export const Container = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  h3 {
    font-family: var(--font-family-montserrat);
    text-transform: uppercase;
  }

  & > div {
    width: 100%;

    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1.5rem;

    ${({ theme }) =>
      theme.mixins.screen.lg(css`
        grid-template-columns: repeat(2, 1fr);
        gap: 3rem;
      `)}
  }

  button {
    width: fit-content;
  }
`;
