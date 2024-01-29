import Link from "next/link";
import NavItem from "./NavItem";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

const NavMenu = () => {
  return (
    <div className="flex items-center justify-center gap-x-4">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={cn(
                "text-MediumGray transition-colors hover:text-AlmostBlack",
              )}
            >
              <p>Features</p>
            </NavigationMenuTrigger>
            <NavigationMenuContent className="shadow-2xl ">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#">
                    <NavItem image="/icon-todo.svg" title="Todo List" />
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#">
                    <NavItem image="/icon-calendar.svg" title="Calendar" />
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#">
                    <NavItem image="/icon-reminders.svg" title="Reminders" />
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#">
                    <NavItem image="/icon-planning.svg" title="Planning" />
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <NavigationMenu>
        <NavigationMenuList className="flex flex-1 items-center justify-center gap-x-4">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-MediumGray transition-colors hover:text-AlmostBlack">
              Company
            </NavigationMenuTrigger>
            <NavigationMenuContent className="text-MediumGray">
              <NavigationMenuList>
                <NavigationMenuItem>History</NavigationMenuItem>
                <NavigationMenuItem>Our&nbsp;Team</NavigationMenuItem>
                <NavigationMenuItem>Blog</NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#" legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} text-MediumGray transition-colors hover:text-AlmostBlack`}
              >
                Careers
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#" legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} text-MediumGray transition-colors hover:text-AlmostBlack`}
              >
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavMenu;
