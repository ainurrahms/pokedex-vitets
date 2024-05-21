import { ReactNode } from 'react';

export interface ModalProps {
  show: boolean;
  children?: ReactNode;
  className?: string;
  fullscreen?: boolean;
}
