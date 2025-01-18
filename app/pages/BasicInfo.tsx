import ContentContainer from '~/components/basicInfo/ContentContainer';
import MainInfo from '~/components/basicInfo/MainInfo';

export default function BasicInfo() {
  return (
    <div className="bg-slate-50">
      <MainInfo />
      <div className="border-b" />
      <ContentContainer title="동아리 정보">
        <div className="bg-white border rounded-lg p-6">
          <h2 className="text-lg font-semibold">Welcome back, John!</h2>
          <p className="text-sm text-slate-60 mt-1">
            You have 3 new messages and 5 new notifications.
          </p>
        </div>
      </ContentContainer>
      <ContentContainer title="기수별 정보">
        <div className="bg-white border rounded-lg p-6">
          <h2 className="text-lg font-semibold">Welcome back, John!</h2>
          <p className="text-sm text-slate-60 mt-1">
            You have 3 new messages and 5 new notifications.
          </p>
        </div>
      </ContentContainer>
    </div>
  );
}
