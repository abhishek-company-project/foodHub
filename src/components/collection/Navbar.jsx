import { Search, HelpCircle, User, ShoppingCart, Briefcase } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Left section */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center text-white font-bold">
              S
            </div>
            <button className="flex items-center gap-1 text-sm font-medium">
              Other
              <span className="text-orange-500">▾</span>
            </button>
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-8 text-sm font-medium text-gray-700">
          <div className=" items-center hidden md:flex  gap-2 cursor-pointer hover:text-black">
            <Briefcase size={18} />
            Swiggy Corporate
          </div>
          <div className=" items-center  hidden md:flex gap-2 cursor-pointer hover:text-black">
            <Search size={18} />
            Search
          </div>
          <div className=" hidden md:flex items-center gap-2 cursor-pointer hover:text-black relative">
            <span className="absolute -top-2 right-0 text-[10px] bg-orange-500 text-white px-1 rounded">
              NEW
            </span>
            Offers
          </div>
          <div className=" hidden md:flex items-center gap-2 cursor-pointer hover:text-black">
            <HelpCircle size={18} />
            Help
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:text-black">
            <User size={18} />
            Sign In
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:text-black">
            <ShoppingCart size={18} />
            Cart
          </div>
        </div>
      </div>
    </nav>
  );
}
