import styled, { css } from 'styled-components';

export const Container = styled.form`
  height: 100%;
  padding: 1.5rem;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  .row {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    ${({ theme }) =>
      theme.mixins.screen.md(css`
        flex-direction: row;
      `)}

    label {
      flex: 1;
    }
  }
`;

export const CreditCardField = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span {
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: 500;
  }
`;

export const ErrorMessage = styled.small`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.error};
`;
