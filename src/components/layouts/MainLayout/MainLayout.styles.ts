import styled, { css } from 'styled-components';

interface SideMenuProps {
  $collapsed: boolean;
}

interface NavItemProps {
  $active?: boolean;
  $collapsed: boolean;
}

interface LoggedUserProps {
  $active: boolean;
  $collapsed: boolean;
}

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  position: relative;
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 4.5rem;
  padding-left: 0;
  overflow-y: auto;

  ${({ theme }) =>
    theme.mixins.screen.md(css`
      padding-top: 0;
      padding-left: 4.5rem;
    `)}

  & > div {
    width: 100%;
    height: 100%;
    padding: 1rem;

    ${({ theme }) =>
      theme.mixins.screen.md(css`
        padding: 2rem 3rem;
      `)}
  }
`;

export const SideMenu = styled.nav<SideMenuProps>`
  width: 100%;
  height: ${({ $collapsed }) => ($collapsed ? '4rem' : '100%')};
  padding: 1rem 0.5rem;
  background-color: white;
  transition: all 0.5s;
  box-shadow: var(--shadow-md);
  z-index: 1;

  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;

  ${({ theme, $collapsed }) =>
    theme.mixins.screen.md(css`
      width: ${$collapsed ? '4.5rem' : '100%'};
      max-width: 20rem;
      height: 100%;
      padding: 1.5rem 0.5rem;
      border-top-right-radius: var(--rounded-lg);
      border-bottom-right-radius: var(--rounded-lg);
      box-shadow: ${$collapsed ? 'var(--shadow-xl)' : 'var(--shadow-2xl)'};
    `)}

  header {
    padding: 0 0.75rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;

    & > div {
      pointer-events: none;

      display: flex;
      align-items: center;
      gap: 1.5rem;

      img {
        max-width: 2rem;
        width: 100%;
      }

      h1 {
        font-family: var(--font-family-montserrat);
        font-size: var(--font-size-lg);
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;

        display: block;

        ${({ theme, $collapsed }) =>
          theme.mixins.screen.md(css`
            display: ${$collapsed ? 'none' : 'block'};
          `)}
      }
    }
  }

  ul {
    width: 100%;
    margin-top: 2rem;
    display: ${({ $collapsed }) => ($collapsed ? 'none' : 'block')};

    ${({ theme }) =>
      theme.mixins.screen.md(css`
        display: block;
      `)}
  }
`;

export const CollapseButton = styled.button`
  width: 2rem;
  height: 2rem;
  background-color: white;
  border: none;
  border-radius: var(--rounded-full);
  transform: rotate(270deg);
  transition: all 0.2s;

  font-size: var(--font-size-lg);
  color: ${({ theme }) => theme.colors.gray[500]};

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    box-shadow: var(--shadow-md);
  }

  ${({ theme }) =>
    theme.mixins.screen.md(css`
      width: 1.5rem;
      height: 1.5rem;
      box-shadow: var(--shadow-sm);
      transform: rotate(0deg);

      font-size: var(--font-size-sm);

      position: absolute;
      top: 1rem;
      right: -0.5rem;
    `)}
`;

export const NavItem = styled.li<NavItemProps>`
  width: 100%;
  height: 3.5rem;

  a {
    width: 100%;
    height: 100%;
    padding: 1rem;
    border-radius: var(--rounded-sm);
    transition: all 0.2s;

    font-size: var(--font-size-xl);
    color: var(--gray-400);

    display: flex;
    align-items: center;
    gap: 1.5rem;

    &:hover {
      background-color: var(--gray-100);
      color: var(--gray-500);
    }

    ${({ $active }) =>
      $active &&
      css`
        background-color: var(--primary-50);
        color: var(--primary-500);
        pointer-events: none;
      `}

    span {
      flex: 1;

      font-size: var(--font-size-md);
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;

      display: ${({ $collapsed }) => ($collapsed ? 'none' : 'inline')};
    }
  }

  & + li {
    margin-top: 0.5rem;
  }
`;

export const LoggedUser = styled.div<LoggedUserProps>`
  flex: 1;

  display: flex;
  align-items: flex-end;

  display: ${({ $collapsed }) => ($collapsed ? 'none' : 'flex')};

  ${({ theme }) =>
    theme.mixins.screen.md(css`
      display: flex;
    `)}

  & > a {
    width: 100%;
    padding: 0.5rem;
    border-radius: var(--rounded-sm);
    cursor: pointer;
    transition: all 0.2s;

    display: flex;
    align-items: center;
    gap: 1.5rem;

    &:hover {
      background-color: var(--gray-100);
    }

    strong {
      flex: 1;
      text-transform: uppercase;
      color: var(--secondary-400);

      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;

      display: ${({ $collapsed }) => ($collapsed ? 'none' : 'inline')};
    }

    ${({ $active }) =>
      $active &&
      css`
        background-color: var(--primary-50);
        color: var(--primary-500);
        pointer-events: none;
      `}
  }
`;
