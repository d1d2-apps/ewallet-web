import styled from 'styled-components';

export const TableContainer = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.75rem;

  td {
    padding: 1rem;
  }
`;

export const TableHeadContainer = styled.thead`
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-sm);
  font-weight: 500;
  text-align: left;
  color: var(--gray-400);

  th {
    padding: 0 1rem;
  }
`;

export const TableBodyContainer = styled.tbody`
  tr {
    padding: 0.25rem 0;
    border-radius: var(--rounded-md);
    vertical-align: middle;
    box-shadow: var(--shadow-sm);

    td {
      background-color: white;

      &:first-child {
        border-top-left-radius: var(--rounded-lg);
        border-bottom-left-radius: var(--rounded-lg);
      }

      &:last-child {
        border-top-right-radius: var(--rounded-lg);
        border-bottom-right-radius: var(--rounded-lg);
      }
    }
  }
`;
