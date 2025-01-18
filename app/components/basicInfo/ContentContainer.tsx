import React from 'react';

type Props = {
  title?: string;
  children: React.ReactNode;
};

export default function ContentContainer({ title, children }: Props) {
  return (
    <div className="p-8">
      {title && <div className="text-2xl font-semibold mb-6">{title}</div>}
      <div>{children}</div>
    </div>
  );
}
