import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  & > main {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;
