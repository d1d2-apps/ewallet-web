import React from 'react';
import NiceModal, { useModal } from '@ebay/nice-modal-react';
import * as RadixAlertDialog from '@radix-ui/react-alert-dialog';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle, FiAlertTriangle, FiCheckCircle, FiXCircle } from 'react-icons/fi';

import { Button, ButtonColorScheme } from '@/components/elements';

import * as S from './AlertDialog.styles';

type AlertDialogType = 'info' | 'error' | 'success' | 'warning';

export interface AlertDialogProps {
  type?: AlertDialogType;
  title: string;
  description: string;
  okButtonLabel?: string;
}

interface AlertTypeConfig {
  icon: React.ComponentType<IconBaseProps>;
  color: Extract<ButtonColorScheme, 'blue' | 'red' | 'green' | 'yellow'>;
}

const ALERT_TYPES_CONFIG: Record<AlertDialogType, AlertTypeConfig> = {
  info: { icon: FiAlertCircle, color: 'blue' },
  error: { icon: FiXCircle, color: 'red' },
  success: { icon: FiCheckCircle, color: 'green' },
  warning: { icon: FiAlertTriangle, color: 'yellow' }
};

export const AlertDialog = NiceModal.create<AlertDialogProps>(
  ({ type = 'info', title, description, okButtonLabel = 'Ok' }) => {
    const alert = useModal();

    const { icon: Icon, color } = ALERT_TYPES_CONFIG[type];

    const handleCloseAlert = async () => {
      await alert.hide();
      alert.remove();
    };

    return (
      <RadixAlertDialog.Root open={alert.visible}>
        <RadixAlertDialog.Portal>
          <S.Overlay />

          <S.Content $color={color}>
            <main>
              <i>
                <Icon />
              </i>

              <div>
                <S.Title>{title}</S.Title>
                <S.Description>{description}</S.Description>
              </div>
            </main>

            <footer>
              <RadixAlertDialog.Cancel asChild>
                <Button colorScheme={color} size="sm" onClick={handleCloseAlert}>
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
