import { Button } from '../ui/button'
import AlertDialogLayout from './AlertDialogLayout'

export default function 회원제명Modal() {
  return <AlertDialogLayout
    title='회원제명'
    trigger={<Button>회원</Button>}
    onCancel={()=>{}}
    onConfirm={()=>{}}
  >
    <div>test</div>
  </AlertDialogLayout>
}