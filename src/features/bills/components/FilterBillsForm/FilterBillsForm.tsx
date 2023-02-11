import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiFilter } from 'react-icons/fi';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button, Popover, Select } from '@/components/elements';
import { ControlledSelect, ControlledTextInput } from '@/components/forms';
import { useCreditCards } from '@/features/creditCards/api/getCreditCards';
import { CreditCard } from '@/features/creditCards/types';

import { GetBillsDTO } from '../../api/getBills';
import * as S from './FilterBillsForm.styles';

type FormData = Pick<GetBillsDTO['data'], 'creditCard'> & {
  month: string;
  year: string;
};

interface FilterBillsForm {
  onFilterApply: (filter: GetBillsDTO['data']) => void;
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

const validationSchema = yup
  .object({
    creditCard: yup.string(),
    month: yup
      .number()
      .required('Mês é obrigatório')
      .oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 'Mês precisa ser entre janeiro e dezembro'),
    year: yup.string().length(4, 'Ano precisa ter 4 dígitos')
  })
  .required();

export function FilterBillsForm({ onFilterApply }: FilterBillsForm) {
  const filterPopoverRef = useRef<HTMLButtonElement>(null);

  const creditCardsQuery = useCreditCards();

  const { control, handleSubmit, watch, setValue } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      creditCard: 'all',
      month: String(new Date().getMonth() + 1),
      year: String(new Date().getFullYear())
    }
  });

  const creditCardWathcer = watch('creditCard');
  const yearWathcer = watch('year');
  const monthWathcer = watch('month');

  const [selectedMonth, setSelectedMonth] = useState<typeof MONTHS[0]>();
  const [selectedCreditCard, setSelectedCreditCard] = useState<CreditCard | null>(null);

  const handleFilterBills = (formData: FormData) => {
    onFilterApply({
      creditCard: formData.creditCard,
      month: Number(formData.month),
      year: Number(formData.year)
    });

    filterPopoverRef.current?.click();
  };

  useEffect(() => {
    let yearValue = yearWathcer.replace(/\D/, '');

    if (yearValue.length > 4) {
      yearValue = yearValue.substring(0, 4);
    }

    setValue('year', yearValue);
  }, [setValue, yearWathcer]);

  useEffect(() => {
    const month = MONTHS.find(m => m.value === monthWathcer);
    setSelectedMonth(month);
  }, [monthWathcer]);

  useEffect(() => {
    if (creditCardWathcer === 'all') {
      setSelectedCreditCard(null);
    } else if (creditCardsQuery.data?.length) {
      const creditCard = creditCardsQuery.data.find(cc => cc.id === creditCardWathcer);
      setSelectedCreditCard(creditCard || null);
    }
  }, [creditCardWathcer, creditCardsQuery.data]);

  return (
    <S.Container>
      <aside>
        <div>
          <small>Cartão de crédito</small>
          <strong>{selectedCreditCard?.name || 'Todos'}</strong>
        </div>

        <div>
          <small>Ano</small>
          <strong>{yearWathcer}</strong>
        </div>

        <div>
          <small>Mês</small>
          <strong>{selectedMonth?.name}</strong>
        </div>
      </aside>

      <Popover.Root>
        <Popover.Trigger asChild>
          <Button colorScheme="white" isRounded ref={filterPopoverRef}>
            <FiFilter />
          </Button>
        </Popover.Trigger>

        <Popover.Content>
          <S.Form onSubmit={handleSubmit(handleFilterBills)}>
            <ControlledSelect name="creditCard" control={control} label="Cartão de crédito">
              <Select.Group>
                <Select.GroupLabel>Cartão de crédito</Select.GroupLabel>

                <Select.Item value="all">Todos</Select.Item>

                {!!creditCardsQuery.data?.length &&
                  creditCardsQuery.data.map(creditCard => (
                    <Select.Item key={creditCard.id} value={creditCard.id}>
                      {creditCard.name}
                    </Select.Item>
                  ))}
              </Select.Group>
            </ControlledSelect>

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

            <ControlledTextInput name="year" control={control} label="Ano" placeholder="Ano..." type="number" />

            <Button type="submit" size="sm">
              Aplicar filtro
            </Button>
          </S.Form>
        </Popover.Content>
      </Popover.Root>
    </S.Container>
  );
}
