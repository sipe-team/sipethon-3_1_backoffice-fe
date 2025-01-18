import Layout from '~/components/layout/Layout';
import Attendance from '~/pages/Attendance';

export default function AttendancePage() {
  return (
    <Layout
      breadcrumbs={[
        { label: 'SIPE', path: '/' },
        { label: '출석 관리', path: '/attendance' },
      ]}
    >
      <Attendance />
    </Layout>
  );
}
