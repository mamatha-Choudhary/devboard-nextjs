"use client";

import { ChevronDown, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import type { StatusFilterOption } from "../constants/project-status-options";

interface ProjectStatusDropdownProps {
  value: string;
  options: StatusFilterOption[];
  onChange: (value: string) => void;
  label?: string;
}

/** Pure presentation component rendering the status filter dropdown using Design System primitives. */
export const ProjectStatusDropdown = ({
  value,
  options,
  onChange,
  label = "Status",
}: ProjectStatusDropdownProps) => {
  const selectedOption = options.find((opt) => opt.value === value) ?? options[0];

  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-xs font-medium text-muted-foreground">{label}</span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="h-10 justify-between gap-2 border-border font-normal">
            <span className="truncate">{selectedOption.label}</span>
            <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="start" className="w-44">
          <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {options.map((option) => {
            const isSelected = option.value === value;
            return (
              <DropdownMenuItem
                key={option.value}
                onClick={() => onChange(option.value)}
                className="justify-between"
              >
                <span>{option.label}</span>
                {isSelected && <Check className="h-4 w-4 text-primary" />}
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
