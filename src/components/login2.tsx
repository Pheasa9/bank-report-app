"use client";

import { redirect, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { authUsers } from "@/app/constants/mock-api-users";
import { useState } from "react";


// Validation Schema
export const loginSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters"),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .nonempty("Password is required"),
});


type LoginForm = z.infer<typeof loginSchema>;



export default function Login2() {

  const router = useRouter();
  const [authLoginErrorMessage ,setAuthLoginErrorMessage] = useState<string>("");

  const form = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),

    defaultValues: {
      username: "",
      password: "",
    },
  });

  const username = form.watch("username");

  const onSubmit = (data: LoginForm) => {

    console.log("Login Data:", data);

    // API call here
    // await loginService(data)
    const { username, password } = authUsers;
    if (data.username === username && data.password === password) {
      console.log("Login successful");
      router.replace("/dashboard");
    } else {
      setAuthLoginErrorMessage("Invalid username or password");
    }

  };



  return (

    <div className="min-h-screen flex items-center justify-center bg-muted px-4">


      <Card className="w-full max-w-md shadow-lg">


        <CardHeader className="text-center">


          <div
            className="
              mx-auto mb-4 
              flex h-12 w-12 
              items-center justify-center 
              rounded-full 
              bg-primary 
              text-primary-foreground 
              font-bold 
              text-xl
            "
          >
            P
          </div>


          <CardTitle className="text-2xl">
            Welcome Back {username && `, ${username}`}
             
          </CardTitle>
          <p className="text-sm text-red-500">
            {authLoginErrorMessage}
          </p>

          <CardDescription>
            Sign in to your account
          </CardDescription>


        </CardHeader>



        <CardContent>


          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5"
          >


            {/* Username */}

            <div className="space-y-2">


              <label
                htmlFor="username"
                className="text-sm font-medium"
              >
                Username
              </label>


              <Input

                id="username"

                placeholder="Enter username"

                {...form.register("username")}

              />


              {
                form.formState.errors.username && (

                  <p className="text-sm text-destructive">

                    {form.formState.errors.username.message}

                  </p>

                )
              }


            </div>





            {/* Password */}

            <div className="space-y-2">


              <label
                htmlFor="password"
                className="text-sm font-medium"
              >
                Password
              </label>


              <Input

                id="password"

                type="password"

                placeholder="Enter password"

                {...form.register("password")}

              />



              {
                form.formState.errors.password && (

                  <p className="text-sm text-destructive">

                    {form.formState.errors.password.message}

                  </p>

                )
              }


            </div>




            <Button
              type="submit"
              className="w-full"
            >
              Sign In
            </Button>



          </form>


        </CardContent>


      </Card>


    </div>

  );
}
