"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Button } from "./ui/button";
import { ModeToggle } from "./darkmodetoggle";

export const NavBar = () => {
  return (
    <div className="w-full flex justify-end bg-white dark:bg-black h-14 px-2">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <ModeToggle></ModeToggle>
            {/* <Link href="/home" legacyBehavior passHref>
              <Button className="text-black dark:text-white" variant="ghost">Dark Mode</Button>
            </Link> */}
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink>
              <form action="/api/auth/logout" method="POST">
                <Button className="text-black dark:text-white hover:bg-slate-100 dark:hover:bg-zinc-800" type="submit" variant="ghost">
                  Logout
                </Button>
              </form>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
