import { useState } from 'react';

import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

import { Button } from '@/components/elements';

import * as S from './ConfirmationDialog.styles';

export interface ConfirmationDialogProps extends AlertDialogPrimitive.AlertDialogProps {
  title: string;
  description: string;
  okButtonLabel?: string;
  okButtonLoadingText?: string;
  cancelButtonLabel?: string;
  onConfirm: () => void | Promise<void>;
}

export function ConfirmationDialog({
  title,
  description,
  okButtonLabel = 'Confirmar',
  okButtonLoadingText = 'Confirmando...',
  cancelButtonLabel = 'Cancelar',
  onConfirm,
  ...rest
}: ConfirmationDialogProps) {
  const [isSubmiting, setIsSubmiting] = useState(false);

  const handleConfirmClick = async () => {
    setIsSubmiting(true);
    await onConfirm();
    setIsSubmiting(false);
  };

  return (
    <AlertDialogPrimitive.Root {...rest}>
      <AlertDialogPrimitive.Portal>
        <S.Overlay />

        <S.Content>
          <main>
            <S.Title>{title}</S.Title>
            <S.Description>{description}</S.Description>
          </main>

          <footer>
            <AlertDialogPrimitive.Cancel asChild>
              <Button colorScheme="white" size="sm" disabled={isSubmiting}>
                {cancelButtonLabel}
              </Button>
            </AlertDialogPrimitive.Cancel>

            <Button size="sm" onClick={handleConfirmClick} isLoading={isSubmiting} loadingText={okButtonLoadingText}>
              {okButtonLabel}
            </Button>
          </footer>
        </S.Content>
      </AlertDialogPrimitive.Portal>
    </AlertDialogPrimitive.Root>
  );
}
