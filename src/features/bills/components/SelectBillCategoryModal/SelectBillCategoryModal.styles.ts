import * as DialogPrimitive from '@radix-ui/react-dialog';
import { opacify } from 'polished';
import styled, { css } from 'styled-components';

interface CategoryCardProps {
  $selected: boolean;
}

export const Overlay = styled(DialogPrimitive.Overlay)`
  ${({ theme }) => theme.mixins.dialogs.getOverlayStyles()}
`;

export const Content = styled(DialogPrimitive.Content)`
  ${({ theme }) => theme.mixins.dialogs.getContentBaseStyles()}

  max-width: 40rem;

  header {
    padding: 1rem 1.5rem;
    position: relative;
    border-bottom: 1px solid ${({ theme }) => opacify(-0.95, theme.colors.neutral)};

    & > button {
      position: absolute;
      top: 0.75rem;
      right: 0.75rem;
    }
  }

  main {
    padding: 1.5rem;
    overflow-y: auto;

    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 0.75rem;

    ${({ theme }) =>
      theme.mixins.screen.md(css`
        grid-template-columns: repeat(2, 1fr);
      `)}
  }

  footer {
    justify-content: space-between;

    & > div {
      display: flex;
      gap: 0.75rem;
    }
  }
`;

export const Title = styled(DialogPrimitive.Title)`
  max-width: calc(100% - 2rem);
  margin: 0 auto;
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
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
