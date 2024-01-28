import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import NavItem from "./NavItem";

const NavMenu = () => {
  return (
    <div className="flex items-start justify-center gap-5">
      <DropdownMenu>
        <DropdownMenuTrigger className="text-MediumGray transition-colors hover:text-AlmostBlack">
          Features
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-8 mt-2 px-4 py-4  shadow-2xl">
          <DropdownMenuItem>
            <NavItem image="/icon-todo.svg" title="Todo List" />
          </DropdownMenuItem>
          <DropdownMenuItem>
            <NavItem image="/icon-calendar.svg" title="Calendar" />
          </DropdownMenuItem>
          <DropdownMenuItem>
            <NavItem image="/icon-reminders.svg" title="Reminders" />
          </DropdownMenuItem>
          <DropdownMenuItem>
            <NavItem image="/icon-planning.svg" title="Planning" />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger className="text-MediumGray transition-colors hover:text-AlmostBlack">
          Company
        </DropdownMenuTrigger>
        <DropdownMenuContent className="ml-8 mt-2 px-4 py-4 text-MediumGray shadow-2xl">
          <DropdownMenuItem>History</DropdownMenuItem>
          <DropdownMenuItem>Our&nbsp;Team</DropdownMenuItem>
          <DropdownMenuItem>Blog</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Link
        href="#"
        className="text-MediumGray transition-colors hover:text-AlmostBlack"
      >
        Careers
      </Link>
      <Link
        href="#"
        className="text-MediumGray transition-colors hover:text-AlmostBlack"
      >
        About
      </Link>
    </div>
  );
};

export default NavMenu;
