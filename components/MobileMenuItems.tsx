import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import NavItem from "./NavItem";

const MobileMenuItem = () => {
  return (
    <div className="w-full pt-10 text-MediumGray">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Features</AccordionTrigger>
          <AccordionContent>
            <NavItem image="/icon-todo.svg" title="Todo List" />
          </AccordionContent>
          <AccordionContent>
            <NavItem image="/icon-calendar.svg" title="Calendar" />
          </AccordionContent>
          <AccordionContent>
            <NavItem image="/icon-reminders.svg" title="Reminders" />
          </AccordionContent>
          <AccordionContent>
            <NavItem image="/icon-planning.svg" title="Planning" />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Company</AccordionTrigger>
          <AccordionContent>History</AccordionContent>
          <AccordionContent>Our&nbsp;Team</AccordionContent>
          <AccordionContent>Blog</AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="flex flex-col space-y-6 py-2">
        <Link href="#">Careers</Link>
        <Link href="#">About</Link>
      </div>
    </div>
  );
};

export default MobileMenuItem;
