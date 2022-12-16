import styled from 'styled-components';

interface ContainerProps {
  $size: 'xs' | 'sm' | 'md' | 'lg';
}

const containerSizes = {
  xs: '1.5rem',
  sm: '2.5rem',
  md: '3.5rem',
  lg: '4.5rem'
};

export const Container = styled.div<ContainerProps>`
  width: ${({ $size }) => containerSizes[$size]};
  height: ${({ $size }) => containerSizes[$size]};

  img {
    width: ${({ $size }) => containerSizes[$size]};
    height: ${({ $size }) => containerSizes[$size]};
    border-radius: var(--rounded-full);
    object-fit: cover;
  }
`;
