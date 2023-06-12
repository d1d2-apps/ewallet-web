import { useState } from 'react';

import { Button, Dialog, DialogProps } from '@/components/elements';

export interface ConfirmationDialogProps {
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
}: ConfirmationDialogProps & DialogProps) {
  const [isSubmiting, setIsSubmiting] = useState(false);

  const handleConfirmClick = async () => {
    setIsSubmiting(true);
    await onConfirm();
    setIsSubmiting(false);
  };

  return (
    <Dialog.Root {...rest}>
      <Dialog.Body>
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Description>{description}</Dialog.Description>
      </Dialog.Body>

      <Dialog.Footer>
        <Dialog.CancelButton title={cancelButtonLabel} disabled={isSubmiting} />

        <Button size="sm" onClick={handleConfirmClick} isLoading={isSubmiting} loadingText={okButtonLoadingText}>
          {okButtonLabel}
        </Button>
      </Dialog.Footer>
    </Dialog.Root>
  );
}
