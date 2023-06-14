import { opacify } from 'polished';
import styled from 'styled-components';

interface StepProps {
  $isCurrentStep?: boolean;
}

export const Container = styled.div`
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const StepperWrapper = styled.main`
  flex: 1;

  display: flex;
  gap: 1.5rem;
`;

export const Stepper = styled.aside`
  height: 100%;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;

  &::after {
    content: '';
    width: 1px;
    background-color: red;
    background: ${({ theme }) =>
      `linear-gradient(180deg, transparent 0%, ${opacify(-0.85, theme.colors.neutral)} 50%, transparent 100%)`};

    position: absolute;
    top: 0;
    right: 1.25rem;
    bottom: 0;
  }
`;

export const Step = styled.article<StepProps>`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.5rem;

  & > main {
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.5rem;

    & > strong {
      color: ${({ theme }) => opacify(-0.25, theme.colors.neutral)};
      font-weight: 500;
    }

    & > span {
      font-size: ${({ theme }) => theme.fontSize.sm};
      color: ${({ theme }) => opacify(-0.35, theme.colors.neutral)};
    }
  }

  & > button {
    z-index: 1;
  }
`;
