import Content from '~/components/dashboard/Content';
import MainInfo from '~/components/dashboard/MainInfo';

export default function Dashboard() {
  return (
    <div className="bg-slate-50">
      <MainInfo />
      <div className="border-b" />
      <Content />
    </div>
  );
}
