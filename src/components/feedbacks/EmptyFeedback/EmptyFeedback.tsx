import * as S from './EmptyFeedback.styles';

interface EmptyFeedbackProps {
  title: string;
  description: string;
  image: string;
}

export function EmptyFeedback({ title, description, image }: EmptyFeedbackProps) {
  return (
    <S.Container>
      <img src={image} alt="" />
      <h2>{title}</h2>
      <p>{description}</p>
    </S.Container>
  );
}
