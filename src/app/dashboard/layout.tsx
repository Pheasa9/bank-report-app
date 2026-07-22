import KBar from '@/components/kbar';
import AppSidebar from '@/components/layout/app-sidebar';
import Header from '@/components/layout/header';
import { InfoSidebar } from '@/components/layout/info-sidebar';
import { InfobarProvider } from '@/components/ui/infobar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { Toaster } from 'sonner';

export const metadata: Metadata = {
  title: 'Next Shadcn Dashboard Starter',
  description: 'Basic dashboard with Next.js and Shadcn',
  robots: {
    index: false,
    follow: false
  }
};

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  // Persisting the sidebar state in the cookie.
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get('sidebar_state')?.value === 'true';
  return (
    <KBar>
      <SidebarProvider defaultOpen={defaultOpen}>
        <AppSidebar />
       <SidebarInset className="h-svh overflow-hidden">
  <Header />

  <div className="flex min-h-0 flex-1 overflow-hidden">
    <InfobarProvider defaultOpen={false}>
      <div className="flex min-h-0 flex-1 overflow-hidden">
        {children}
      </div>

      <Toaster />
      <InfoSidebar side="right" />
    </InfobarProvider>
  </div>
</SidebarInset>
      </SidebarProvider>
    </KBar>
  );
}