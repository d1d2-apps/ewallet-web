import NiceModal, { useModal } from '@ebay/nice-modal-react';
import * as RadixAlertDialog from '@radix-ui/react-alert-dialog';
import { FiAlertCircle, FiAlertTriangle, FiCheckCircle, FiXCircle } from 'react-icons/fi';

import { Button } from '@/components/elements';

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

export const AlertDialog = NiceModal.create<AlertDialogProps>(
  ({ type = 'info', title, description, okButtonLabel = 'Ok' }) => {
    const alert = useModal();

    const handleCloseAlert = async () => {
      await alert.hide();
      alert.remove();
    };

    return (
      <RadixAlertDialog.Root open={alert.visible}>
        <RadixAlertDialog.Portal>
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
              <RadixAlertDialog.Cancel asChild>
                <Button colorScheme={type} size="sm" onClick={handleCloseAlert}>
                  {okButtonLabel}
                </Button>
              </RadixAlertDialog.Cancel>
            </footer>
          </S.Content>
        </RadixAlertDialog.Portal>
      </RadixAlertDialog.Root>
    );
  }
);
