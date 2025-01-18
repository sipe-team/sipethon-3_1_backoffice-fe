import Card from './Card';
import RowItem from './RowItem';

type ApplicationDeadline = {
  title: string;
  date: string;
  description: string;
};

const mockApplicationDeadline: ApplicationDeadline[] = [
  {
    title: '서류 접수',
    date: '2025-01-01',
    description: '오후 23시 59분 마감',
  },
  {
    title: '서류 합격자 발표',
    date: '2025-01-01',
    description: '오후 23시 59분 마감',
  },
  {
    title: '오프라인 인터뷰',
    date: '2025-01-01',
    description: '오후 23시 59분 마감',
  },
  {
    title: '최종 합격자 발표',
    date: '2025-01-01',
    description: '오후 23시 59분 마감',
  },
  {
    title: '정규 활동 시작',
    date: '2025-01-01',
    description: '오후 23시 59분 마감',
  },
];

function ApplicationDeadlineCard({
  applicationDeadline,
}: {
  applicationDeadline: ApplicationDeadline[];
}) {
  return (
    <Card title="모집 일정" onEdit={() => {}}>
      {mockApplicationDeadline.map((deadline, index) => (
        <RowItem key={index} title={deadline.title}>
          <div className="flex items-center">
            <p className="text-sm text-slate-800 mr-2">{deadline.date}</p>
            <p className="text-xs text-slate-400">{deadline.description}</p>
          </div>
        </RowItem>
      ))}
    </Card>
  );
}

export default ApplicationDeadlineCard;
