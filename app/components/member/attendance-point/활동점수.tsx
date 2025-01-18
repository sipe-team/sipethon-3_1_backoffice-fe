import { SelectContent, SelectItem, SelectTrigger, SelectValue } from '@radix-ui/react-select';
import { useState } from 'react';
import Edit from '~/components/svg/Edit';
import Fire from '~/components/svg/Fire';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import { Select } from '~/components/ui/select';
import { AttendancePoint, PointHistory } from '~/types/attendance';

interface Props {
  attendancePoint: AttendancePoint;
  selected기수: string;
  onChange: (v: string) => void;
}
export default function 활동점수({ attendancePoint, selected기수, onChange }: Props) {
  return (
    <Card className="w-full">
      <CardHeader className="w-full">
        <CardTitle className="flex justify-between w-full align-bottom">
          <span className="flex gap-[8px] text-lg font-bold">
            <div>활동점수</div>
            <활동점수Select
              value={selected기수}
              onChange={(v) => {
                onChange(v);
              }}
            />
          </span>
          <span>
            <Edit />
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>
          <현재활동점수 points={attendancePoint.points} maxPoints={attendancePoint.maxPoints} />
        </CardDescription>
        {attendancePoint.pointHistories.map((pointHistory, i) => (
          <출석점수정보 key={i} pointHistory={pointHistory} />
        ))}
      </CardContent>
    </Card>
  );
}

interface 현재활동점수Props {
  points: number;
  maxPoints: number;
}

const 현재활동점수 = ({ points, maxPoints }: 현재활동점수Props) => {
  return (
    <div className="flex gap-[8px] w-full bg-slate-100 border-slate-200 border-[1px] p-[12px] rounded-md">
      <Fire />
      <div className="flex gap-[8px]">
        <span className="text-slate-800 text-[14px] font-medium">
          {points}점 / {maxPoints}점
        </span>
      </div>
    </div>
  );
};

interface 활동점수SelectProps {
  value: string;
  onChange: (v: string) => void;
}
const 활동점수Select = ({ value, onChange }: 활동점수SelectProps) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[50px]">
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        {['1', '2', '3'].map((v) => (
          <SelectItem key={v} value={v}>
            {v}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
interface 출석점수정보Props {
  pointHistory: PointHistory;
}
const 출석점수정보 = ({ pointHistory }: 출석점수정보Props) => {
  return (
    <div className="flex py-[16px] border-b-[1px] border-b-slate-100 align-middle items-center">
      <span className="flex gap-[4px] w-[126px] font-semibold text-slate-500 text-[14px] align-middle items-center">
        <span className="font-semibold text-[14px] text-slate-600">{pointHistory.phase}회차</span>
        <span className="text-[14px] text-slate-400">{`(${pointHistory.date})`}</span>
      </span>
      <span className="flex gap-[8px] align-middle items-center">
        <span className="py-[2px] px-[2px] bg-slate-100 rounded-md">
          <span className="text-[14px] text-slate-800">{`${pointHistory.type} (${pointHistory.point})`}</span>
        </span>
        <span className="text-slate-400 text-[14px]">{`(사유: ${pointHistory.reason})`}</span>
      </span>
    </div>
  );
};
