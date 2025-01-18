import Card from './Card';
import RowItem from './RowItem';

interface Faq {
  question: string;
  answer: string;
}

type FaqListCardProps = {
  faqs: Faq[];
};

const mockFaqListCard: FaqListCardProps = {
  faqs: [
    { question: '질문1', answer: '답변1' },
    { question: '질문2', answer: '답변2' },
    { question: '질문3', answer: '답변3' },
  ],
};

// function FaqListCard({ faqs }: FaqListCardProps) {
function FaqListCard() {
  const { faqs } = mockFaqListCard;
  return (
    <Card title="FAQ" onEdit={() => {}}>
      {faqs.map((faq, index) => (
        <RowItem title={faq.question} key={index}>
          <div className="text-sm text-slate-800">{faq.answer}</div>
        </RowItem>
      ))}
    </Card>
  );
}

export default FaqListCard;
