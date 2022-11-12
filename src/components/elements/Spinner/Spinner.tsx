import { FiLoader } from 'react-icons/fi';

import * as S from './Spinner.styles';

interface SpinnerProps {
  size?: S.SpinnerSize;
}

export function Spinner({ size = 'md' }: SpinnerProps) {
  return (
    <S.Container size={size}>
      <FiLoader />
    </S.Container>
  );
}
