import { useRef, useState } from 'react';

import { Button } from '@/components/elements';
import { PageTitle } from '@/components/page-elements';

import {
  BillCategoryForm,
  BillCategoryFormData,
  BillCategoryFormRef
} from '../../components/BillCategoryForm/BillCategoryForm';
import {
  BillsValuesForm,
  BillValuesFormData,
  BillValuesFormRef
} from '../../components/BillsValuesForm/BillsValuesForm';
import * as S from './CreateBillPage.styles';

const steps = [
  { title: 'Valores', description: 'Informe os valores' },
  { title: 'Categoria', description: 'Selecione uma categoria' },
  { title: 'Parcelas', description: 'Defina o parcelamento' },
  { title: 'Devedores', description: 'Defina os devedores' },
  { title: 'Resumo', description: 'Revise e confirme' }
];

export function CreateBillPage() {
  const billValuesFormRef = useRef<BillValuesFormRef>(null);
  const billCategoryFormRef = useRef<BillCategoryFormRef>(null);

  const [currentStep, setCurrentStep] = useState(0);

  const onBillValuesStepSubmitSuccess = (formData: BillValuesFormData) => {
    console.log(formData);
  };

  const onBillCategoryStepSubmitSuccess = ({ category }: BillCategoryFormData) => {
    console.log({ category });
  };

  const handleGoToNextStep = () => {
    switch (currentStep) {
      case 0:
        billValuesFormRef.current?.submit(onBillValuesStepSubmitSuccess);
        break;

      case 1:
        billCategoryFormRef.current?.submit(onBillCategoryStepSubmitSuccess);
        break;

      default:
        break;
    }
  };

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
            {currentStep === 0 && <BillsValuesForm ref={billValuesFormRef} />}
            {currentStep === 1 && <BillCategoryForm ref={billCategoryFormRef} />}
          </main>

          <footer>
            <Button size="xs" colorScheme="neutral">
              Voltar
            </Button>

            <Button size="xs" colorScheme="neutral" onClick={handleGoToNextStep}>
              Avançar
            </Button>
          </footer>
        </S.StepContentWrapper>
      </S.StepperWrapper>
    </S.Container>
  );
}
