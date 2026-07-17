"use client"

import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import * as React from "react";

type ActionsMenuProps = {
  id: string;
  onViewCustomer?: () => void;
  onViewDetails?: () => void;
};

export default function ActionsMenu({ id, onViewCustomer, onViewDetails }: ActionsMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="h-8 w-8 p-0">
        <span className="sr-only">Open menu</span>
        <Icons.moreHorizontal className="h-4 w-4" />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>

        <DropdownMenuItem onClick={() => navigator.clipboard.writeText(id)}>
          Copy ID
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={onViewCustomer}>View customer</DropdownMenuItem>
        <DropdownMenuItem onClick={onViewDetails}>View details</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
