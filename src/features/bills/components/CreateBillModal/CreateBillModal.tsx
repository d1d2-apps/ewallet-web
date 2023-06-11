import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import { Button, Modal, ModalProps } from '@/components/elements';

import * as S from './CreateBillModal.styles';
import { CreateBillModalStepOne } from './CreateBillModalStepOne/CreateBillModalStepOne';

export interface CreateBillModalProps {
  onSuccess?: () => void | Promise<void>;
}

export function CreateBillModal({ onSuccess, ...rest }: CreateBillModalProps & ModalProps) {
  return (
    <Modal.Root {...rest}>
      <Modal.Header title="Lançamento de fatura" />

      <Modal.Body asChild>
        <CreateBillModalStepOne />
      </Modal.Body>

      <S.Footer>
        <Modal.FooterCloseButton />

        <div>
          <Button size="sm" leftIcon={FiArrowLeft} colorScheme="white">
            Voltar
          </Button>

          <Button type="submit" size="sm" rightIcon={FiArrowRight}>
            Avançar
          </Button>
        </div>
      </S.Footer>
    </Modal.Root>
  );
}
