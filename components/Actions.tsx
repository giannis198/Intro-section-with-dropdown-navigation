import { Button } from "./ui/button";

const Actions = () => {
  return (
    <div className="mt-10 flex w-full flex-col justify-end gap-x-4 text-MediumGray transition-colors hover:text-AlmostBlack md:mt-0 md:flex-row md:items-center">
      <Button variant="ghost" className="hover:text-AlmostBlack ">
        Login
      </Button>
      <Button
        variant="outline"
        className="rounded-xl border-2 border-MediumGray py-6 hover:border-AlmostBlack hover:bg-none hover:text-AlmostBlack"
      >
        Register
      </Button>
    </div>
  );
};

export default Actions;
