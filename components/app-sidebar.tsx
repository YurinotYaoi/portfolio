import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

import { ModeToggle } from "@/components/ui/theme-toggle-button"
import { FileText, Layers, Mail, User } from "lucide-react"
import { Button } from "./ui/button"

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="flex items-left">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div><ModeToggle/></div>
            <span className="font-bold">Angelo Uriel Solamo</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <Button variant="ghost" className="justify-start m-2"><User /> <span className="ml-2">About Me</span></Button>
        <Button variant="ghost" className="justify-start m-2"><FileText /> <span className="ml-2">Projects</span></Button>
        <Button variant="ghost" className="justify-start m-2"><Mail /> <span className="ml-2">Contact</span></Button>
        <Button variant="ghost" className="justify-start m-2"><Layers /> <span className="ml-2">Tech Stack</span></Button>
      </SidebarContent>
    </Sidebar>
  )
}

