// import React, { useState } from 'react';
// import { useForm, Controller, FormProvider } from 'react-hook-form';
// import { FormControl, FormLabel, FormItem, FormMessage } from '~/components/ui/form';
// import { Input } from '~/components/ui/input';
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from '~/components/ui/alert-dialog';

// const initialFields = [
//   { name: 'name', label: '이름', placeholder: '이름을 입력해주세요' },
//   { name: 'phase', label: '시작 기수', placeholder: '기수를 입력해주세요' },

//   { name: 'region', label: '거주지', placeholder: '거주지를 입력해주세요' },
//   { name: 'birth', label: '생년월일', placeholder: '1998.11.18' },
//   { name: 'email', label: '이메일', placeholder: '이메일을 입력해주세요' },
//   { name: 'phone', label: '연락처', placeholder: '전화번호를 입력해주세요' },
// ];

// export default function MemberRegistration() {
//   const methods = useForm();
//   const { control, handleSubmit } = methods;
//   const [fields, setFields] = useState(initialFields);

//   const onSubmit = (data: any) => {
//     console.log(data);
//   };

//   const updateField = (index: number, key: string, value: any) => {
//     const newFields = [...fields];
//     newFields[index][key] = value;
//     setFields(newFields);
//   };

//   return (
//     <AlertDialog>
//       <AlertDialogTrigger className="w-32	h-10 py-2 px-2 rounded-md 	bg-slate-800  text-sm text-white">
//         신규 회원 등록
//       </AlertDialogTrigger>
//       <AlertDialogContent>
//         <AlertDialogHeader>
//           <AlertDialogTitle>신규 회원 등록</AlertDialogTitle>
//           <AlertDialogDescription>
//             <FormProvider {...methods}>
//               <form onSubmit={handleSubmit(onSubmit)}>
//                 {fields.map((field, index) => (
//                   <div key={index} className="py-4">
//                     <FormLabel>{field.label}</FormLabel>
//                     <FormControl>
//                       <Controller
//                         name={field.name}
//                         control={control}
//                         render={({ field }) => <Input placeholder={field.placeholder} {...field} />}
//                       />
//                     </FormControl>
//                   </div>
//                 ))}
//               </form>
//             </FormProvider>
//           </AlertDialogDescription>
//         </AlertDialogHeader>
//         <AlertDialogFooter>
//           <AlertDialogCancel className="text-black">취소</AlertDialogCancel>
//           <AlertDialogAction onClick={onSubmit}>확인</AlertDialogAction>
//         </AlertDialogFooter>
//       </AlertDialogContent>
//     </AlertDialog>
//   );
// }

import React from 'react';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '~/components/ui/button';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/form';
import { Input } from '~/components/ui/input';
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

const formSchema = z.object({
  name: z.string().min(2, { message: '이름은 최소 2글자 이상이어야 합니다.' }),
  phase: z.string({ required_error: '기수를 선택해주세요.' }),
  occupation: z.string({ required_error: '직군을 선택해주세요.' }),
  region: z.string().min(2, { message: '거주지를 입력해주세요.' }),
  birth: z.string({ required_error: '생년월일을 선택해주세요.' }),
  email: z.string().email({ message: '유효한 이메일 주소를 입력해주세요.' }),
  phone: z.string().min(10, { message: '전화번호를 입력해주세요.' }),
});

export default function MemberRegistration() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phase: '',
      occupation: '',
      region: '',
      birth: '',
      email: '',
      phone: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger className="w-32 h-10 py-2 px-2 rounded-md bg-slate-800 text-sm text-white">
        신규 회원 등록
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>신규 회원 등록</AlertDialogTitle>
          <AlertDialogDescription>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>이름</FormLabel>
                      <FormControl>
                        <Input placeholder="이름을 입력해주세요" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phase"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>시작 기수</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="기수를 선택해주세요" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="1기">1기</SelectItem>
                          <SelectItem value="2기">2기</SelectItem>
                          <SelectItem value="3기">3기</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="occupation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>직군</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="직군을 선택해주세요" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="FE">FE</SelectItem>
                          <SelectItem value="BE">BE</SelectItem>
                          <SelectItem value="Fullstack">Fullstack</SelectItem>
                          <SelectItem value="PM">PM</SelectItem>
                          <SelectItem value="APP">App</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="region"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>거주지</FormLabel>
                      <FormControl>
                        <Input placeholder="거주지를 입력해주세요" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="birth"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>생년월일</FormLabel>
                      <FormControl>
                        <DatePicker
                          selected={field.value}
                          onChange={field.onChange}
                          dateFormat="yyyy-MM-dd"
                          placeholderText="생년월일을 선택해주세요"
                          className="w-full border border-gray-300 rounded-md p-2 bg-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>이메일</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="이메일을 입력해주세요" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>연락처</FormLabel>
                      <FormControl>
                        <Input placeholder="전화번호를 입력해주세요" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* <Button type="submit">제출</Button> */}
              </form>
            </Form>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="text-black">취소</AlertDialogCancel>
          <AlertDialogAction onClick={onSubmit}>확인</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
