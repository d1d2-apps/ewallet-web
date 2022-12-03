import styled from 'styled-components';

export const Container = styled.div`
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

  input {
    display: none;
  }
`;
