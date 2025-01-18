import { AlertDialogCancel } from '@radix-ui/react-alert-dialog';
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../ui/alert-dialog';
import type { ReactNode } from 'react';
interface Props {
  trigger: ReactNode
  title:string;
  children:ReactNode;
  onCancel: () => void;
  onConfirm: () => void;
}

export default function AlertDialogLayout ({trigger,title,children,onCancel, onConfirm}:Props) {
  return (
    <AlertDialog>
        <AlertDialogTrigger>
            {trigger}
        </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>{title}</AlertDialogTitle>
      <AlertDialogDescription>
        {children}
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel onClick={onCancel}>취소</AlertDialogCancel>
      <AlertDialogAction onClick={onConfirm}>확인</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
  )
}