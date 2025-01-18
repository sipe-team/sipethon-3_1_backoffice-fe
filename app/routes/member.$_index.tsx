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
export default function Member() {
  return (
    <>
      <header>
        <h1>헤더</h1>
      </header>
      <aside>
        <div>사이드바 영역</div>
      </aside>
      <div className="bg-slate-50">
        <nav className="flex items-center justify-between px-8 py-6">
          {/* 검색 영역 */}
          <div className="flex items-center space-x-4">
            <h3 className="sr-only">검색 영역</h3>
            <div>
              <h4 className="sr-only">select 영역</h4>
              <Select>
                <SelectTrigger className="w-[180px] bg-white">
                  <SelectValue placeholder="기수 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="phase1">1기</SelectItem>
                  <SelectItem value="phase2">2기</SelectItem>
                  <SelectItem value="phase3">3기</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-96">
              <h4 className="sr-only">input 영역</h4>
              <Input placeholder="이름을 입력해주세요." className="bg-white" />
            </div>
            {/* <div>
              <button type="button" className="w-20 h-9 p-2 rounded-md bg-slate-800">
                <span className="text-sm text-white">검색</span>
              </button>
            </div> */}
          </div>

          {/* 버튼 영역 */}
          <div className="flex gap-x-2">
            <h3 className="sr-only">버튼 영역</h3>
            {/* 출석 QR 호출 */}
            <AlertDialog>
              <AlertDialogTrigger className="py-2 px-2 rounded-md bg-white border	border-slate-200">
                출석 QR코드 생성
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

            {/* 버튼 */}
            {/* <button
              type="button"
              className=" w-32	h-10 py-2 px-2 rounded-md bg-white border	border-slate-200"
            >
              <span className="text-sm text-slate-800">출석 QR코드 생성</span>
            </button> */}
            {/* <button type="button" className=" w-32	h-10 py-2 px-2 rounded-md 	bg-slate-800">
              <span className="text-sm text-white">신규 회원 등록</span>
            </button> */}
          </div>
        </nav>
        <main className="px-8">
          {/* 테이블 영역 */}
          <h2 className="sr-only">테이블 영역</h2>
          <TableSection />
        </main>
      </div>
      {/* <footer>
        <div>푸터</div>
      </footer> */}
    </>
  );
}
