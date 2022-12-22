import { tint } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 5rem 1rem;
  color: ${({ theme }) => tint(0.1, theme.colors.neutral)};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  h2 {
    font-family: ${({ theme }) => theme.fontFamily.inter};
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: 500;
    text-align: center;
  }
`;
