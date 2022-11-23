import styled from 'styled-components';

export const Container = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span {
    font-size: var(--font-size-sm);
    font-weight: 500;
  }
`;

export const ErrorMessage = styled.small`
  font-size: var(--font-size-xs);
  color: var(--red-500);
`;
