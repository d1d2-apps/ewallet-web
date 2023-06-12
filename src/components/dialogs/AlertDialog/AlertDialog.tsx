import { FiAlertCircle, FiAlertTriangle, FiCheckCircle, FiXCircle } from 'react-icons/fi';

import { Dialog, DialogProps } from '@/components/elements';

import * as S from './AlertDialog.styles';

export type AlertDialogType = 'info' | 'error' | 'success' | 'warning';

export interface AlertDialogProps {
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

export function AlertDialog({
  type = 'info',
  title,
  description,
  okButtonLabel = 'Ok',
  ...rest
}: AlertDialogProps & DialogProps) {
  return (
    <Dialog.Root {...rest}>
      <Dialog.Body>
        <S.Container $type={type}>
          <i>{ALERT_TYPES_ICONS[type]}</i>

          <div>
            <Dialog.Title>{title}</Dialog.Title>
            <Dialog.Description>{description}</Dialog.Description>
          </div>
        </S.Container>
      </Dialog.Body>

      <Dialog.Footer>
        <Dialog.CancelButton title={okButtonLabel} colorScheme={type} />
      </Dialog.Footer>
    </Dialog.Root>
  );
}
