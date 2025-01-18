import ContentCard from '~/components/basicInfo/club/ContentCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';

export default function ClubInfoBasic() {
  const infoModel = {
    infos: [
      { key: '동아리 명', value: 'SIPE' },
      { key: '슬로건', value: 'Sharing Insights with People Everyday' },
      { key: '한 줄 소개', value: '개발자들이 함께 교류하며 성장하는 IT 커뮤니티' },
      {
        key: '후원사',
        images: [
          'https://picsum.photos/140/60',
          'https://picsum.photos/140/60',
          'https://picsum.photos/140/60',
        ],
      },
    ],
    tabs: [
      {
        title: 'Goal',
        contents: [
          { key: '제목', value: 'Goal 제목' },
          { key: '설명', value: 'Goal 설명' },
        ],
      },
      {
        title: 'Mission',
        contents: [
          { key: '제목', value: 'Mission 제목' },
          { key: '설명', value: 'Mission 설명' },
        ],
      },
      {
        title: 'Culture',
        contents: [
          { key: '제목', value: 'Culture 제목' },
          { key: '설명', value: 'Culture 설명' },
        ],
      },
    ],
  };

  return (
    <ContentCard title="기본 정보">
      {infoModel.infos.map((info, idx) => (
        <div
          key={info.key}
          className={
            'px-2 py-4 flex items-center space-x-4 text-sm' +
            (idx === infoModel.infos.length - 1 ? '' : ' border-b border-slate-100')
          }
        >
          <div className="text-slate-500 font-semibold w-[60px] flex-none">{info.key}</div>
          {info.value ? (
            <div>{info.value}</div>
          ) : (
            <div className="flex space-x-4">
              {info.images?.map((imageSrc) => (
                <img key={imageSrc} src={imageSrc} className="w-[60px] object-cover" />
              ))}
            </div>
          )}
        </div>
      ))}
      <Tabs defaultValue={infoModel.tabs[0].title} className="mt-4 w-full">
        <TabsList className="w-full">
          {infoModel.tabs.map((tab) => (
            <TabsTrigger key={tab.title} className="w-full" value={tab.title}>
              {tab.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {infoModel.tabs.map((tab) => (
          <TabsContent key={tab.title} value={tab.title}>
            {tab.contents.map((content, idx) => (
              <div
                key={content.key}
                className={
                  'px-2 py-4 flex items-center space-x-4 text-sm' +
                  (idx === tab.contents.length - 1 ? '' : ' border-b border-slate-100')
                }
              >
                <div className="text-slate-500 font-semibold w-[60px] flex-none">{content.key}</div>
                <div>{content.value}</div>
              </div>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </ContentCard>
  );
}
