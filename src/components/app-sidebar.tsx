"use client";
import {
  Home,
  Send,
  Github,
  Linkedin,
  ArrowUpRight,
  LucideIcon,
  WandSparkles,
  ScrollText
} from "lucide-react";
import Image from "next/image";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { usePathname } from "next/navigation";
import { memo } from "react";

type SidebarMenuItem = {
  title: string;
  url: string;
  icon: LucideIcon;
};

const items: SidebarMenuItem[] = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "CV",
    url: "cv",
    icon: ScrollText
  },
  {
    title: "Journey",
    url: "/journey",
    icon: Send,
  },
  {
    title: "Stack",
    url: "/stack",
    icon: WandSparkles,
  },
];

const socialItems = [
  {
    title: "Github",
    url: "https://github.com/TiagoRodrigues1",
    icon: Github,
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/josetiagorodrigues",
    icon: Linkedin,
  },
];

export const AppSidebar = memo(function AppSidebar() {
  const pathname: string = usePathname();

  return (
    <Sidebar>
      <div className="text-sm">
        <SidebarHeader>
          <div className="inline-flex gap-4">
            <Image
              height={40}
              width={40}
              src="/me.jpeg"
              alt="Me"
              className="rounded-xl"
            />
            <div className="flex flex-col">
              <span className="font-semibold">Tiago Rodrigues</span>
              <span className="text-gray-300">Software Engineer</span>
            </div>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => {
                  const isActive: boolean = pathname === item.url;
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild isActive={isActive}>
                        <a href={item.url}>
                          <item.icon size={16} />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <div className="h-px shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px bg-sidebar-border mx-2 w-auto"></div>
          <SidebarGroup>
            <SidebarGroupLabel>Social</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {socialItems.map((item: SidebarMenuItem) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a
                        href={item.url}
                        target="_blank"
                        className="flex items-center justify-between gap-2 p-2 hover:bg-gray-200"
                      >
                        <span className="inline-flex items-center gap-2">
                          <item.icon size={16} />
                          <span>{item.title}</span>
                        </span>
                        <ArrowUpRight size={16} />
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </div>
    </Sidebar>
  );
});
