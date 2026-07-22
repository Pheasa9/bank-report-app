"use client";

import { useState } from "react";

import PageContainer from "@/components/layout/page-container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import Link from "next/link";

import { UserDataTable } from "@/features/users/components/user-data-table";
import { columns } from "@/features/users/components/column";
import { useUsers } from "@/hooks/use-users";
import { User } from "@/types/user";

export default function UserPageClient() {
    const [globalFilter, setGlobalFilter] = useState("");

    const { data, isLoading, error } = useUsers();

    const handleViewUser = (user: User) => {
        console.log("Selected:", user);
    };

    if (isLoading) {
        return <div>Loading users...</div>;
    }

    if (error) {
        return <div>Error loading users</div>;
    }

    return (
        <PageContainer
            pageTitle="Users"
            pageDescription="Manage users and their access permissions"
            pageHeaderAction={
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-3">
                    <input
                        className="w-full max-w-sm rounded-md border bg-background px-3 py-2 text-sm outline-none transition focus:border-primary"
                        placeholder="Search users..."
                        value={globalFilter}
                        onChange={(e) => setGlobalFilter(e.target.value)}
                    />
                    <Link
                        href="/dashboard/users/new"
                        className={cn(buttonVariants(), "text-xs md:text-sm flex-shrink-0")}
                    >
                        <Icons.add className="mr-2 h-4 w-4" />
                        Add User
                    </Link>
                </div>
            }
        >
            <UserDataTable
                columns={columns({ onView: handleViewUser })}
                data={data ?? []}
                globalFilter={globalFilter}
                onGlobalFilterChange={setGlobalFilter}
            />
        </PageContainer>
    );
}
