import Card from './Card';
import RowItem from './RowItem';

const mockRequirementsCard: RequirementsCardProps = {
  requirements: '기술 트렌드에 관심있고 성장을 추구하는 열정적인 개발자',
  description: [
    '격주 토요일 오후 2시 ~ 6시에 진행되는 정규 활동에 성실하게 참여할 수 있는',
    '자신의 지식과 경험을 다른 구성원들과 적극적으로 공유하고 소통할 수 있는',
    '다양한 경험을 가진 사람들과 폭넓고 깊이 있는 대화를 나누고 싶은',
  ],
};

type RequirementsCardProps = {
  requirements: string;
  description: string[];
};

// function RequirementsCard({ requirements, description }: RequirementsCardProps) {
function RequirementsCard() {
  const { requirements, description } = mockRequirementsCard;
  return (
    <Card title="지원 자격" onEdit={() => {}}>
      <RowItem title="대상">
        <div className="text-sm text-slate-800">{requirements}</div>
      </RowItem>
      <RowItem title="설명">
        <div className="flex flex-col gap-4">
          {description.map((desc, index) => (
            <div key={index} className="text-sm text-slate-800">
              {'•  ' + desc}
            </div>
          ))}
        </div>
      </RowItem>
    </Card>
  );
}

export default RequirementsCard;
