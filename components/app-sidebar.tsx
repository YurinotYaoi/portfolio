import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarRail,
} from "@/components/ui/sidebar"

import { ModeToggle } from "@/components/ui/theme-toggle-button"

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
        <SidebarMenuBadge>
        </SidebarMenuBadge>
      </SidebarContent>
    </Sidebar>
  )
}

