import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '~/components/ui/select';
import { Input } from '~/components/ui/input';
import MemberRegistration from '~/components/modals/members/MemberRegistration';
import Layout from '~/components/layout/Layout';
import dummyMembers from '~/data/member/list/dummyMembers';
import TableSection from '~/components/member/list/TableSection/TableSection';

export default function Member() {
  const [term, setTerm] = useState(3);
  const [name, setName] = useState('');
  const [memberInfo, setMemberInfo] = useState([]);

  // rendering되자마자 데이터 호출

  useEffect(() => {
    const fetchData = async () => {
      const params: { term: number; name?: string } = {
        term: Number(term),
      };

      if (name) {
        params.name = name;
      }

      const { data } = await axios.get('https://backoffice.conects.com/api/members', { params });
      setMemberInfo(data);
    };

    fetchData();
  }, []);

  const handleSearch = async () => {
    const params: { term: number; name?: string } = {
      term: Number(term),
    };

    if (name) {
      params.name = name;
    }

    // const response = await axios.get('http://backoffice.conects.com/api/members', { params });
    const { data } = await axios.get('http://backoffice.conects.com/api/members', { params });
    if (data) {
      setMemberInfo(data);
    }
  };

  return (
    <Layout
      breadcrumbs={[
        { label: 'SIPE', path: '/' },
        { label: '회원 정보 관리', path: '/member' },
      ]}
    >
      <div className="bg-slate-50 ">
        <nav className="flex items-center justify-between px-8 py-6">
          {/* 검색 영역 */}
          <div className="flex items-center space-x-4">
            <h3 className="sr-only">검색 영역</h3>
            <div className="h-10">
              <h4 className="sr-only">select 영역</h4>
              <Select onValueChange={setTerm} defaultValue="3">
                <SelectTrigger className="w-[180px] h-10 bg-white text-neutral-500">
                  <SelectValue placeholder="기수 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1기</SelectItem>
                  <SelectItem value="2">2기</SelectItem>
                  <SelectItem value="3">3기</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* 검색 입력 */}
            <div className="relative flex items-center w-96 bg-white rounded-md overflow-hidden border border-neutral-200">
              <h4 className="sr-only">input 영역</h4>
              <img src="/images/search.svg" alt="검색 아이콘" className="w-6 h-6 ml-2" />
              <Input
                placeholder="이름을 입력해주세요."
                className="w-full h-10 pr-24 bg-white border-none shadow-none focus-visible:ring-0 focus:ring-transparent focus:outline-none text-black"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 w-16 h-8  rounded-md bg-slate-800"
                onClick={handleSearch}
              >
                <span className="text-sm text-white">검색</span>
              </button>
            </div>
          </div>

          {/* 버튼 영역 */}
          <div className="flex gap-x-2">
            <h3 className="sr-only">버튼 영역</h3>

            {/* 신규 회원 등록 버튼 */}
            <MemberRegistration />
          </div>
        </nav>
        <main className="px-8 ">
          {/* 테이블 영역 */}
          <h2 className="sr-only">테이블 영역</h2>
          <TableSection memberInfo={memberInfo} />
          {/* <TableSection memberInfo={dummyMembers} /> */}
        </main>
      </div>
      {/* <footer>
        <div>푸터</div>
      </footer> */}
    </Layout>
  );
}
