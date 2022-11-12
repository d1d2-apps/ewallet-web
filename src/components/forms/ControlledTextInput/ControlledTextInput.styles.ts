import styled from 'styled-components';

export const Container = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span {
    font-weight: 500;
  }
`;

export const ErrorMessage = styled.small`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.red[500]};
`;
