import NiceModal from '@ebay/nice-modal-react';

import { AlertDialog, AlertDialogProps } from '@/components/dialogs';

export function useAlertDialog() {
  const show = async (props: AlertDialogProps) => {
    await NiceModal.show(AlertDialog, props);
  };

  return { show };
}
