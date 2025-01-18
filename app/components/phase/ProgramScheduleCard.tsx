import Card from './Card';
import RowItem from './RowItem';

const mockProgramScheduleCard = {
  programSchedule: [
    {
      title: '1회차 (24.10.12)',
      description: 'OT',
    },
    {
      title: '2회차 (24.10.19)',
      description: 'MT',
    },
    {
      title: '3회차 (24.10.26)',
      description: '프로젝트 주제 선정',
    },
    {
      title: '4회차 (24.11.02)',
      description: '프로젝트 주제 선정',
    },
    {
      title: '5회차 (24.11.09)',
      description: '프로젝트 주제 선정',
    },
    {
      title: '6회차 (24.11.16)',
      description: '프로젝트 주제 선정',
    },
    {
      title: '7회차 (24.11.23)',
      description: '프로젝트 주제 선정',
    },
    {
      title: '8회차 (24.11.30)',
      description: '프로젝트 주제 선정',
    },
    {
      title: '9회차 (24.12.07)',
      description: '프로젝트 주제 선정',
    },
  ],
};

interface ProgramSchedule {
  title: string;
  description: string;
}

type ProgramScheduleCardProps = {
  programSchedule: ProgramSchedule[];
};

// function ProgramScheduleCard({ programSchedule }: ProgramScheduleCardProps) {
function ProgramScheduleCard() {
  const { programSchedule } = mockProgramScheduleCard;
  return (
    <Card title="활동 일정" onEdit={() => {}}>
      {programSchedule.map((item, index) => (
        <RowItem title={item.title} key={index}>
          <div className="text-sm text-slate-800">{item.description}</div>
        </RowItem>
      ))}
    </Card>
  );
}

export default ProgramScheduleCard;
