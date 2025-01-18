import React from 'react';
import { cn } from '~/lib/utils';
import SipeMainLogo from '../svg/SipeMainLogo';
import UserProfile from './UserProfile';
import { useAuthStore } from '~/store/auth';

export function Navbar({ ...props }: React.HTMLAttributes<HTMLElement>) {
  const { user } = useAuthStore();

  return (
    <nav
      className={cn(
        'w-full h-[60px] border-b border-gray-200 bg-white px-6 dark:border-gray-800 dark:bg-gray-950',
      )}
      {...props}
    >
      <div className="flex h-full items-center justify-between">
        <div className="flex items-center gap-4">
          <SipeMainLogo width={80} height={22} />
        </div>

        <div className="flex items-center gap-4">
          <UserProfile name={user?.name ?? ''} image={user?.imageUrl ?? ''} />
        </div>
      </div>
    </nav>
  );
}
