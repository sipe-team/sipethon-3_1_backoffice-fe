import 회원제명Modal from '~/components/modals/회원제명Modal';
import type { Route } from './+types/member.$id';

export default function MemberDetailPage({ params }: Route.ComponentProps) {
  return (
    <div>
      member detail page {[params.id]}
      <회원제명Modal id={Number(params.id)} userName="test" />
    </div>
  );
}
