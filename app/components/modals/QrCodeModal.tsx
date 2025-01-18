import React, { useState } from 'react';
import DialogLayout from '~/components/modals/DialogLayout';

interface QrCodeModalProps {
  trigger?: React.ReactNode;
  qrCode: string;
}

export default function QrCodeModal({ trigger, qrCode }: QrCodeModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickCancel = () => {
    setIsOpen(false);
  };

  return (
    <DialogLayout
      open={isOpen}
      onOpenChange={setIsOpen}
      trigger={trigger}
      title="출석 QR 코드"
      onCancel={handleClickCancel}
      cancelText="닫기"
    >
      <div className="flex items-center justify-center p-4">
        <img src={qrCode} alt="QR 코드" />
      </div>
    </DialogLayout>
  );
}
