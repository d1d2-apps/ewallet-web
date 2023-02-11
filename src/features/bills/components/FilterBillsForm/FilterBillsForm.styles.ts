import { opacify } from 'polished';
import styled from 'styled-components';

export const Container = styled.form`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;

  & > aside {
    background-color: ${({ theme }) => theme.colors.backgroundOffset};
    padding: 1rem 0;
    border-radius: ${({ theme }) => theme.rounded.md};
    box-shadow: ${({ theme }) => theme.shadow.sm};

    display: flex;
    gap: 1rem;

    & > div {
      padding: 0 1.5rem;

      display: flex;
      flex-direction: column;
      gap: 0.25rem;

      small {
        font-size: ${({ theme }) => theme.fontSize.xs};
        color: ${({ theme }) => opacify(-0.5, theme.colors.neutral)};
      }

      strong {
        font-size: ${({ theme }) => theme.fontSize.sm};
      }

      & + div {
        border-left: 1px solid ${({ theme }) => opacify(-0.9, theme.colors.neutral)};
      }
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;
