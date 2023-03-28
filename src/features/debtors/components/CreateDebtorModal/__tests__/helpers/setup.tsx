import { AppProvider } from '@/providers/app';
import { render, userEvent } from '@/test/test-utils';

import { CreateDebtorModal, CreateDebtorModalProps } from '../../CreateDebtorModal';

const inputsLabels = {
  name: 'Nome',
  color: 'Cor'
};

export const setupCreateDebtorModalTestUtils = async (modifiers?: CreateDebtorModalProps) => {
  const utils = await render(<CreateDebtorModal open {...modifiers} />, {
    wrapper: AppProvider
  });

  const changeInput = (
    inputName: keyof typeof inputsLabels,
    value: string,
    options: Parameters<typeof userEvent.type>[2] = {}
  ) => {
    return userEvent.type(utils.getByLabelText(inputsLabels[inputName]), value, options);
  };

  const clickSubmit = () => userEvent.click(utils.getByText('Salvar'));

  return {
    ...utils,
    changeInput,
    clickSubmit
  };
};
