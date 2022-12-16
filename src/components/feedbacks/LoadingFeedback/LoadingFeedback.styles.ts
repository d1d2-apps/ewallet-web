import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 5rem 1rem;
  color: var(--gray-400);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  h2 {
    font-family: var(--font-family-inter);
    font-size: var(--font-size-sm);
    font-weight: 500;
    text-align: center;
  }
`;
