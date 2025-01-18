import React from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';
import { useForm, type UseFormReturn } from 'react-hook-form';
import DialogLayout from '~/components/modals/DialogLayout';
import { useState } from 'react';
import { startTimeList } from '~/constants/qrcode';
import { AttendanceType } from '~/types/attendance';

interface FormValues {
  term: number; //기수
  phase: number; //회차
  startTime: string; //시작 시간
  lateMinutes: string; //지각 기준
  absenceMinutes: string; //결석 기준
}

interface AttendanceEditFormModalProps {
  trigger?: React.ReactNode;
  attendance: AttendanceType;
  onSubmit: (data: FormValues) => void;
}

export default function AttendanceEditFormModal({
  trigger,
  attendance,
  onSubmit,
}: AttendanceEditFormModalProps) {
  const form = useForm<FormValues>({
    defaultValues: {
      term: 0,
      phase: 0,
      startTime: '',
      lateMinutes: '',
      absenceMinutes: '',
    },
  });

  const [isOpen, setIsOpen] = useState(false);
  const { control, handleSubmit } = form;

  const handleClickSubmit = (data: FormValues) => {
    onSubmit(data);
    setIsOpen(false);
  };

  const handleClickCancel = () => {
    setIsOpen(false);
  };

  return (
    <DialogLayout
      open={isOpen}
      onOpenChange={setIsOpen}
      trigger={trigger}
      title="출석 정보 수정"
      onConfirm={handleSubmit(handleClickSubmit)}
      onCancel={handleClickCancel}
      confirmText="생성"
      cancelText="취소"
    >
      <div className="flex flex-col gap-4">
        <div className="flex w-full justify-between">
          <div className="text-gray-500 font-semibold">기수/회차</div>
          <div className="flex items-center gap-2">
            <div>{`${attendance.term}기 ${attendance.phase}회차`}</div>
            <div className="text-gray-400">{`(25.01.14)`}</div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray-200" />
        <Form {...(form as UseFormReturn<FormValues>)}>
          <FormField
            control={control}
            name="startTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>시작 시간</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="시작 시간을 선택해주세요." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {startTimeList.map((startTime) => (
                      <SelectItem key={startTime.value} value={startTime.value}>
                        {startTime.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex gap-2">
            <FormField
              control={control}
              name="lateMinutes"
              render={({ field }) => (
                <FormItem className="grow">
                  <FormLabel>지각 기준</FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="지각 기준을 선택해주세요." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1">1회차 (24.01.01)</SelectItem>
                      <SelectItem value="2">2회차 (25.01.02)</SelectItem>
                      <SelectItem value="3">3회차 (26.01.03)</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="absenceMinutes"
              render={({ field }) => (
                <FormItem className="grow">
                  <FormLabel>결석 기준</FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="결석 기준을 선택해주세요." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1">1회차 (24.01.01)</SelectItem>
                      <SelectItem value="2">2회차 (25.01.02)</SelectItem>
                      <SelectItem value="3">3회차 (26.01.03)</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Form>
      </div>
    </DialogLayout>
  );
}
