import { FunctionComponent } from "react";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  return (
    <div className="flex flex-row justify-between items-center py-4 px-4 bg-red-500">
      <div className="">ASIM KACHHAP</div>
      <div className="flex flex-row justify-center items-center gap-2">
        <div>About</div>
        <div>Projects</div>
        <div>Blogs</div>
        <div className="mx-8">
          <button>Resume</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
