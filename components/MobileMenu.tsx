import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import NavLinks from "./NavLinks";


const MobileMenu = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <NavLinks />
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileMenu;
