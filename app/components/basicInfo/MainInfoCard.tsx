export default function MainInfoCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-slate-100 rounded-md flex flex-col items-center justify-center space-y-1 w-full py-6">
      <div className="text-xs text-slate-500">{title}</div>
      <div className="text-2xl font-semibold">{value}</div>
    </div>
  );
}
