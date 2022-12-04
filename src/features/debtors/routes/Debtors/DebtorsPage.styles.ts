import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 3rem;

  & > header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    & > div {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  }
`;
