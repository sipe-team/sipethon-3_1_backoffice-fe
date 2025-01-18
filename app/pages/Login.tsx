import { Link } from 'react-router';

import LoginForm from '~/components/login/LoginForm';
import SipeMainLogo from '~/components/svg/SipeMainLogo';

export default function Login() {
  return (
    <main className="flex items-center justify-center h-dvh">
      <div className="max-w-sm w-full flex flex-col items-center">
        <SipeMainLogo />
        <div className="mt-8 text-lg">사이프 커뮤니티 운영을 위한 관리자 페이지입니다.</div>
        <LoginForm />
        <div className="mt-4">
          <Link to="/" className="text-sm">
            비밀번호를 잊으셨나요?
          </Link>
        </div>
      </div>
      <div className="fixed bottom-4 text-center text-slate-400 text-xs">
        <span>All rights reserved ⓒ SIPE</span>
      </div>
    </main>
  );
}
