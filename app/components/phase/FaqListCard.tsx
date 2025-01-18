import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion';
import Card from './Card';

interface Faq {
  question: string;
  answer: string;
}

type FaqListCardProps = {
  faqs: Faq[];
};

// const mockFaqListCard: FaqListCardProps = {
//   faqs: [
//     { question: '3기 선발 기준은 어떻게 되나요?', answer: '답변1' },
//     {
//       question: '현재 개발자로 일은 안하고 있지만 개발 경력이 있는데 지원 가능한가요?',
//       answer: '답변2',
//     },
//     {
//       question: '수도권에 거주하고 있지 않지만 주요 활동 지역은 수도권인데 활동을 할 수 있나요?',
//       answer: '답변3',
//     },
//     {
//       question: '3기 선발 인원은 몇명인가요?',
//       answer: '답변4',
//     },
//     {
//       question: '미성년자이지만 개발자로 근무하고 있는데 지원할 수 있나요?',
//       answer: '답변4',
//     },
//     {
//       question: '활동 시간은 언제인가요?',
//       answer: '답변5',
//     },
//   ],
// };

function FaqListCard({ faqs }: FaqListCardProps) {
  return (
    <Card title="FAQ" onEdit={() => {}}>
      <Accordion type="single" collapsible>
        {faqs.map((faq) => (
          <AccordionItem key={faq.question} value={faq.question}>
            <AccordionTrigger className="text-sm">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-xs rounded-md bg-slate-50 px-3 py-4 mb-4">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Card>
  );
}

export default FaqListCard;
