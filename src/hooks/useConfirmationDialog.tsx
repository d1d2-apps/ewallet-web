import NiceModal, { useModal } from '@ebay/nice-modal-react';

import { ConfirmationDialog, ConfirmationDialogProps } from '@/components/dialogs';

const ConfirmationDialogModal = NiceModal.create<ConfirmationDialogProps>(({ onConfirm, ...rest }) => {
  const alert = useModal();

  const handleConfirmation = async () => {
    await onConfirm();
    alert.hide();
  };

  return (
    <ConfirmationDialog
      {...rest}
      onConfirm={handleConfirmation}
      open={alert.visible}
      onOpenChange={open => !open && alert.remove()}
    />
  );
});

export function useConfirmationDialog() {
  const show = async (props: ConfirmationDialogProps) => {
    await NiceModal.show(ConfirmationDialogModal, props);
  };

  return { show };
}
