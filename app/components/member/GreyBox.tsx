import { ReactNode } from 'react';

export default function GreyBox({ children }: { children: ReactNode }) {
  return <span className="py-[8px] px-[2px] bg-slate-100 rounded-md">{children}</span>;
}
