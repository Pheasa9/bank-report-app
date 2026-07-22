"use client";

import { useEffect, useMemo, useState } from "react";
import { ColumnDef } from "@tanstack/react-table";

import { DataTable } from "@/features/users/components/data-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { StudentForm, StudentFormValues } from "@/components/student/student-form";
import { toast } from "sonner";

import { Icons } from "@/components/icons";
import { Student } from "@/types/student";
import {
  createStudent,
  deleteStudent,
  updateStudent,
} from "@/services/student.service";

type StudentTableProps = {
  data?: Student[];
};

type SheetMode = "add" | "edit";

export function StudentTable({ data = [] }: StudentTableProps) {
  const [students, setStudents] = useState<Student[]>(data);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [sheetMode, setSheetMode] = useState<SheetMode>("add");
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    setStudents(data);
  }, [data]);

  const filteredData = useMemo(
    () =>
      students.filter((student) => {
        const query = search?.toLowerCase() ?? "";
        return (
          String(student.name ?? "").toLowerCase().includes(query) ||
          String(student.email ?? "").toLowerCase().includes(query) ||
          String(student.id ?? "").toLowerCase().includes(query)
        );
      }),
    [students, search]
  );

  const pageCount = Math.max(1, Math.ceil(filteredData.length / pageSize));
  const currentPage = Math.min(page, pageCount);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return filteredData.slice(startIndex, startIndex + pageSize);
  }, [filteredData, currentPage, pageSize]);

  const openAddSheet = () => {
    setSelectedStudent(null);
    setSheetMode("add");
    setSheetOpen(true);
  };

  const openEditSheet = (student: Student) => {
    setSelectedStudent(student);
    setSheetMode("edit");
    setSheetOpen(true);
  };

  const handleSaveStudent = async (values: StudentFormValues) => {
    setIsSaving(true);

    try {
      if (sheetMode === "add") {
        const newStudent = await createStudent(values);
        setStudents((prev) => [newStudent, ...prev]);
        toast.success("Student added successfully.");
      } else if (selectedStudent) {
        const updatedStudent = await updateStudent(selectedStudent.id, values);
        setStudents((prev) =>
          prev.map((student) =>
            student.id === selectedStudent.id ? updatedStudent : student
          )
        );
        toast.success("Student updated successfully.");
      }
      setSheetOpen(false);
    } catch (error) {
      console.error(error);
      toast.error("Unable to save student. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteStudent = async (student: Student) => {
    if (!window.confirm(`Delete ${student.name}? This action cannot be undone.`)) {
      return;
    }

    try {
      await deleteStudent(student.id);
      setStudents((prev) => prev.filter((item) => item.id !== student.id));
      toast.success("Student deleted successfully.");
    } catch (error) {
      console.error(error);
      toast.error("Unable to delete student. Please try again.");
    }
  };

  const columns: ColumnDef<Student>[] = [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => <span className="font-medium">{row.getValue("name")}</span>,
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "age",
      header: "Age",
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => {
        const student = row.original;

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <span className="inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <Icons.dots className="h-4 w-4" />
                <span className="sr-only">Open actions</span>
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" sideOffset={6}>
              <DropdownMenuGroup>
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem onClick={() => openEditSheet(student)}>
                  <Icons.edit className="mr-2 h-4 w-4" />
                  Edit {student.name}
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => handleDeleteStudent(student)}
                  className="text-destructive"
                >
                  <Icons.trash className="mr-2 h-4 w-4" />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  return (
    <div className="space-y-6">
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent side="right" className="max-w-xl">
          <SheetHeader>
            <SheetTitle>{sheetMode === "add" ? "Add student" : "Edit student"}</SheetTitle>
          </SheetHeader>

          <StudentForm
            key={selectedStudent?.id ?? "new"}
            mode={sheetMode}
            initialValues={
              selectedStudent
                ? {
                    name: selectedStudent.name,
                    email: selectedStudent.email,
                    age: selectedStudent.age,
                  }
                : undefined
            }
            onSubmit={handleSaveStudent}
            submitLabel={sheetMode === "add" ? "Create student" : "Save changes"}
          />

          <SheetFooter className="space-y-2">
            <Button
              variant="ghost"
              onClick={() => setSheetOpen(false)}
              disabled={isSaving}
            >
              Cancel
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>

      <div className="flex flex-col gap-4 rounded-xl border bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Students</h2>
          <p className="text-sm text-muted-foreground">Manage student records and quickly search by name, email, or ID.</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Input
            placeholder="Search students…"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
              setPage(1);
            }}
            className="max-w-sm"
          />
          <Button className="w-full sm:w-auto" size="sm" onClick={openAddSheet}>
            <Icons.add className="mr-2 h-4 w-4" />
            Add student
          </Button>
        </div>
      </div>

      <div className="rounded-xl border bg-white shadow-sm">
        <div className="border-b p-4 sm:px-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">Showing {paginatedData.length} of {filteredData.length} results</p>
            <p className="text-sm text-muted-foreground">Search to filter the table data.</p>
          </div>
        </div>
        <div className="p-6">
          <DataTable columns={columns} data={paginatedData} />
        </div>
        <div className="flex flex-col gap-3 border-t p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Rows per page:</span>
            <select
              value={pageSize}
              onChange={(event) => {
                setPageSize(Number(event.target.value));
                setPage(1);
              }}
              className="rounded-md border border-input bg-background px-2 py-1 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/50"
            >
              {[5, 10, 20, 50].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center justify-between gap-3 text-sm">
            <p className="text-muted-foreground">
              Page {currentPage} of {pageCount}
            </p>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                disabled={currentPage === 1}
                onClick={() => setPage((value) => Math.max(1, value - 1))}
              >
                <Icons.chevronLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                disabled={currentPage === pageCount}
                onClick={() => setPage((value) => Math.min(pageCount, value + 1))}
              >
                Next
                <Icons.chevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
