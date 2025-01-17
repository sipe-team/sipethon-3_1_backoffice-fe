import { Link } from 'react-router';

export default function Page() {
  return (
    <main>
      <img src="/images/logo.png" alt="sipe" />
      <p>사이프 커뮤니티 운영을 위한 관리자 페이지입니다.</p>
      <input type="text" placeholder="아이디" />
      <input type="password" placeholder="비밀번호" />
      <button type="button">로그인</button>
      <Link to="/">비밀번호를 잊으셨나요?</Link>
    </main>
  );
}
