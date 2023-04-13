import { KeyboardEvent, useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FiArrowLeft, FiArrowRight, FiFile, FiX } from 'react-icons/fi';

import * as DialogPrimitive from '@radix-ui/react-dialog';

import { Button, Select } from '@/components/elements';
import { ControlledCurrencyInput, ControlledSelect, ControlledTextArea, ControlledTextInput } from '@/components/forms';
import { CreditCardsAutocomplete } from '@/features/creditCards';

import * as S from './CreateBillModal.styles';

export interface CreateBillModalProps {
  onSuccess?: () => void | Promise<void>;
}

interface FormData {
  creditCard: string;
  month: string;
  year: string;
  totalAmount: string;
  totalOfInstallments: string;
  description: string;
}

const MONTHS = [
  { value: '1', name: 'Janeiro' },
  { value: '2', name: 'Fevereiro' },
  { value: '3', name: 'Março' },
  { value: '4', name: 'Abril' },
  { value: '5', name: 'Maio' },
  { value: '6', name: 'Junho' },
  { value: '7', name: 'Julho' },
  { value: '8', name: 'Agosto' },
  { value: '9', name: 'Setembro' },
  { value: '10', name: 'Outubro' },
  { value: '11', name: 'Novembro' },
  { value: '12', name: 'Dezembro' }
];

const now = new Date();

export function CreateBillModal({ onSuccess, ...rest }: CreateBillModalProps & DialogPrimitive.DialogProps) {
  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      creditCard: '',
      month: String(now.getMonth() + 1),
      year: String(now.getFullYear()),
      totalAmount: '',
      totalOfInstallments: '1',
      description: ''
    }
  });

  const handleNextStepClick = (data: FormData) => {
    console.log(data);
  };

  const handleTotalOfInstallmentsInputKeyDown = useCallback((event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === '.' || event.key === ',') {
      event.preventDefault();
    }
  }, []);

  return (
    <DialogPrimitive.Root {...rest}>
      <DialogPrimitive.Portal>
        <S.Overlay />

        <S.Content asChild>
          <form onSubmit={handleSubmit(handleNextStepClick)} noValidate>
            <header>
              <S.Title>Lançamento de fatura</S.Title>

              <DialogPrimitive.Close asChild>
                <Button size="xs" colorScheme="neutral" isRounded>
                  <FiX />
                </Button>
              </DialogPrimitive.Close>
            </header>

            <main>
              <Controller
                name="creditCard"
                control={control}
                render={({ field: { onChange } }) => (
                  <S.CreditCardField>
                    <span>Cartão de crédito</span>
                    <CreditCardsAutocomplete onChange={creditCard => onChange(creditCard.id)} />
                  </S.CreditCardField>
                )}
              />

              <div className="row">
                <ControlledSelect name="month" control={control} label="Mês">
                  <Select.Group>
                    <Select.GroupLabel>Mês</Select.GroupLabel>

                    {MONTHS.map(month => (
                      <Select.Item key={month.value} value={month.value}>
                        {month.name}
                      </Select.Item>
                    ))}
                  </Select.Group>
                </ControlledSelect>

                <ControlledTextInput name="year" control={control} type="number" label="Ano" placeholder="Ano..." />
              </div>

              <ControlledCurrencyInput
                name="totalAmount"
                control={control}
                label="Valor (R$)"
                placeholder="Ex.: R$ 100,00"
              />

              <ControlledTextInput
                name="totalOfInstallments"
                control={control}
                type="number"
                label="Quantidade de parcelas"
                placeholder="Ex.: 10"
                icon={FiFile}
                onKeyDown={handleTotalOfInstallmentsInputKeyDown}
              />

              <ControlledTextArea
                name="description"
                control={control}
                label="Descrição"
                placeholder="Ex.: Notebook Samsung"
              />
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

                <Button type="submit" size="sm" rightIcon={FiArrowRight}>
                  Avançar
                </Button>
              </div>
            </footer>
          </form>
        </S.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
