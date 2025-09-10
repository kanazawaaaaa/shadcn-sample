"use client"

import * as React from "react"
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconPackages,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
  IconListCheck,
  IconEye,
} from "@tabler/icons-react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "横山健太",
    email: "kyokoyama@example.com",
    avatar: "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png",
  },
  navMain: [
    {
      title: "マイタスク",
      url: "/",
      icon: IconListCheck,
    },
    {
      title: "作品情報",
      url: "/contents",
      icon: IconDatabase,
    },
    {
      title: "契約",
      url: "/contract",
      icon: IconListDetails,
    },
    {
      title: "販売",
      url: "#",
      icon: IconPackages,
    },
    {
      title: "申請",
      url: "#",
      icon: IconFolder,
    },
    {
      title: "配信実績",
      url: "#",
      icon: IconChartBar,
    },
    {
      title: "検索",
      url: "#",
      icon: IconSearch,
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: IconCamera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: IconFileDescription,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: IconFileAi,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "設定",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "ヘルプ",
      url: "#",
      icon: IconHelp,
    },
  ],
  documents: [
    {
      name: "ユーザー",
      url: "#",
      icon: IconUsers,
    },
    {
      name: "権限",
      url: "#",
      icon: IconReport,
    },
    {
      name: "承認フロー",
      url: "#",
      icon: IconEye,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">NTV Wands</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
