
import PageContainer from '@/components/layout/page-container';
import UserForm from '@/features/users/components/user-form';

export const metadata = {
  title: 'Dashboard: User Details'
};

export default async function Page() {
  return (
    <PageContainer
      pageTitle='User Details'
      pageDescription='View or edit user information'
    >
      <div className="mx-auto max-w-2xl rounded-lg border p-6">
        <UserForm />
      </div>
    </PageContainer>
  );
}
