"use client"

import * as React from "react"
import { ChevronsUpDown, Plus, Hotel, BookOpenCheck } from 'lucide-react';
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation";


export function NavMenu() {
    const navigation = useRouter()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <ChevronsUpDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem className="cursor-pointer flex gap-2 items-center" 
        onClick={() => navigation.push('/hotel/new')}>
          <Plus size={15}/> <span>Add hotel</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer flex gap-2 items-center" 
        onClick={() => navigation.push('/my-hotels')}>
          <Hotel size={15}/> <span>My hotels</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer flex gap-2 items-center" onClick={() => navigation.push('/my-bookings')}>
          <BookOpenCheck size={15} /> <span>My Bookings</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default NavMenu;