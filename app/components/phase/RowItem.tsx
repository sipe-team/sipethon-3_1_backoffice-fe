import React from 'react';

type RowItemProps = {
  title: string;
  children: React.ReactNode;
};

function RowItem({ title, children }: RowItemProps) {
  return (
    <div className="flex items-center min-h-[52px] border-b border-slate-200">
      <div className="min-w-[120px] text-slate-500">{title}</div>
      <div>{children}</div>
    </div>
  );
}

export default RowItem;
