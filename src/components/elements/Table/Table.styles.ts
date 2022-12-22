import { opacify } from 'polished';
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
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 500;
  text-align: left;
  color: ${({ theme }) => opacify(-0.5, theme.colors.neutral)};

  th {
    padding: 0 1rem;
  }
`;

export const TableBodyContainer = styled.tbody`
  tr {
    padding: 0.25rem 0;
    border-radius: ${({ theme }) => theme.rounded.lg};
    vertical-align: middle;
    box-shadow: ${({ theme }) => theme.shadow.sm};

    td {
      background-color: ${({ theme }) => theme.colors.backgroundOffset};

      &:first-child {
        border-top-left-radius: ${({ theme }) => theme.rounded.lg};
        border-bottom-left-radius: ${({ theme }) => theme.rounded.lg};
      }

      &:last-child {
        border-top-right-radius: ${({ theme }) => theme.rounded.lg};
        border-bottom-right-radius: ${({ theme }) => theme.rounded.lg};
      }
    }
  }
`;
