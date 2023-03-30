import NiceModal, { useModal } from '@ebay/nice-modal-react';

import {
  CreateCreditCardModal,
  CreateCreditCardModalProps
} from '../components/CreateCreditCardModal/CreateCreditCardModal';

const CreateCreditCardNiceModal = NiceModal.create<CreateCreditCardModalProps>(({ onSuccess, ...rest }) => {
  const modal = useModal();

  const handleSuccess = async () => {
    modal.remove();

    if (onSuccess) {
      await onSuccess();
    }
  };

  return (
    <CreateCreditCardModal
      {...rest}
      open={modal.visible}
      onOpenChange={open => !open && modal.remove()}
      onSuccess={handleSuccess}
    />
  );
});

export function useCreateCreditCardModal() {
  const show = async (props: CreateCreditCardModalProps = {}) => {
    await NiceModal.show(CreateCreditCardNiceModal, props);
  };

  return { show };
}
