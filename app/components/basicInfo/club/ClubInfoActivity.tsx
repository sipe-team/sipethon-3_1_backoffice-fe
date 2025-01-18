import ContentCard from '~/components/basicInfo/club/ContentCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '~/components/ui/carousel';

export default function ClubInfoActivity() {
  const tabs = [
    {
      title: '정규 미션',
      images: [
        'https://picsum.photos/300/200',
        'https://picsum.photos/300/200',
        'https://picsum.photos/300/200',
      ],
      contents: [
        { key: '제목', value: '정규 미션 제목' },
        { key: '설명', value: '정규 미션 설명' },
      ],
    },
    {
      title: '사담콘',
      images: [
        'https://picsum.photos/300/200',
        'https://picsum.photos/300/200',
        'https://picsum.photos/300/200',
      ],
      contents: [
        { key: '제목', value: '사담콘 제목' },
        { key: '설명', value: '사담콘 설명' },
      ],
    },
    {
      title: '내친소',
      images: [
        'https://picsum.photos/300/200',
        'https://picsum.photos/300/200',
        'https://picsum.photos/300/200',
      ],
      contents: [
        { key: '제목', value: '내친소 제목' },
        { key: '설명', value: '내친소 설명' },
      ],
    },
    {
      title: '사이프톤',
      images: [
        'https://picsum.photos/300/200',
        'https://picsum.photos/300/200',
        'https://picsum.photos/300/200',
      ],
      contents: [
        { key: '제목', value: '사이프톤 제목' },
        { key: '설명', value: '사이프톤 설명' },
      ],
    },
    {
      title: '그 외 행사',
      images: [
        'https://picsum.photos/300/200',
        'https://picsum.photos/300/200',
        'https://picsum.photos/300/200',
      ],
      contents: [
        { key: '제목', value: '그 외 행사 제목' },
        { key: '설명', value: '그 외 행사 설명' },
      ],
    },
  ];

  return (
    <ContentCard title="주요 활동">
      <Tabs defaultValue={tabs[0].title} className="w-full">
        <TabsList className="w-full">
          {tabs.map((tab) => (
            <TabsTrigger key={tab.title} className="w-full" value={tab.title}>
              {tab.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabs.map((tab) => (
          <TabsContent key={tab.title} value={tab.title} className="mt-4">
            <Carousel key={tab.title} className="mt-4 relative">
              <CarouselContent>
                {tab.images.map((imageSrc) => (
                  <CarouselItem key={imageSrc}>
                    <img src={imageSrc} className="w-full h-[200px] object-cover rounded-md" />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute top-1/2 left-0 transform -translate-y-1/2" />
              <CarouselNext className="absolute top-1/2 right-0 transform -translate-y-1/2" />
            </Carousel>
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
