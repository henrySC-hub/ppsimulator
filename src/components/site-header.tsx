"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, ChevronDown, HelpCircle } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="md:hidden" />
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Tablero</h1>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="p-0 h-auto -mt-1 text-muted-foreground hover:text-foreground">
                  Tarragona - Iquique <ChevronDown className="h-4 w-4 ml-1 text-primary" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>Tarragona - Iquique</DropdownMenuItem>
                <DropdownMenuItem>Otro Local</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          <Link href="/help" passHref>
            <Button variant="outline" className="rounded-full">
              <HelpCircle className="h-4 w-4 mr-2" />
              Ayuda
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notificaciones</span>
          </Button>
          <Avatar className="h-9 w-9">
            <AvatarFallback>P</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
