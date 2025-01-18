import 회원제명Modal from '~/components/modals/회원제명Modal';
import type { Route } from './+types/member.$id';
import Layout from '~/components/layout/Layout';

export default function MemberDetailPage({ params }: Route.ComponentProps) {
  return (
    <Layout
      breadcrumbs={[
        { label: 'SIPE', path: '/' },
        { label: '회원 정보 관리', path: '/member' },
        { label: '이지원', path: `/member/${params.id}` },
      ]}
    >
      member detail page {[params.id]}
      <회원제명Modal id={Number(params.id)} userName="test" />
    </Layout>
  );
}
