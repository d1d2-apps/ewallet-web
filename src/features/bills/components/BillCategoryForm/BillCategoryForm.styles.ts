import { opacify } from 'polished';
import styled, { css } from 'styled-components';

interface CategoryCardProps {
  $selected: boolean;
}

export const Container = styled.div`
  padding: 1.5rem;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > main {
    width: 100%;

    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 0.75rem;

    ${({ theme }) =>
      theme.mixins.screen.lg(css`
        grid-template-columns: repeat(2, 1fr);
      `)}
  }
`;

export const CategoryCard = styled.article<CategoryCardProps>`
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => opacify(-0.9, theme.colors.neutral)};
  border-radius: 0.5rem;

  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 1.5rem;

  &:hover {
    border-color: ${({ theme }) => opacify(-0.75, theme.colors.neutral)};
  }

  ${({ theme, $selected }) =>
    $selected &&
    css`
      background-color: ${opacify(-0.95, theme.colors.primary)};
      border-color: ${theme.colors.primary};
      color: ${theme.colors.primary};
      box-shadow: ${theme.mixins.ring.xs(theme.colors.primary)};
      pointer-events: none;
    `}
`;

export const ErrorMessage = styled.small`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.error};
`;
