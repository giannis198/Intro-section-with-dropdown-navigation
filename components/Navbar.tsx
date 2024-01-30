import Container from "./Container";
import Logo from "./Logo";
import MobileNavbar from "./MobileMenu";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <div className="fixed left-0 right-0 top-4 px-4">
      <Container>
        <div className="flex w-full items-center justify-between md:justify-start md:gap-x-16">
          <Logo />
          <div className="md:hidden">
            <MobileNavbar />
          </div>
          <div className="hidden w-full md:block">
            <NavLinks />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
