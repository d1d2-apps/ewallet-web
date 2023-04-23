import { opacify } from 'polished';
import styled from 'styled-components';

export const NeutralTableCell = styled.td`
  color: ${({ theme }) => opacify(-0.5, theme.colors.neutral)};
  text-align: center;
`;

export const ActionsTableCell = styled.td`
  & > div {
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
  }
`;
