import TableSection from '~/components/member/list/TableSection/TableSection';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '~/components/ui/alert-dialog';

import { Input } from '~/components/ui/input';
import type { MemberInfo } from '~/components/member/list/TableSection/MemberInfo';
import dummyMembers from '~/data/member/list/dummyMembers';

export default function Member() {
  // 멤버 검색 api 호출
  const handleSearch = () => {
    alert('검색 버튼 클릭');
    // response로 받아오는 데이터를 props로 그대로 넘겨주기
  };

  return (
    <>
      <header>
        <h1>헤더</h1>
      </header>
      <aside>
        <div>사이드바 영역</div>
      </aside>
      <div className="bg-slate-50 ">
        <nav className="flex items-center justify-between px-8 py-6">
          {/* 검색 영역 */}
          <div className="flex items-center space-x-4">
            <h3 className="sr-only">검색 영역</h3>
            <div className="h-10">
              <h4 className="sr-only">select 영역</h4>
              <Select>
                <SelectTrigger className="w-[180px] h-10 bg-white">
                  <SelectValue placeholder="기수 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="phase1">1기</SelectItem>
                  <SelectItem value="phase2">2기</SelectItem>
                  <SelectItem value="phase3">3기</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* 검색 입력 */}
            <div className="relative flex items-center w-96 bg-white rounded-md overflow-hidden border border-neutral-200">
              <h4 className="sr-only">input 영역</h4>
              <img src="/images/search.svg" alt="검색 아이콘" className="w-6 h-6 ml-2" />

              <Input
                placeholder="이름을 입력해주세요."
                className="w-full h-10 pr-24 bg-white border-none shadow-none focus-visible:ring-0 focus:ring-transparent focus:outline-none"
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
            <AlertDialog>
              <AlertDialogTrigger className="w-32	h-10 py-2 px-2 rounded-md 	bg-slate-800  text-sm text-white">
                신규 회원 등록
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your account and
                    remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </nav>
        <main className="px-8 ">
          {/* 테이블 영역 */}
          <h2 className="sr-only">테이블 영역</h2>
          <TableSection memberInfo={dummyMembers} />
        </main>
      </div>
      {/* <footer>
        <div>푸터</div>
      </footer> */}
    </>
  );
}
