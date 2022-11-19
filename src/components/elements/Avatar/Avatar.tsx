import personPlaceholderImg from '@/assets/images/person-placeholder.png';

import * as S from './Avatar.styles';

interface AvatarProps {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  source?: string;
}

export function Avatar({ size = 'md', source }: AvatarProps) {
  return (
    <S.Container size={size}>
      <img src={source || personPlaceholderImg} alt="Foto de perfil" />
    </S.Container>
  );
}
