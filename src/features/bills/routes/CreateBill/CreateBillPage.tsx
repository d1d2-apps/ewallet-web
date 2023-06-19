import { useRef, useState } from 'react';

import { Button } from '@/components/elements';
import { PageTitle } from '@/components/page-elements';

import { BillsValuesForm, BillsValuesFormRef } from '../../components/BillsValuesForm/BillsValuesForm';
import * as S from './CreateBillPage.styles';

const steps = [
  { title: 'Valores', description: 'Informe os valores' },
  { title: 'Parcelas', description: 'Defina o parcelamento' },
  { title: 'Devedores', description: 'Defina os devedores' },
  { title: 'Resumo', description: 'Revise e confirme' }
];

export function CreateBillPage() {
  const billValuesFormRef = useRef<BillsValuesFormRef>(null);

  const [currentStep, setCurrentStep] = useState(0);

  return (
    <S.Container>
      <PageTitle
        title="Lançamento de fatura"
        subtitle={`Preencha todos os campos e clique em "Avançar" para ir para a próxima etapa.`}
        showGoBackButton
      />

      <S.StepperWrapper>
        <S.Stepper>
          {steps.map((step, index) => (
            <S.Step key={step.title} $isCurrentStep={index === currentStep}>
              <main>
                <strong>{step.title}</strong>
                <span>{step.description}</span>
              </main>

              <Button
                colorScheme={index === currentStep ? 'primary' : 'white'}
                size="sm"
                isRounded
                onClick={() => setCurrentStep(index)}
                style={{ pointerEvents: index === currentStep ? 'none' : 'initial' }}
              >
                {index + 1}
              </Button>
            </S.Step>
          ))}
        </S.Stepper>

        <S.StepContentWrapper>
          <main>
            <BillsValuesForm ref={billValuesFormRef} />
          </main>

          <footer>
            <Button size="xs" colorScheme="neutral">
              Voltar
            </Button>

            <Button size="xs" colorScheme="neutral" onClick={() => billValuesFormRef.current?.submit()}>
              Avançar
            </Button>
          </footer>
        </S.StepContentWrapper>
      </S.StepperWrapper>
    </S.Container>
  );
}
