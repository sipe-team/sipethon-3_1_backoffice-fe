import { ChevronRight, Home, Inbox } from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
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
    <Sidebar variant="inset" className="bg-white">
      <SidebarContent className="bg-white">
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
    </Sidebar>
  );
}
