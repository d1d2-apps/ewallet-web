import NiceModal, { useModal } from '@ebay/nice-modal-react';

import { AlertDialog, AlertDialogProps } from '@/components/dialogs';

const AlertDialogModal = NiceModal.create<AlertDialogProps>(props => {
  const alert = useModal();
  return <AlertDialog {...props} open={alert.visible} onOpenChange={open => !open && alert.remove()} />;
});

export function useAlertDialog() {
  const show = async (props: AlertDialogProps) => {
    await NiceModal.show(AlertDialogModal, props);
  };

  return { show };
}
