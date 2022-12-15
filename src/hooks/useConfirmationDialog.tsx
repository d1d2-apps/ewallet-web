import NiceModal from '@ebay/nice-modal-react';

import { ConfirmationDialog, ConfirmationDialogProps } from '@/components/dialogs';

export function useConfirmationDialog() {
  const show = async (props: ConfirmationDialogProps) => {
    await NiceModal.show(ConfirmationDialog, props);
  };

  return { show };
}
