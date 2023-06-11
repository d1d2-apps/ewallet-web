import { PropsWithChildren } from 'react';

import { X } from '@phosphor-icons/react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Slot } from '@radix-ui/react-slot';

import { Button, ButtonProps } from '../Button/Button';
import * as S from './Dialog.styles';

type DialogRootProps = DialogPrimitive.DialogProps;

function DialogRoot({ children, ...rest }: DialogRootProps) {
  return (
    <DialogPrimitive.Root {...rest}>
      <DialogPrimitive.Portal>
        <S.Overlay />

        <S.Content>{children}</S.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

DialogRoot.displayName = 'Dialog.Root';

function DialogTitle({ children }: PropsWithChildren) {
  return <S.Title>{children}</S.Title>;
}

DialogTitle.displayName = 'Dialog.Title';

function DialogHeaderCloseButton() {
  return (
    <DialogPrimitive.Close asChild>
      <Button size="xs" colorScheme="neutral" isRounded>
        <X size="1rem" />
      </Button>
    </DialogPrimitive.Close>
  );
}

DialogHeaderCloseButton.displayName = 'Dialog.HeaderCloseButton';

interface DialogHeaderProps {
  title: string;
}

function DialogHeader({ title }: DialogHeaderProps) {
  return (
    <S.Header>
      <DialogTitle>{title}</DialogTitle>
      <DialogHeaderCloseButton />
    </S.Header>
  );
}

DialogHeader.displayName = 'Dialog.Header';

interface DialogBodyProps {
  asChild?: boolean;
}

function DialogBody({ asChild, children }: PropsWithChildren<DialogBodyProps>) {
  const Component = asChild ? Slot : S.Body;
  return <Component>{children}</Component>;
}

DialogBody.displayName = 'Dialog.Body';

interface DialogFooterCloseButtonProps {
  title?: string;
}

function DialogFooterCloseButton({ title = 'Fechar' }: DialogFooterCloseButtonProps) {
  return (
    <DialogPrimitive.Close asChild>
      <Button colorScheme="white" size="sm">
        {title}
      </Button>
    </DialogPrimitive.Close>
  );
}

DialogFooterCloseButton.displayName = 'Dialog.FooterCloseButton';

interface DialogFooterProps {
  asChild?: boolean;
  primaryButtonOptions: Omit<ButtonProps, 'children'> & { title: string };
}

function DialogFooter({
  asChild,
  primaryButtonOptions: { title: primaryButtonTitle = 'Salvar', ...primaryButtonProps }
}: DialogFooterProps) {
  if (asChild) {
    return <Slot />;
  }

  return (
    <S.Footer>
      <DialogFooterCloseButton />

      <Button type="submit" size="sm" {...primaryButtonProps}>
        {primaryButtonTitle}
      </Button>
    </S.Footer>
  );
}

DialogFooter.displayName = 'Dialog.Footer';

export const Dialog = {
  Root: DialogRoot,
  Header: DialogHeader,
  HeaderCloseButton: DialogHeaderCloseButton,
  Title: DialogTitle,
  Body: DialogBody,
  Footer: DialogFooter,
  FooterCloseButton: DialogFooterCloseButton
};
