import { PropsWithChildren } from 'react';

import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { Slot } from '@radix-ui/react-slot';

import { Button, ButtonProps } from '../Button/Button';
import * as S from './Dialog.styles';

export type DialogProps = AlertDialogPrimitive.AlertDialogProps;

function DialogRoot({ children, ...rest }: DialogProps) {
  return (
    <AlertDialogPrimitive.Root {...rest}>
      <AlertDialogPrimitive.Portal>
        <S.Overlay />

        <S.Content>{children}</S.Content>
      </AlertDialogPrimitive.Portal>
    </AlertDialogPrimitive.Root>
  );
}

DialogRoot.displayName = 'Dialog.Root';

interface DialogBodyProps {
  asChild?: boolean;
}

function DialogBody({ asChild, children }: PropsWithChildren<DialogBodyProps>) {
  const Component = asChild ? Slot : S.Body;
  return <Component>{children}</Component>;
}

DialogBody.displayName = 'Dialog.Body';

function DialogTitle({ children }: PropsWithChildren) {
  return <S.Title>{children}</S.Title>;
}

DialogTitle.displayName = 'Dialog.Title';

function DialogDescription({ children }: PropsWithChildren) {
  return <S.Description>{children}</S.Description>;
}

DialogDescription.displayName = 'Dialog.Description';

interface DialogFooterProps {
  asChild?: boolean;
}

function DialogFooter({ asChild, children }: PropsWithChildren<DialogFooterProps>) {
  const Component = asChild ? Slot : S.Footer;
  return <Component>{children}</Component>;
}

DialogFooter.displayName = 'Dialog.Footer';

interface DialogCancelButtonProps extends Omit<ButtonProps, 'children'> {
  title?: string;
}

function DialogCancelButton({ title = 'Fechar', ...rest }: DialogCancelButtonProps) {
  return (
    <AlertDialogPrimitive.Cancel asChild>
      <Button colorScheme="white" size="sm" {...rest}>
        {title}
      </Button>
    </AlertDialogPrimitive.Cancel>
  );
}

DialogCancelButton.displayName = 'Dialog.CancelButton';

export const Dialog = {
  Root: DialogRoot,
  Body: DialogBody,
  Title: DialogTitle,
  Description: DialogDescription,
  Footer: DialogFooter,
  CancelButton: DialogCancelButton
};
