import { FiArrowLeft, FiArrowRight, FiX } from 'react-icons/fi';

import * as DialogPrimitive from '@radix-ui/react-dialog';

import { Button } from '@/components/elements';
import { CreditCardsAutocomplete } from '@/features/creditCards';

import * as S from './CreateBillModal.styles';

export interface CreateBillModalProps {
  onSuccess?: () => void | Promise<void>;
}

export function CreateBillModal({ onSuccess, ...rest }: CreateBillModalProps & DialogPrimitive.DialogProps) {
  return (
    <DialogPrimitive.Root {...rest}>
      <DialogPrimitive.Portal>
        <S.Overlay />

        <S.Content>
          <header>
            <S.Title>Lançamento de fatura</S.Title>

            <DialogPrimitive.Close asChild>
              <Button size="xs" colorScheme="neutral" isRounded>
                <FiX />
              </Button>
            </DialogPrimitive.Close>
          </header>

          <main>
            <h1>Lançamento de fatura</h1>

            <CreditCardsAutocomplete onChange={() => {}} />
          </main>

          <footer>
            <DialogPrimitive.Close asChild>
              <Button colorScheme="white" size="sm">
                Fechar
              </Button>
            </DialogPrimitive.Close>

            <div>
              <Button size="sm" leftIcon={FiArrowLeft} colorScheme="white">
                Voltar
              </Button>

              <Button size="sm" rightIcon={FiArrowRight}>
                Avançar
              </Button>
            </div>
          </footer>
        </S.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
