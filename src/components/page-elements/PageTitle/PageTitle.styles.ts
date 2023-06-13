import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: flex-end;
  gap: 1.5rem;

  & > main {
    flex: 1;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;
