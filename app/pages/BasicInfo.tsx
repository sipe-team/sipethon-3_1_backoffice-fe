import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import ClubInfo from '~/components/basicInfo/club/ClubInfo';
import ContentContainer from '~/components/basicInfo/ContentContainer';
import MainInfo from '~/components/basicInfo/MainInfo';
import ApplicationDeadlineCard from '~/components/phase/ApplicationDeadlineCard';
import FaqListCard from '~/components/phase/FaqListCard';
import HeaderedContentContainer from '~/components/phase/HeaderedContentContainer';
import PhaseSelector from '~/components/phase/PhaseSelector';
import ProgramScheduleCard from '~/components/phase/ProgramScheduleCard';
import RequirementsCard from '~/components/phase/RequirementsCard';
import { getFaqs, getRequirements } from '~/apis/phase';

const phaseList = [
  { label: '1기', value: '1' },
  { label: '2기', value: '2' },
  { label: '3기', value: '3' },
];

export default function BasicInfo() {
  const [phase, setPhase] = useState<string>(phaseList[0].value);

  const { data: faqs } = useQuery({
    queryKey: ['faqs', phase],
    queryFn: () => getFaqs(Number(phase)),
    select: (data) => data.faqs || [],
  });

  const { data: requirements } = useQuery({
    queryKey: ['requirements', phase],
    queryFn: () => getRequirements(Number(phase)),
  });

  return (
    <div className="bg-slate-50">
      <MainInfo />
      <div className="border-b" />
      <ContentContainer title="동아리 정보">
        <ClubInfo />
      </ContentContainer>
      <HeaderedContentContainer
        title="기수별 정보"
        header={
          <PhaseSelector
            phaseList={phaseList}
            value={phase}
            onChange={setPhase}
            onRegister={() => {}}
          />
        }
      >
        <div className="grid grid-cols-2 gap-4">
          <ApplicationDeadlineCard applicationDeadline={[]} />
          <RequirementsCard />
          {/* <RequirementsCard
            requirements={requirements?.requirement || ''}
            description={requirements?.description || []}
          /> */}
          <ProgramScheduleCard />
          {/* <FaqListCard faqs={faqs || []} /> */}
          <FaqListCard />
        </div>
      </HeaderedContentContainer>
    </div>
  );
}
