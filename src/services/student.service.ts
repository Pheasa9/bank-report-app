
import api from "@/lib/student/api";
import { ApiResponse } from "@/types/api-response";
import { Student } from "@/types/student";
import { PageResponse } from "@/types/page-response";

type StudentPayload = Omit<Student, "id">;

export const getStudents = async (): Promise<PageResponse<Student>> => {
  const response = await api.get<PageResponse<Student>>("/students");
  return response.data;
};

export const createStudent = async (payload: StudentPayload): Promise<Student> => {
  const response = await api.post<ApiResponse<Student>>("/students", payload);
  return response.data.data;
};

export const updateStudent = async (
  id: number,
  payload: StudentPayload
): Promise<Student> => {
  const response = await api.post<ApiResponse<Student>>(
    `/students/update/${id}`,
    payload
  );
  return response.data.data;
};

export const deleteStudent = async (id: number): Promise<void> => {
  const response = await api.post<ApiResponse<void>>(`/students/delete/${id}`);
  return response.data.data;
};