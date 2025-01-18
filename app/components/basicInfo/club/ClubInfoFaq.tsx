import ContentCard from '~/components/basicInfo/club/ContentCard';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion';

export default function ClubInfoFaq() {
  const faqs = [
    { title: '활동비가 있나요?', content: '있어요.' },
    { title: '활동 시간은 언제인가요?', content: '매주 수요일 오후 7시' },
    { title: '활동 장소는 어디인가요?', content: '강남역' },
    { title: '활동 방식은 어떻게 되나요?', content: '스터디' },
  ];

  return (
    <ContentCard title="FAQ">
      <Accordion type="single" collapsible>
        {faqs.map((faq) => (
          <AccordionItem key={faq.title} value={faq.title}>
            <AccordionTrigger className="text-sm">{faq.title}</AccordionTrigger>
            <AccordionContent className="text-xs rounded-md bg-slate-50 px-3 py-4 mb-4">
              {faq.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </ContentCard>
  );
}
