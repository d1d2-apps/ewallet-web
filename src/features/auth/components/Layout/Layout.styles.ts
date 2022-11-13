import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface TabProps {
  $isActive?: boolean;
}

export const Container = styled.div`
  min-height: 100vh;
  background-color: white;
  padding-bottom: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  header {
    width: 100%;
    padding: 1rem 1rem;

    ${({ theme }) =>
      theme.mixins.screen.md(css`
        padding: 1rem 5rem;
      `)}

    a {
      display: flex;
      align-items: center;
      gap: 1rem;

      img {
        max-width: 2.5rem;
      }

      h1 {
        font-family: ${({ theme }) => theme.fontFamilies.montserrat};
        font-size: ${({ theme }) => theme.fontSizes['2xl']};
      }
    }
  }

  main {
    flex: 1;
    max-width: 1200px;
    width: 100%;
    padding: 0 1.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    ${({ theme }) =>
      theme.mixins.screen.md(css`
        flex-direction: row;
        gap: 5rem;
      `)}
  }
`;

export const ImageSection = styled.section`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  ${({ theme }) =>
    theme.mixins.screen.md(css`
      gap: 3rem;
    `)}

  h2 {
    font-family: ${({ theme }) => theme.fontFamilies.montserrat};
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: 900;
    text-align: center;
    color: ${({ theme }) => theme.colors.secondary[500]};
    margin: 0;

    ${({ theme }) =>
      theme.mixins.screen.md(css`
        font-size: ${theme.fontSizes['2xl']};
      `)}
  }

  img {
    max-width: 25rem;
    width: 100%;
    display: block;
    object-fit: contain;
  }

  p {
    max-width: 40rem;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.gray[500]};
    text-align: center;
    line-height: 1.5;

    ${({ theme }) =>
      theme.mixins.screen.md(css`
        font-size: ${theme.fontSizes.md};
      `)}
  }
`;

export const FormSection = styled.section`
  max-width: 30rem;
  width: 100%;
  padding: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 1rem;
`;

export const Tabs = styled.div`
  width: 100%;
  padding: 0 2rem;
  margin-bottom: 2rem;

  display: flex;
`;

export const Tab = styled(Link)<TabProps>`
  flex: 1;
  padding: 0 0 1rem;
  border-bottom: 2px solid transparent;

  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray[400]};
  text-align: center;
  text-transform: uppercase;

  transition: all 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary[500]};
    border-bottom-color: ${({ theme }) => theme.colors.gray[500]};
  }

  ${({ theme, $isActive }) =>
    $isActive &&
    css`
      border-bottom-color: ${theme.colors.primary[500]};
      color: ${theme.colors.secondary[500]};
      pointer-events: none;
    `}
`;
