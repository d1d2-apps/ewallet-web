import * as RadixTooltip from '@radix-ui/react-tooltip';

import * as S from './Tooltip.styles';

interface TooltipProps {
  children: React.ReactNode;
  content: string;
  side?: 'top' | 'right' | 'bottom' | 'left';
}

export function Tooltip({ children, content, side }: TooltipProps) {
  return (
    <RadixTooltip.Root>
      <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>

      <RadixTooltip.Portal>
        <S.Content sideOffset={5} side={side}>
          {content}
          <S.Arrow />
        </S.Content>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  );
}
