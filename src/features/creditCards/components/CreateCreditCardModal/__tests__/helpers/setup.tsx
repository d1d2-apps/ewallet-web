import { AppProvider } from '@/providers/app';
import { rtlRender, userEvent } from '@/test/test-utils';

import { CreateCreditCardModal, CreateCreditCardModalProps } from '../../CreateCreditCardModal';

const inputsLabels = {
  name: 'Nome'
};

export const setupCreateCardModalTestUtils = (modifiers?: CreateCreditCardModalProps) => {
  const utils = rtlRender(<CreateCreditCardModal open {...modifiers} />, {
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
