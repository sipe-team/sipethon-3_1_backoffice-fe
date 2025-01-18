import Content from '~/components/basicInfo/Content';
import MainInfo from '~/components/basicInfo/MainInfo';

export default function BasicInfo() {
  return (
    <div className="bg-slate-50">
      <MainInfo />
      <div className="border-b" />
      <Content />
    </div>
  );
}
