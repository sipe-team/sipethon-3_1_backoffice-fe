import { ChevronRight, Home, Inbox, Settings } from 'lucide-react';

import {
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '~/components/ui/sidebar';

const items = [
  {
    title: '대시보드',
    url: '/',
    icon: Home,
  },
  {
    title: '회원 관리',
    url: '/members',
    icon: Inbox,
  },
];

export function AppSidebar() {
  return (
    <div className="w-[--sidebar-width] shadow-[0px_4px_4px_0px_#F1F5F9]">
      <SidebarContent>
        <SidebarGroup className="p-6">
          <SidebarGroupContent>
            <SidebarMenu className="flex flex-col gap-2">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton className="text-slate-800" asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                      <ChevronRight className="ml-auto" />
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-6">
        <Settings />
      </SidebarFooter>
    </div>
  );
}
