import * as S from './Heading.styles';

export type HeadingVariant = 'h2' | 'h3';

interface HeadingProps {
  variant?: HeadingVariant;
  asChild?: boolean;
  children: React.ReactNode;
}

export function Heading({ variant = 'h2', asChild = false, children }: HeadingProps) {
  const Component = asChild ? S.Slot : S.Container;

  return <Component variant={variant}>{children}</Component>;
}
