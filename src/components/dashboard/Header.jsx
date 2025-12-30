import { useState, useRef, useEffect } from "react";
import {
  Search,
  Bell,
  MessageSquare,
  Gift,
  Settings,
  User,
  LogOut,
} from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="w-full bg-white shadow-sm px-4 md:px-8 py-3 flex items-center justify-between">
      {/* Left - Search */}
      <div className="flex items-center gap-3 w-full max-w-sm">
        <div className="relative w-full">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Find something here..."
            className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FF5200]"
          />
        </div>
      </div>

      {/* Center - Nav (hidden on mobile) */}
      <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-600">
        <a href="#" className="hover:text-[#FF5200]">
          Socials
        </a>
        <a href="#" className="hover:text-[#FF5200]">
          Live Training
        </a>
        <a href="#" className="hover:text-[#FF5200]">
          Blog
        </a>
        <a href="#" className="hover:text-[#FF5200]">
          Trading News
        </a>
      </nav>

      {/* Right - Icons */}
      <div className="flex items-center gap-3 relative">
        <IconButton icon={Bell} badge="12" />
        <IconButton icon={MessageSquare} badge="5" />
        <IconButton icon={Gift} badge="2" />

        {/* Settings */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setOpen(!open)}
            className="w-10 h-10 rounded-full bg-[#FF5200] text-white flex items-center justify-center"
          >
            <Settings size={18} />
          </button>

          {/* Dropdown Modal */}
          {open && (
            <div className="absolute right-0 mt-3 w-44 bg-white rounded-xl shadow-lg border p-2 z-50">
              <button className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-gray-100 text-sm">
                <User size={16} />
                Profile
              </button>
              <button className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-gray-100 text-sm text-red-500">
                <LogOut size={16} />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

function IconButton({ icon: Icon, badge }) {
  return (
    <button className="relative w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
      <Icon size={18} className="text-gray-600" />
      {badge && (
        <span className="absolute -top-1 -right-1 bg-[#FF5200] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          {badge}
        </span>
      )}
    </button>
  );
}
