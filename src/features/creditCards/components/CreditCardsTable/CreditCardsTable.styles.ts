import styled from 'styled-components';

export const ActionsTableCell = styled.td.attrs({
  align: 'right'
})`
  & > div {
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
  }
`;
