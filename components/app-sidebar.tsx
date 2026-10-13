import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import { ModeToggle } from "@/components/ui/theme-toggle-button"
import { FileText, Layers, Mail, User } from "lucide-react"
import Link from "next/link"

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="flex-row items-center h-16 gap-2">
        <ModeToggle />
        <Link href="/" className="flex items-center gap-2 w-full">
          <span className="font-bold text-3xl group-data-[collapsible=icon]:hidden">
            Yuri
          </span>
        </Link>
      </SidebarHeader>
      <hr />

      <SidebarContent>
        <SidebarMenu className="gap-1 p-2">
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="About Me" render={<Link href="/Aboutme" />}>
              <User />
              <span className="group-data-[collapsible=icon]:hidden">About Me</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Projects" render={<Link href="/Projects" />}>
              <FileText />
              <span className="group-data-[collapsible=icon]:hidden">Projects</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Contact" render={<Link href="/Contact" />}>
              <Mail />
              <span className="group-data-[collapsible=icon]:hidden">Contact</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Tech Stack" render={<Link href="/TechStack" />}>
              <Layers />
              <span className="group-data-[collapsible=icon]:hidden">Tech Stack</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter >
          <hr />
      </SidebarFooter>
    </Sidebar>
  )
}
