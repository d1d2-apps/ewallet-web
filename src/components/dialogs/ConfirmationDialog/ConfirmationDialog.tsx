import { useState } from 'react';
import NiceModal, { useModal } from '@ebay/nice-modal-react';
import * as Dialog from '@radix-ui/react-dialog';

import { Button } from '@/components/elements';

import * as S from './ConfirmationDialog.styles';

export interface ConfirmationDialogProps {
  title: string;
  description: string;
  okButtonLabel?: string;
  okButtonLoadingText?: string;
  cancelButtonLabel?: string;
  onConfirm: () => void | Promise<void>;
}

export const ConfirmationDialog = NiceModal.create<ConfirmationDialogProps>(
  ({
    title,
    description,
    okButtonLabel = 'Confirmar',
    okButtonLoadingText = 'Confirmando...',
    cancelButtonLabel = 'Cancelar',
    onConfirm
  }) => {
    const alert = useModal();

    const [isSubmiting, setIsSubmiting] = useState(false);

    const handleCancelClick = async () => {
      await alert.hide();
      alert.remove();
    };

    const handleConfirmClick = async () => {
      setIsSubmiting(true);
      await onConfirm();
      setIsSubmiting(false);

      handleCancelClick();
    };

    return (
      <Dialog.Root open={alert.visible}>
        <Dialog.Portal>
          <S.Overlay />

          <S.Content>
            <main>
              <S.Title>{title}</S.Title>
              <S.Description>{description}</S.Description>
            </main>

            <footer>
              <Dialog.Close asChild>
                <Button colorScheme="white" size="sm" onClick={handleCancelClick} disabled={isSubmiting}>
                  {cancelButtonLabel}
                </Button>
              </Dialog.Close>

              <Button size="sm" onClick={handleConfirmClick} isLoading={isSubmiting} loadingText={okButtonLoadingText}>
                {okButtonLabel}
              </Button>
            </footer>
          </S.Content>
        </Dialog.Portal>
      </Dialog.Root>
    );
  }
);
