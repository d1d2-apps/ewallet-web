import styled from 'styled-components';

export const BaseContainer = styled.div`
  width: 100%;
  height: 3rem;
  padding-left: 1rem;
  background-color: ${({ theme }) => theme.colors.gray[50]};
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 0.5rem;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: 0.75rem;

  --icon-color: ${({ theme }) => theme.colors.gray[300]};

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[100]};
  }

  &:focus-within {
    background-color: white;
    border-color: ${({ theme }) => theme.colors.primary[500]};
    box-shadow: ${({ theme }) => theme.rings.primary};

    --icon-color: ${({ theme }) => theme.colors.primary[500]};
  }
`;

export const IconContainer = styled.span`
  font-size: 1.25rem;
  color: var(--icon-color);
  transition: all 0.2s;

  display: flex;
  align-items: center;
`;

export const InputContainer = styled.input`
  flex: 1;

  height: 100%;
  background-color: transparent;
  padding-right: 1rem;
  border: none;
  color: ${({ theme }) => theme.colors.secondary[500]};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[300]};
  }
`;
