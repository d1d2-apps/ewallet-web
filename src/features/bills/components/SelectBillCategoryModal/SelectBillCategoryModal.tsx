import { useState } from 'react';
import { FiX } from 'react-icons/fi';

import * as DialogPrimitive from '@radix-ui/react-dialog';

import { Button } from '@/components/elements';

import { BillCategory, BillCategoryIcon, BillCategoryLabel } from '../../types';
import * as S from './SelectBillCategoryModal.styles';

export interface SelectBillCategoryModalProps {
  onSelect: () => void;
}

export function SelectBillCategoryModal({
  onSelect,
  ...rest
}: SelectBillCategoryModalProps & DialogPrimitive.DialogProps) {
  const [selectedCategory, setSelectedCategory] = useState<BillCategory | null>(null);

  return (
    <DialogPrimitive.Root {...rest}>
      <DialogPrimitive.Portal>
        <S.Overlay />

        <S.Content>
          <header>
            <S.Title>Selecione a categoria da fatura</S.Title>

            <DialogPrimitive.Close asChild>
              <Button size="xs" colorScheme="neutral" isRounded>
                <FiX />
              </Button>
            </DialogPrimitive.Close>
          </header>

          <main>
            {Object.keys(BillCategoryLabel).map(categoryKey => {
              const CategoryIcon = BillCategoryIcon[categoryKey as BillCategory];

              return (
                <S.CategoryCard
                  key={categoryKey}
                  $selected={categoryKey === selectedCategory}
                  onClick={() => setSelectedCategory(categoryKey as BillCategory)}
                >
                  <CategoryIcon size={24} weight={categoryKey === selectedCategory ? 'duotone' : 'regular'} />
                  {BillCategoryLabel[categoryKey as BillCategory]}
                </S.CategoryCard>
              );
            })}
          </main>

          <footer>
            <DialogPrimitive.Close asChild>
              <Button colorScheme="white" size="sm">
                Fechar
              </Button>
            </DialogPrimitive.Close>

            <Button type="submit" size="sm" disabled={!selectedCategory} onClick={onSelect}>
              Selecionar
            </Button>
          </footer>
        </S.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
