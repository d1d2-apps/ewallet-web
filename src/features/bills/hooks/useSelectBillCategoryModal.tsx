import NiceModal, { useModal } from '@ebay/nice-modal-react';

import {
  SelectBillCategoryModal,
  SelectBillCategoryModalProps
} from '../components/SelectBillCategoryModal/SelectBillCategoryModal';

const SelectBillCategoryNiceModal = NiceModal.create<SelectBillCategoryModalProps>(({ onSelect, ...rest }) => {
  const modal = useModal();

  const handleSuccess = async () => {
    modal.remove();

    if (onSelect) {
      onSelect();
    }
  };

  return (
    <SelectBillCategoryModal
      {...rest}
      open={modal.visible}
      onOpenChange={open => !open && modal.remove()}
      onSelect={handleSuccess}
    />
  );
});

export function useSelectBillCategoryModal() {
  const show = async (props: SelectBillCategoryModalProps) => {
    await NiceModal.show(SelectBillCategoryNiceModal, props);
  };

  return { show };
}
