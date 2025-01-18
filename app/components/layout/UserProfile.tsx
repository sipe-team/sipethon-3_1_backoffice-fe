import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

type UserProfileProps = {
  name: string;
  image: string;
};

function UserProfile({ name, image }: UserProfileProps) {
  return (
    <div className="flex items-center gap-2">
      <Avatar className="w-[28px] h-[28px]">
        <AvatarImage src={image} />
        <AvatarFallback>{name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="text-sm font-medium text-slate-800">{name}</div>
    </div>
  );
}

export default UserProfile;
