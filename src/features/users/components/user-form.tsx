"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
} from "@/components/ui/field";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


const formSchema = z.object({
  id: z.string().min(1, "ID is required"),
  fullName: z.string().min(1, "Full name is required"),
  gender: z.string().min(1, "Gender is required"),
  phoneNumber: z.string().min(8, "Phone number is required"),
});


type UserFormValues = z.infer<typeof formSchema>;


export default function UserForm() {

  const form = useForm<UserFormValues>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      id: "",
      fullName: "",
      gender: "",
      phoneNumber: "",
    },
  });


  function onSubmit(values: UserFormValues) {

    console.log(values);

    toast.success("User created successfully", {
      description: values.fullName,
    });

  }


  return (

    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="max-w-3xl mx-auto space-y-8 py-10"
    >


      {/* ID + Full Name */}

      <div className="grid grid-cols-2 gap-5">


        <Field>

          <FieldLabel htmlFor="id">
            ID
          </FieldLabel>


          <Input
            id="id"
            placeholder="Enter user id"
            {...form.register("id")}
          />
          <FieldError>
            {form.formState.errors.id?.message}
          </FieldError>


        </Field>



        <Field>

          <FieldLabel htmlFor="fullName">
            Full Name
          </FieldLabel>


          <Input
            id="fullName"
            placeholder="Enter full name"
            {...form.register("fullName")}
          />


         


          <FieldError>
            {form.formState.errors.fullName?.message}
          </FieldError>


        </Field>


      </div>



      {/* Gender */}

      <Field>

        <FieldLabel>
          Gender
        </FieldLabel>


        <Controller
          name="gender"
          control={form.control}

          render={({ field }) => (

            <Select
              value={field.value}
              onValueChange={field.onChange}
            >

              <SelectTrigger>
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>


              <SelectContent>

                <SelectItem value="male">
                  Male
                </SelectItem>


                <SelectItem value="female">
                  Female
                </SelectItem>


                <SelectItem value="other">
                  Other
                </SelectItem>


              </SelectContent>


            </Select>

          )}

        />


        <FieldError>
          {form.formState.errors.gender?.message}
        </FieldError>


      </Field>



      {/* Phone */}

      <Field>

        <FieldLabel htmlFor="phoneNumber">
          Phone Number
        </FieldLabel>

        <Controller
          name="phoneNumber"
          control={form.control}
          render={({ field }) => (
            <PhoneInput
              id="phoneNumber"
              placeholder="012 345 678"
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />

        
        <FieldError>
          {form.formState.errors.phoneNumber?.message}
        </FieldError>

      </Field>



      <Button type="submit">
        Save User
      </Button>


    </form>

  );
}