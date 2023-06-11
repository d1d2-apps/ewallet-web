import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import { Button, Dialog, DialogProps } from '@/components/elements';

import * as S from './CreateBillModal.styles';
import { CreateBillModalStepOne } from './CreateBillModalStepOne/CreateBillModalStepOne';

export interface CreateBillModalProps {
  onSuccess?: () => void | Promise<void>;
}

export function CreateBillModal({ onSuccess, ...rest }: CreateBillModalProps & DialogProps) {
  return (
    <Dialog.Root {...rest}>
      <Dialog.Header title="Lançamento de fatura" />

      <Dialog.Body asChild>
        <CreateBillModalStepOne />
      </Dialog.Body>

      <S.Footer>
        <Dialog.FooterCloseButton />

        <div>
          <Button size="sm" leftIcon={FiArrowLeft} colorScheme="white">
            Voltar
          </Button>

          <Button type="submit" size="sm" rightIcon={FiArrowRight}>
            Avançar
          </Button>
        </div>
      </S.Footer>
    </Dialog.Root>
  );
}
