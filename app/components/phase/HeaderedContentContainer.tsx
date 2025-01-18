import React from 'react';

type Props = {
  title?: string;
  header?: React.ReactNode;
  children: React.ReactNode;
};

export default function HeaderedContentContainer({ title, header, children }: Props) {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        {title && <div className="text-2xl font-semibold">{title}</div>}
        {header && <div>{header}</div>}
      </div>
      <div>{children}</div>
    </div>
  );
}
