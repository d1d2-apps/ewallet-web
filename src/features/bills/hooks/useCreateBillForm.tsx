import NiceModal, { useModal } from '@ebay/nice-modal-react';

import { CreateBillModal, CreateBillModalProps } from '../components/CreateBillModal/CreateBillModal';

const CreateBillNiceModal = NiceModal.create<CreateBillModalProps>(({ onSuccess, ...rest }) => {
  const modal = useModal();

  const handleSuccess = async () => {
    modal.remove();

    if (onSuccess) {
      await onSuccess();
    }
  };

  return (
    <CreateBillModal
      {...rest}
      open={modal.visible}
      onOpenChange={open => !open && modal.remove()}
      onSuccess={handleSuccess}
    />
  );
});

export function useCreateBillModal() {
  const show = async (props: CreateBillModalProps = {}) => {
    await NiceModal.show(CreateBillNiceModal, props);
  };

  return { show };
}
