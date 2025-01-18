import { Edit } from 'lucide-react';
import React from 'react';

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function ContentCard({ title, children }: Props) {
  return (
    <div className="bg-white border rounded-lg p-6">
      <div className="flex items-center justify-between">
        <div className="text-lg font-semibold">{title}</div>
        <Edit className="h-4 w-4" />
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}
