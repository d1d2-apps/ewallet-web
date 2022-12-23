import { opacify } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 20rem;
    max-height: 20rem;
    object-fit: contain;
  }

  h2 {
    margin-top: 2rem;
    font-family: ${({ theme }) => theme.fontFamily.montserrat};
    font-size: ${({ theme }) => theme.fontSize.xl};
    color: ${({ theme }) => opacify(-0.4, theme.colors.neutral)};
    text-align: center;
  }

  p {
    margin-top: 0.5rem;
    font-size: ${({ theme }) => theme.fontSize.md};
    color: ${({ theme }) => opacify(-0.6, theme.colors.neutral)};
    text-align: center;
  }
`;
