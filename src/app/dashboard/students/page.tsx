import PageContainer from '@/components/layout/page-container';
import { getStudents } from '@/services/student.service';
import { StudentTable } from '@/components/student/student-table';

export const metadata = {
  title: 'Dashboard: Students',
};

export default async function StudentsPage() {
  const response = await getStudents();

  return (
    <PageContainer
      
    >
      <StudentTable data={response.content} />
    </PageContainer>
  );
}
