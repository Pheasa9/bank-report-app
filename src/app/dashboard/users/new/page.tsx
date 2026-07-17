import PageContainer from '@/components/layout/page-container';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';
import Link from 'next/link';
import UserForm from '@/features/users/components/user-form';

export const metadata = {
  title: 'Dashboard: Add User'
};

export default function AddUserPage() {
  return (
    <PageContainer
      pageTitle='Add New User'
      pageDescription='Create a new user account'
      pageHeaderAction={
        <Link href='/dashboard/users' className={cn(buttonVariants({ variant: 'outline' }), 'text-xs md:text-sm')}>
          <Icons.chevronLeft className='mr-2 h-4 w-4' /> Back
        </Link>
      }
    >
      <div className="mx-auto max-w-2xl rounded-lg border p-6">
        <UserForm />
      </div>
    </PageContainer>
  );
}
