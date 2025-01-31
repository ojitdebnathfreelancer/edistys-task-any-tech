import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-orange-500">
      <nav className="root-container">
        <Image src="/logo.svg" alt="logo" width={100} height={100} />
        This is navbar
      </nav>
    </div>
  );
};

export default Navbar;
