import { opacify } from 'polished';
import styled, { css } from 'styled-components';

interface SideMenuProps {
  $isCollapsed: boolean;
}

interface NavItemProps {
  $isActive?: boolean;
  $isCollapsed: boolean;
}

interface LoggedUserProps {
  $isActive: boolean;
  $isCollapsed: boolean;
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
  height: ${({ $isCollapsed }) => ($isCollapsed ? '4rem' : '100%')};
  padding: 1rem 0.5rem;
  background-color: ${({ theme }) => theme.colors.backgroundOffset};
  transition: all 0.5s;
  box-shadow: ${({ theme }) => theme.shadow.md};

  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;

  ${({ theme, $isCollapsed }) =>
    theme.mixins.screen.md(css`
      width: ${$isCollapsed ? '4.5rem' : '100%'};
      max-width: 20rem;
      height: 100%;
      padding: 1.5rem 0.5rem;
      border-top-right-radius: ${theme.rounded.lg};
      border-bottom-right-radius: ${theme.rounded.lg};
      box-shadow: ${$isCollapsed ? theme.shadow.xl : theme.shadow['2xl']};
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
        font-family: ${({ theme }) => theme.fontFamily.montserrat};
        font-size: ${({ theme }) => theme.fontSize.lg};
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;

        display: block;

        ${({ theme, $isCollapsed }) =>
          theme.mixins.screen.md(css`
            display: ${$isCollapsed ? 'none' : 'block'};
          `)}
      }
    }
  }

  ul {
    width: 100%;
    margin-top: 2rem;
    display: ${({ $isCollapsed }) => ($isCollapsed ? 'none' : 'block')};

    ${({ theme }) =>
      theme.mixins.screen.md(css`
        display: block;
      `)}
  }
`;

export const CollapseButton = styled.button`
  width: 2rem;
  height: 2rem;
  background-color: ${({ theme }) => theme.colors.backgroundOffset};
  border: none;
  border-radius: ${({ theme }) => theme.rounded.full};
  transform: rotate(270deg);
  transition: all 0.2s;

  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.colors.neutral};

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadow.md};
  }

  ${({ theme }) =>
    theme.mixins.screen.md(css`
      width: 1.5rem;
      height: 1.5rem;
      box-shadow: ${theme.shadow.sm};
      transform: rotate(0deg);

      font-size: ${theme.fontSize.sm};

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
    border-radius: ${({ theme }) => theme.rounded.sm};
    transition: all 0.2s;

    font-size: ${({ theme }) => theme.fontSize.xl};
    color: ${({ theme }) => opacify(-0.6, theme.colors.neutral)};
    line-height: 1;

    display: flex;
    align-items: center;
    gap: 1.5rem;

    &:hover {
      background-color: ${({ theme }) => opacify(-0.9, theme.colors.neutral)};
      color: ${({ theme }) => opacify(-0.3, theme.colors.neutral)};
    }

    ${({ theme, $isActive }) =>
      $isActive &&
      css`
        background-color: ${opacify(-0.8, theme.colors.primary)};
        color: ${theme.colors.primary};
        pointer-events: none;
      `}

    span {
      flex: 1;

      font-size: ${({ theme }) => theme.fontSize.md};
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;

      display: ${({ $isCollapsed }) => ($isCollapsed ? 'none' : 'inline')};
    }
  }

  & + li {
    margin-top: 0.5rem;
  }
`;

export const LoggedUser = styled.div<LoggedUserProps>`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 0.75rem;

  display: ${({ $isCollapsed }) => ($isCollapsed ? 'none' : 'flex')};

  ${({ theme }) =>
    theme.mixins.screen.md(css`
      display: flex;
    `)}

  & > a {
    width: 100%;
    padding: 0.5rem;
    border-radius: ${({ theme }) => theme.rounded.sm};
    color: ${({ theme }) => opacify(-0.6, theme.colors.neutral)};
    cursor: pointer;
    transition: all 0.2s;

    display: flex;
    align-items: center;
    gap: 1.5rem;

    &:hover {
      background-color: ${({ theme }) => opacify(-0.9, theme.colors.neutral)};
      color: ${({ theme }) => opacify(-0.3, theme.colors.neutral)};
    }

    strong {
      flex: 1;
      text-transform: uppercase;

      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;

      display: ${({ $isCollapsed: $collapsed }) => ($collapsed ? 'none' : 'inline')};
    }

    ${({ theme, $isActive }) =>
      $isActive &&
      css`
        background-color: ${opacify(-0.8, theme.colors.primary)};
        color: ${theme.colors.primary};
        pointer-events: none;
      `}
  }
`;
