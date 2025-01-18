import ClubInfoActivity from './ClubInfoActivity';
import ClubInfoBasic from './ClubInfoBasic';
import ClubInfoFaq from './ClubInfoFaq';

export default function ClubInfo() {
  return (
    <div className="grid grid-cols-1 2xl:grid-cols-3 gap-6">
      <ClubInfoBasic />
      <ClubInfoActivity />
      <ClubInfoFaq />
    </div>
  );
}
