import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 20rem;
    max-height: 20rem;
    object-fit: contain;
  }

  h2 {
    margin-top: 2rem;
    font-family: var(--font-family-montserrat);
    font-size: var(--font-size-xl);
    color: var(--gray-500);
    text-align: center;
  }

  p {
    margin-top: 0.5rem;
    font-size: var(--font-size-md);
    color: var(--gray-400);
    text-align: center;
  }
`;
