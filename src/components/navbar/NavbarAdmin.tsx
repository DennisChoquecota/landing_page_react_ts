import { Menu, X } from "lucide-react";
import { NAVBARADMIN as NAVBAR } from "@/db/db";

interface NavbarAdminProps {
  setDrawerOpen: () => void;
}

const NavbarAdmin = ({ setDrawerOpen }: NavbarAdminProps) => {
  return (
    <nav className={`${NAVBAR.bg === "" ? "bg-white" : NAVBAR.bg} shadow-md sticky top-0 w-full z-50`}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex space-x-3">
            <img src={NAVBAR.img} className="h-10 w-auto" />
            <Menu size="40" cursor="pointer" onClick={setDrawerOpen} />
          </div>

        </div>
      </div>
    </nav>
  );
};

export default NavbarAdmin;