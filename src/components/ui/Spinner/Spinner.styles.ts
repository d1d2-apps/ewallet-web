import styled, { keyframes } from 'styled-components';

export type SpinnerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

interface ContainerProps {
  size: SpinnerSize;
}

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.span<ContainerProps>`
  font-size: ${({ theme, size }) => theme.fontSizes[size]};

  display: flex;

  animation: ${spin} 1s linear infinite;
`;
