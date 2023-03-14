import { FiAlertCircle, FiAlertTriangle, FiCheckCircle, FiXCircle } from 'react-icons/fi';

import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

import { Button } from '@/components/elements';

import * as S from './AlertDialog.styles';

export type AlertDialogType = 'info' | 'error' | 'success' | 'warning';

export interface AlertDialogProps extends AlertDialogPrimitive.AlertDialogProps {
  type?: AlertDialogType;
  title: string;
  description: string;
  okButtonLabel?: string;
}

const ALERT_TYPES_ICONS = {
  info: <FiAlertCircle />,
  error: <FiXCircle />,
  success: <FiCheckCircle />,
  warning: <FiAlertTriangle />
};

export function AlertDialog({ type = 'info', title, description, okButtonLabel = 'Ok', ...rest }: AlertDialogProps) {
  return (
    <AlertDialogPrimitive.Root {...rest}>
      <AlertDialogPrimitive.Portal>
        <S.Overlay />

        <S.Content $type={type}>
          <main>
            <i>{ALERT_TYPES_ICONS[type]}</i>

            <div>
              <S.Title>{title}</S.Title>
              <S.Description>{description}</S.Description>
            </div>
          </main>

          <footer>
            <AlertDialogPrimitive.Cancel asChild>
              <Button colorScheme={type} size="sm">
                {okButtonLabel}
              </Button>
            </AlertDialogPrimitive.Cancel>
          </footer>
        </S.Content>
      </AlertDialogPrimitive.Portal>
    </AlertDialogPrimitive.Root>
  );
}
