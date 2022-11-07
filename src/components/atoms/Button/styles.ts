import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 3rem;
  border: 0;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.primary[500]};
  font-weight: bold;
  color: white;

  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: all 0.2s;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary[600]};
    box-shadow: ${({ theme }) => theme.shadows.md};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.primary[700]};
    transform: scale(0.975);
  }
`;
