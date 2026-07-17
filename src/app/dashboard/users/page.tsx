import PageContainer from '@/components/layout/page-container';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';
import Link from 'next/link';
import UserListPage from '@/features/users/components/user-list-page';
import { DataTable } from '@/features/users/components/data-table';
import { columns } from '@/features/users/components/columns';
import { payments } from '@/features/users/mock-data/user-data-reasone';

export const metadata = {
  title: 'Dashboard: Users'
};

export default function Page() {
  return (
    <PageContainer
      pageTitle='Users'
      pageDescription='Manage users and their access permissions'
      pageHeaderAction={
        <Link href='/dashboard/users/new' className={cn(buttonVariants(), 'text-xs md:text-sm')}>
          <Icons.add className='mr-2 h-4 w-4' /> Add User
        </Link>
      }
    >
       <DataTable 
           columns={columns}
           data={payments}
       
       />
    </PageContainer>
  );
}