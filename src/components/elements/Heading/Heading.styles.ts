import styled, { css } from 'styled-components';
import { opacify } from 'polished';
import { Slot as RadixSlot } from '@radix-ui/react-slot';

import { HeadingVariant } from './Heading';

interface ContainerProps {
  $variant: HeadingVariant;
}

const HEADING_VARIANTS_STYLES_CONFIG = {
  h2: css`
    font-family: ${({ theme }) => theme.fontFamily.montserrat};
    font-size: ${({ theme }) => theme.fontSize['2xl']};
    font-weight: 500;
    color: ${({ theme }) => opacify(-0.5, theme.colors.neutral)};
  `,
  h3: css`
    font-family: ${({ theme }) => theme.fontFamily.montserrat};
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: bold;
    text-transform: uppercase;
  `,
  h4: css`
    font-family: ${({ theme }) => theme.fontFamily.inter};
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: 400;
    color: ${({ theme }) => opacify(-0.5, theme.colors.neutral)};
  `
};

export const Container = styled.h2<ContainerProps>`
  ${({ $variant }) => HEADING_VARIANTS_STYLES_CONFIG[$variant]}
`;

export const Slot = styled(RadixSlot)<ContainerProps>`
  ${({ $variant }) => HEADING_VARIANTS_STYLES_CONFIG[$variant]}
`;
