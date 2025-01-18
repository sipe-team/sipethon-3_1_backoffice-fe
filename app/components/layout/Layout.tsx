import React from 'react';
import { SidebarInset, SidebarProvider } from '~/components/ui/sidebar';
import { AppSidebar } from '~/components/layout/AppSidebar';
import { Navbar } from '~/components/layout/Navbar';
import BreadCrumb, { BreadCrumbProps } from './BreadCrumb';

export type LayoutProps = {
  breadcrumbs?: BreadCrumbProps['breadcrumbs'];
  children: React.ReactNode;
};

export default function Layout({ children, breadcrumbs }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar />
      <div className="relative">
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <main className="flex-1">
              {breadcrumbs && <BreadCrumb breadcrumbs={breadcrumbs} />}
              <div>{children}</div>
            </main>
          </SidebarInset>
        </SidebarProvider>
      </div>
    </div>
  );
}
