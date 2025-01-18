import type { Route } from './+types/member.$id';

export default function MemberDetailPage ({params}:Route.ComponentProps) {
  
  return <div>Member Detail page : {params.id}</div>
}