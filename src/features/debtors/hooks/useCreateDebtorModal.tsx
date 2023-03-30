import NiceModal, { useModal } from '@ebay/nice-modal-react';

import { CreateDebtorModal, CreateDebtorModalProps } from '../components/CreateDebtorModal/CreateDebtorModal';

const CreateDebtorNiceModal = NiceModal.create<CreateDebtorModalProps>(({ onSuccess, ...rest }) => {
  const modal = useModal();

  const handleSuccess = async () => {
    modal.remove();

    if (onSuccess) {
      await onSuccess();
    }
  };

  return (
    <CreateDebtorModal
      {...rest}
      open={modal.visible}
      onOpenChange={open => !open && modal.remove()}
      onSuccess={handleSuccess}
    />
  );
});

export function useCreateDebtorModal() {
  const show = async (props: CreateDebtorModalProps = {}) => {
    await NiceModal.show(CreateDebtorNiceModal, props);
  };

  return { show };
}
