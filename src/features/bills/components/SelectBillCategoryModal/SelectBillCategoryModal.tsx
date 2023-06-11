import { useState } from 'react';

import { Dialog, DialogProps } from '@/components/elements';

import { BillCategory, BillCategoryIcon, BillCategoryLabel } from '../../types';
import * as S from './SelectBillCategoryModal.styles';

export interface SelectBillCategoryModalProps {
  onSelect: (category: BillCategory) => Promise<void>;
}

export function SelectBillCategoryModal({ onSelect, ...rest }: SelectBillCategoryModalProps & DialogProps) {
  const [selectedCategory, setSelectedCategory] = useState<BillCategory | null>(null);

  const handleSubmitSelectedCategory = () => {
    if (selectedCategory) {
      onSelect(selectedCategory);
    }
  };

  return (
    <Dialog.Root {...rest}>
      <Dialog.Header title="Selecione a categoria da fatura" />

      <Dialog.Body asChild>
        <S.CategoryCardsWrapper>
          {Object.keys(BillCategoryLabel).map(categoryKey => {
            const CategoryIcon = BillCategoryIcon[categoryKey as BillCategory];

            return (
              <S.CategoryCard
                key={categoryKey}
                $selected={categoryKey === selectedCategory}
                onClick={() => setSelectedCategory(categoryKey as BillCategory)}
              >
                <CategoryIcon size="1.5rem" weight={categoryKey === selectedCategory ? 'duotone' : 'regular'} />
                {BillCategoryLabel[categoryKey as BillCategory]}
              </S.CategoryCard>
            );
          })}
        </S.CategoryCardsWrapper>
      </Dialog.Body>

      <Dialog.Footer
        primaryButtonOptions={{
          type: 'submit',
          title: 'Selecionar',
          onClick: handleSubmitSelectedCategory,
          disabled: !selectedCategory
        }}
      />
    </Dialog.Root>
  );
}
