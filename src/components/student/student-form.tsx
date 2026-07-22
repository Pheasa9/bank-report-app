"use client";

import { useForm, type Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Student } from "@/types/student";

const studentSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Enter a valid email"),
  age: z.coerce.number().min(1, "Age is required"),
});

export type StudentFormValues = z.infer<typeof studentSchema>;

type StudentFormProps = {
  mode: "add" | "edit";
  initialValues?: Partial<StudentFormValues>;
  onSubmit: (values: StudentFormValues) => void | Promise<void>;
  submitLabel?: string;
};

export function StudentForm({
  mode,
  initialValues,
  onSubmit,
  submitLabel,
}: StudentFormProps) {
  const form = useForm<StudentFormValues>({
    resolver: zodResolver(studentSchema) as Resolver<StudentFormValues>,
    defaultValues: {
      name: initialValues?.name ?? "",
      email: initialValues?.email ?? "",
      age: initialValues?.age ?? undefined,
    },
  });

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field>
          <FieldLabel htmlFor="name">Name</FieldLabel>
          <Input id="name" placeholder="Enter student name" {...form.register("name")} />
          <FieldError>{form.formState.errors.name?.message}</FieldError>
        </Field>

        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" type="email" placeholder="Enter student email" {...form.register("email")} />
          <FieldError>{form.formState.errors.email?.message}</FieldError>
        </Field>
      </div>

      <Field>
        <FieldLabel htmlFor="age">Age</FieldLabel>
        <Input id="age" type="number" placeholder="Enter age" {...form.register("age", { valueAsNumber: true })} />
        <FieldError>{form.formState.errors.age?.message}</FieldError>
      </Field>

      <Button type="submit" className="w-full">
        {submitLabel ?? (mode === "add" ? "Add student" : "Save changes")}
      </Button>
    </form>
  );
}
