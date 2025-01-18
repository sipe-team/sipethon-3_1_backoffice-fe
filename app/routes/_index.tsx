import { Link } from 'react-router';
import SipeMainLogo from '~/components/svg/SipeMainLogo';
import { Input } from '~/components/ui/input';

export default function Page() {
  return (
    <main className="flex items-center justify-center h-dvh">
      <div>
        <SipeMainLogo />
        <div className="mt-8">사이프 커뮤니티 운영을 위한 관리자 페이지입니다.</div>
        <Input type="text" placeholder="아이디" />
        <Input type="password" placeholder="비밀번호" />
        <button type="button">로그인</button>
        <Link to="/">비밀번호를 잊으셨나요?</Link>
      </div>
    </main>
  );
}
