import { SidebarInset, SidebarProvider, SidebarTrigger } from '~/components/ui/sidebar';
import { AppSidebar } from '~/components/layout/AppSidebar';
import { Navbar } from '~/components/layout/Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex">
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <main className="flex-1">
              <div className="p-4">
                <SidebarTrigger />
                {children}
              </div>
            </main>
          </SidebarInset>
        </SidebarProvider>
      </div>
    </div>
  );
}
