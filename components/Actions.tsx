import { Button } from "./ui/button";

const Actions = () => {
  return (
    <div className="mt-10 flex w-full flex-col justify-end gap-x-4 text-MediumGray transition-colors hover:text-AlmostBlack md:mt-0  md:flex-row md:items-center">
      <Button variant="ghost">Login</Button>
      <Button variant="outline" className="rounded-xl border-black py-6">
        Register
      </Button>
    </div>
  );
};

export default Actions;
