import Layout from '~/components/layout/Layout';

export default function Attendance() {
  return (
    <Layout
      breadcrumbs={[
        { label: 'SIPE', path: '/' },
        { label: '출석 관리', path: '/attendance' },
      ]}
    >
      출석 관리
    </Layout>
  );
}
