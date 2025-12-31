import Sidebar from "../components/dashboard/Sidebar";
import Header from "../components/dashboard/Header";
import { SIDEBAR_CONFIG } from "../sidebarConfig";
import { Outlet } from "react-router";

function AdminDhaboard() {
  const role = "RESTAURANT"; // from auth / redux / context

  return (
    <div className="w-screen h-screen flex">
      <Sidebar menu={SIDEBAR_CONFIG[role]} />
      <div className="w-full h-full">
        <Header />
        <Outlet/>
      </div>
    </div>
  );
}

export default AdminDhaboard;