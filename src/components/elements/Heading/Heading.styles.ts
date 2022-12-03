import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { Slot as RadixSlot } from '@radix-ui/react-slot';

import { HeadingVariant } from './Heading';

interface ContainerProps {
  variant: HeadingVariant;
}

const HEADING_VARIANTS_STYLES_CONFIG: Record<HeadingVariant, FlattenSimpleInterpolation> = {
  h2: css`
    font-family: var(--font-family-montserrat);
    font-size: var(--font-size-2xl);
    font-weight: 500;
    color: var(--gray-400);
  `,
  h3: css`
    font-family: var(--font-family-montserrat);
    font-weight: bold;
    text-transform: uppercase;
  `
};

export const Container = styled.h2<ContainerProps>`
  ${({ variant }) => HEADING_VARIANTS_STYLES_CONFIG[variant]}
`;

export const Slot = styled(RadixSlot)<ContainerProps>`
  ${({ variant }) => HEADING_VARIANTS_STYLES_CONFIG[variant]}
`;
