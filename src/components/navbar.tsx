"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./darkmodetoggle";
import { usePathname } from "next/navigation";
import { GithubIcon } from "lucide-react";

export const NavBar = () => {
  const pathname = usePathname();
  return (
    <div className="flex w-full h-14 shadow-xl bg-[#0b323133] dark:bg-[#0b323136]">
      <Link href="/" className="w-full h-full flex justify-start pl-2">
        <GithubIcon className="mt-1" size={50}></GithubIcon>{" "}
        <div className="flex items-center subpixel-antialiased font-black underline underline-offset-4 decoration-double text-2xl">
          GITHUB
        </div>
      </Link>
      <div className="w-full flex justify-end h-14 px-2">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <ModeToggle></ModeToggle>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink>
                {pathname !== "/auth/login" ? (
                  <form action="/api/auth/logout" method="POST">
                    <Button
                      className="text-black dark:text-white hover:bg-slate-100 dark:hover:bg-zinc-800"
                      type="submit"
                      variant="ghost"
                    >
                      Logout
                    </Button>
                  </form>
                ) : (
                  <form action="/api/auth/login" method="POST">
                    <Button
                      className="text-black dark:text-white hover:bg-slate-100 dark:hover:bg-zinc-800"
                      type="submit"
                      variant="ghost"
                    >
                      Login with GitHub
                    </Button>
                  </form>
                )}
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};
