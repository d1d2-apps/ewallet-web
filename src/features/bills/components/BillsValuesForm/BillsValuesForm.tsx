import React, { useImperativeHandle } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Select } from '@/components/elements';
import { ControlledCurrencyInput, ControlledSelect, ControlledTextArea, ControlledTextInput } from '@/components/forms';
import { CreditCardsAutocomplete } from '@/features/creditCards';

import * as S from './BillsValuesForm.styles';

interface FormData {
  creditCard: string;
  totalAmount: string;
  month: string;
  year: string;
  description: string;
}

export interface BillsValuesFormRef {
  submit: () => Promise<void>;
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
    year: yup.number().required('Ano é obrigatório'),
    month: yup.number().required('Mês é obrigatório'),
    description: yup.string().required('Descrição é obrigatória')
  })
  .required();

export const BillsValuesForm = React.forwardRef<BillsValuesFormRef>((_, ref) => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      creditCard: '',
      totalAmount: '',
      year: String(now.getFullYear()),
      month: String(now.getMonth() + 1),
      description: ''
    }
  });

  const handleNextStepClick = (data: FormData) => {
    console.log(data);
  };

  useImperativeHandle(ref, () => ({
    submit: () => handleSubmit(handleNextStepClick)()
  }));

  return (
    <S.Container noValidate>
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

      <ControlledCurrencyInput name="totalAmount" control={control} label="Valor (R$)" placeholder="Ex.: R$ 100,00" />

      <ControlledTextInput name="year" control={control} type="number" label="Ano" placeholder="Ano..." />

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

      <ControlledTextArea
        name="description"
        control={control}
        label="Descrição"
        placeholder="Ex.: Notebook Samsung"
        style={{ minHeight: '8rem', maxHeight: '8rem', resize: 'none' }}
      />
    </S.Container>
  );
});
