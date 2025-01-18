import React from 'react';
import { Edit } from 'lucide-react';

interface CardProps {
  title: string;
  children: React.ReactNode;
  onEdit: () => void;
}

function Card({ title, children, onEdit }: CardProps) {
  return (
    <div className="bg-white border rounded-lg p-6">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-lg font-semibold">{title}</h2>
        <button onClick={onEdit}>
          <Edit className="w-4 h-4" />
        </button>
      </div>
      {children}
    </div>
  );
}

export default Card;
