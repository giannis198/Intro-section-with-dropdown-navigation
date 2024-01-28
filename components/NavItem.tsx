import Image from "next/image";

interface NavItemProps {
  image: string;
  title: string;
}

const NavItem = ({ image, title }: NavItemProps) => {
  return (
    <div className="flex items-center gap-x-2">
      <Image src={image} alt={title} width={15} height={15} />
      <p className=" text-MediumGray hover:text-AlmostBlack">{title}</p>
    </div>
  );
};

export default NavItem;
