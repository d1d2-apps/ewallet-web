import styled from 'styled-components';

export const Container = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span {
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: 500;
  }
`;

export const ErrorMessage = styled.small`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.error};
`;
