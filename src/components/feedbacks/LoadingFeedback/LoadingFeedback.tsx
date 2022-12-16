import { Spinner } from '@/components/elements';
import * as S from './LoadingFeedback.styles';

interface LoadingFeedbackProps {
  title?: string;
}

export function LoadingFeedback({ title }: LoadingFeedbackProps) {
  return (
    <S.Container>
      <Spinner size="2xl" />
      {!!title && <h2>{title}</h2>}
    </S.Container>
  );
}
