import { PropsWithChildren } from 'react';

import { X } from '@phosphor-icons/react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Slot } from '@radix-ui/react-slot';

import { Button, ButtonProps } from '../Button/Button';
import * as S from './Modal.styles';

export type ModalProps = DialogPrimitive.DialogProps;

interface ModalRootProps extends ModalProps {
  asChild?: boolean;
}

function ModalRoot({ asChild, children, ...rest }: ModalRootProps) {
  return (
    <DialogPrimitive.Root {...rest}>
      <DialogPrimitive.Portal>
        <S.Overlay />

        <S.Content>{asChild ? <Slot>{children}</Slot> : children}</S.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

ModalRoot.displayName = 'Modal.Root';

function ModalTitle({ children }: PropsWithChildren) {
  return <S.Title>{children}</S.Title>;
}

ModalTitle.displayName = 'Modal.Title';

function ModalHeaderCloseButton() {
  return (
    <DialogPrimitive.Close asChild>
      <Button size="xs" colorScheme="neutral" isRounded>
        <X size="1rem" />
      </Button>
    </DialogPrimitive.Close>
  );
}

ModalHeaderCloseButton.displayName = 'Modal.HeaderCloseButton';

interface ModalHeaderProps {
  title: string;
}

function ModalHeader({ title }: ModalHeaderProps) {
  return (
    <S.Header>
      <ModalTitle>{title}</ModalTitle>
      <ModalHeaderCloseButton />
    </S.Header>
  );
}

ModalHeader.displayName = 'Modal.Header';

interface ModalBodyProps {
  asChild?: boolean;
}

function ModalBody({ asChild, children }: PropsWithChildren<ModalBodyProps>) {
  const Component = asChild ? Slot : S.Body;
  return <Component>{children}</Component>;
}

ModalBody.displayName = 'Modal.Body';

interface ModalFooterCloseButtonProps extends Omit<ButtonProps, 'children'> {
  title?: string;
}

function ModalFooterCloseButton({ title = 'Fechar', ...rest }: ModalFooterCloseButtonProps) {
  return (
    <DialogPrimitive.Close asChild>
      <Button colorScheme="white" size="sm" {...rest}>
        {title}
      </Button>
    </DialogPrimitive.Close>
  );
}

ModalFooterCloseButton.displayName = 'Modal.FooterCloseButton';

interface ModalFooterProps {
  asChild?: boolean;
  closeButtonOptions?: ModalFooterCloseButtonProps;
  primaryButtonOptions: Omit<ButtonProps, 'children'> & { title: string };
}

function ModalFooter({
  closeButtonOptions: { title: closeButtonTitle = 'Fechar', ...closeButtonProps } = {},
  primaryButtonOptions: { title: primaryButtonTitle, ...primaryButtonProps }
}: ModalFooterProps) {
  return (
    <S.Footer>
      <ModalFooterCloseButton title={closeButtonTitle} {...closeButtonProps} />

      <Button size="sm" {...primaryButtonProps}>
        {primaryButtonTitle}
      </Button>
    </S.Footer>
  );
}

ModalFooter.displayName = 'Modal.Footer';

export const Modal = {
  Root: ModalRoot,
  Header: ModalHeader,
  HeaderCloseButton: ModalHeaderCloseButton,
  Title: ModalTitle,
  Body: ModalBody,
  Footer: ModalFooter,
  FooterCloseButton: ModalFooterCloseButton
};
