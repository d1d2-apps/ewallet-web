import CurrencyInputField, { CurrencyInputProps } from 'react-currency-input-field';

export function CurrencyInput({
  decimalScale = 2,
  decimalsLimit = 2,
  intlConfig = { locale: 'pt-BR', currency: 'BRL' },
  ...rest
}: CurrencyInputProps) {
  return (
    <CurrencyInputField decimalScale={decimalScale} decimalsLimit={decimalsLimit} intlConfig={intlConfig} {...rest} />
  );
}
