"use client";
import { ArrowUpRight, Command, ArrowLeft } from "lucide-react";
import { memo } from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  MemoizedSidebarMenuItem,
} from "@/components/ui/sidebar";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { BAR_ITEMS, SOCIALS } from "@/lib/constants";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const handleClick = (pathname: string) => {
  console.log(pathname);
  if (!pathname.startsWith("/bookmarks/")) return;
  window.history.back();
};

export const AppSidebar = memo(function AppSidebar() {
  const pathname: string = usePathname();
  const isBookmarkSlug = pathname.startsWith("/bookmarks/");

  return (
    <>
      {/* Mobile Topbar with Drawer */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-10 shadow flex items-center justify-between pl-8 p-4">
        <Drawer>
          {!isBookmarkSlug ? (
            <DrawerTrigger asChild>
              <button
                type="button"
                aria-label="Open menu"
                className="text-white text-xs"
              >
                <Command />
              </button>
            </DrawerTrigger>
          ) : (
            <button
              type="button"
              aria-label="Go back"
              className="text-white text-xs"
              onClick={() => handleClick(pathname)}
            >
              <ArrowLeft />
            </button>
          )}

          <DrawerContent
            className="p-0"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            aria-describedby="drawer-description"
          >
            <div id="drawer-description" className="sr-only">
              Navigation menu containing links to different sections of the
              website and social media profiles
            </div>
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
                      {BAR_ITEMS.map((item) => {
                        const isActive = pathname === item.url;
                        return (
                          <MemoizedSidebarMenuItem key={item.title}>
                            <SidebarMenuButton asChild isActive={isActive}>
                              <Link href={item.url}>
                                <item.icon size={16} />
                                <span>{item.title}</span>
                              </Link>
                            </SidebarMenuButton>
                          </MemoizedSidebarMenuItem>
                        );
                      })}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>

                <div className="h-px bg-sidebar-border mx-2" />
                <SidebarGroup>
                  <SidebarGroupLabel>Social</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {SOCIALS.map((item) => (
                        <MemoizedSidebarMenuItem key={item.title}>
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
                        </MemoizedSidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              </SidebarContent>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
      {/* Desktop Sidebar */}
      <div className="hidden md:block w-64 bg-white border-r">
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
                    {BAR_ITEMS.map((item) => {
                      const isActive = pathname === item.url;
                      return (
                        <MemoizedSidebarMenuItem key={item.title}>
                          <SidebarMenuButton asChild isActive={isActive}>
                            <a href={item.url}>
                              <item.icon size={16} />
                              <span>{item.title}</span>
                            </a>
                          </SidebarMenuButton>
                        </MemoizedSidebarMenuItem>
                      );
                    })}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>

              <div className="h-px bg-sidebar-border mx-2" />

              <SidebarGroup>
                <SidebarGroupLabel>Social</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {SOCIALS.map((item) => (
                      <MemoizedSidebarMenuItem key={item.title}>
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
                      </MemoizedSidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </div>
        </Sidebar>
      </div>
    </>
  );
});
