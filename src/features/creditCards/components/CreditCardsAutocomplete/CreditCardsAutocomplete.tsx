import { Fragment, useState } from 'react';
import { FiAlertTriangle, FiCheck, FiChevronDown, FiCreditCard } from 'react-icons/fi';

import { Combobox, Transition } from '@headlessui/react';

import { Spinner, TextInput } from '@/components/elements';

import { useCreditCards } from '../../api/getCreditCards';
import { CreditCard } from '../../types';
import * as S from './CreditCardsAutocomplete.styles';

interface CreditCardsAutocompleteProps {
  onChange: (creditCard: CreditCard) => void;
  placeholder?: string;
  hasError?: boolean;
}

export function CreditCardsAutocomplete({
  onChange,
  placeholder = 'Selecione um cartão de crédito',
  hasError = false
}: CreditCardsAutocompleteProps) {
  const creditCardsQuery = useCreditCards();

  const [selectedCreditCard, setSelectedCreditCard] = useState<CreditCard | null>(null);
  const [query, setQuery] = useState('');

  const filteredCreditCards =
    query.length && creditCardsQuery.data?.length
      ? creditCardsQuery.data.filter(creditCard => {
          return creditCard.name.toLowerCase().includes(query.toLowerCase());
        })
      : creditCardsQuery.data || [];

  const handleOnChange = (creditCard: CreditCard) => {
    setSelectedCreditCard(creditCard);
    onChange(creditCard);
  };

  if (creditCardsQuery.isLoading || creditCardsQuery.isFetching) {
    return (
      <TextInput.Root>
        <TextInput.Icon>
          <Spinner />
        </TextInput.Icon>

        <TextInput.Input placeholder="Carregando cartões de crédito..." disabled />
      </TextInput.Root>
    );
  }

  if (creditCardsQuery.isError) {
    return (
      <TextInput.Root>
        <TextInput.Icon>
          <FiAlertTriangle />
        </TextInput.Icon>

        <TextInput.Input placeholder="Erro ao carregar cartões de crédito" disabled />
      </TextInput.Root>
    );
  }

  return (
    <Combobox value={selectedCreditCard} onChange={handleOnChange}>
      <S.AutocompleteWrapper>
        <TextInput.Root hasError={hasError}>
          <TextInput.Icon>
            <FiCreditCard />
          </TextInput.Icon>

          <Combobox.Input
            placeholder={placeholder}
            displayValue={(creditCard: CreditCard) => creditCard?.name}
            onChange={event => setQuery(event.target.value)}
          />

          <S.ComboboxButton>
            <FiChevronDown />
          </S.ComboboxButton>
        </TextInput.Root>

        <Transition as={Fragment} afterLeave={() => setQuery('')}>
          <S.ComboboxOptions>
            {!filteredCreditCards.length && query !== '' ? (
              <li>Nada encontrado</li>
            ) : (
              filteredCreditCards.map(creditCard => (
                <Combobox.Option key={creditCard.id} value={creditCard}>
                  {({ selected }) => (
                    <>
                      <span>{creditCard.name}</span>

                      {!!selected && (
                        <S.ComboboxOptionIndicator>
                          <FiCheck />
                        </S.ComboboxOptionIndicator>
                      )}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </S.ComboboxOptions>
        </Transition>
      </S.AutocompleteWrapper>
    </Combobox>
  );
}
