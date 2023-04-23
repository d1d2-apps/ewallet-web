import { KeyboardEvent, useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FiArrowLeft, FiArrowRight, FiFile, FiX } from 'react-icons/fi';

import { yupResolver } from '@hookform/resolvers/yup';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as yup from 'yup';

import { Button, Select } from '@/components/elements';
import { ControlledCurrencyInput, ControlledSelect, ControlledTextArea, ControlledTextInput } from '@/components/forms';
import { CreditCardsAutocomplete } from '@/features/creditCards';

import { BillCategory } from '../../types';
import { billCategoryIcon } from '../../utils/billCategoryIcon';
import { billCategoryLabel } from '../../utils/billCategoryLabel';
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
  category: BillCategory;
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

const validationSchema = yup
  .object({
    creditCard: yup.string().required('Cartão de crédito é obrigatório'),
    month: yup.number().required('Mês é obrigatório'),
    year: yup.number().required('Ano é obrigatório'),
    totalAmount: yup.string().test(`min-value`, function (value) {
      const { path, createError } = this;
      const parsedValue = Number((value || '').replace(',', '.'));

      if (parsedValue > 0) {
        return true;
      }

      return createError({
        path,
        message: 'Valor precisa ser maior que R$ 0,00'
      });
    }),
    totalOfInstallments: yup.number().required('Quantidade de parcelas é obrigatório'),
    description: yup.string().required('Descrição é obrigatória'),
    category: yup.string().required('Categoria é obrigatória')
  })
  .required();

export function CreateBillModal({ onSuccess, ...rest }: CreateBillModalProps & DialogPrimitive.DialogProps) {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      creditCard: '',
      month: String(now.getMonth() + 1),
      year: String(now.getFullYear()),
      totalAmount: '',
      totalOfInstallments: '1',
      description: '',
      category: 'HOUSE'
    }
  });

  const categoryWatcher = watch('category');

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
                    <CreditCardsAutocomplete
                      hasError={!!errors.creditCard?.message}
                      onChange={creditCard => onChange(creditCard.id)}
                    />
                    {!!errors.creditCard?.message && <S.ErrorMessage>{errors.creditCard.message}</S.ErrorMessage>}
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

              <div className="row">
                <ControlledTextInput
                  name="totalOfInstallments"
                  control={control}
                  type="number"
                  label="Quantidade de parcelas"
                  placeholder="Ex.: 10"
                  icon={FiFile}
                  onKeyDown={handleTotalOfInstallmentsInputKeyDown}
                />

                <ControlledSelect
                  name="category"
                  control={control}
                  label="Categoria"
                  icon={billCategoryIcon[categoryWatcher]}
                >
                  <Select.Group>
                    <Select.GroupLabel>Categoria</Select.GroupLabel>

                    {Object.entries(billCategoryLabel).map(([category, label]) => (
                      <Select.Item key={category} value={category}>
                        {label}
                      </Select.Item>
                    ))}
                  </Select.Group>
                </ControlledSelect>
              </div>

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
