import MainInfoCard from '~/components/basicInfo/MainInfoCard';

export default function MainInfo() {
  const mainInfoCards = [
    { title: '현재 기수', value: '3기' },
    { title: '누적 지원자 수', value: '423' },
    { title: '전체 회원 수', value: '62' },
    { title: '누적 미션 수', value: '30' },
  ];

  return (
    <div className="flex items-center justify-center py-12 px-8">
      <div>
        <div className="text-center">
          <div className="text-[32px] font-semibold">Sharing Insights with People Everyday</div>
        </div>
        <div className="grid grid-cols-4 gap-4 w-[800px] mt-4">
          {mainInfoCards.map((card, index) => (
            <div key={index}>
              <MainInfoCard title={card.title} value={card.value} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
