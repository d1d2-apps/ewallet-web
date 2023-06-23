import React, { useImperativeHandle } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { BillCategory, BillCategoryIcon, BillCategoryLabel } from '../../types';
import * as S from './BillCategoryForm.styles';

export interface BillCategoryFormData {
  category: BillCategory | '';
}

export interface BillCategoryFormRef {
  submit: (onSuccess: (formData: BillCategoryFormData) => void) => Promise<void>;
}

const validationSchema = yup
  .object({
    category: yup.string().required('Categoria é obrigatória')
  })
  .required();

export const BillCategoryForm = React.forwardRef<BillCategoryFormRef>((_, ref) => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<BillCategoryFormData>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      category: ''
    }
  });

  useImperativeHandle(ref, () => ({
    submit: onSuccess => handleSubmit(formData => onSuccess(formData))()
  }));

  return (
    <Controller
      control={control}
      name="category"
      render={({ field: { name, onChange, value } }) => (
        <S.Container>
          <main>
            {Object.keys(BillCategoryLabel).map(categoryKey => {
              const CategoryIcon = BillCategoryIcon[categoryKey as BillCategory];

              return (
                <S.CategoryCard
                  key={categoryKey}
                  $selected={categoryKey === value}
                  onClick={() => onChange(categoryKey)}
                >
                  <CategoryIcon size="1.5rem" weight={categoryKey === value ? 'duotone' : 'regular'} />
                  {BillCategoryLabel[categoryKey as BillCategory]}

                  <input type="radio" name={name} value={categoryKey} hidden />
                </S.CategoryCard>
              );
            })}
          </main>

          {!!errors.category?.message && <S.ErrorMessage>{errors.category.message}</S.ErrorMessage>}
        </S.Container>
      )}
    />
  );
});
