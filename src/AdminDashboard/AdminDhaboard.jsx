import React from 'react'
import Sidebar from '../components/dashboard/Sidebar'
import Header from '../components/dashboard/Header'
import { Outlet } from 'react-router'
import {
  LayoutDashboard,
  FileText,
  Package,
  Users,
  CreditCard,
  Receipt,
  Settings,
  ClipboardCheck,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

{/* <ClipboardCheck /> */}
function AdminDhaboard() {
  
    const menuItems = [
      { name: "Dashboard-admin", icon: LayoutDashboard, active: true },
      { name: "Orders", icon: Receipt },
      { name: "Menu Items", icon: Package },
      { name: "Customers", icon: Users },
      { name: "Reports", icon: FileText },
      { name: "Transactions", icon: CreditCard },
      { name: "Settings", icon: Settings },
      { name: "Help", icon: ClipboardCheck },
    ];
  return (
    <div className='w-screen h-screen  flex '>
       <Sidebar data={menuItems}/>
        <div className='w-full h-full '>
            <Header/>
            <Outlet/>
        </div>
    </div>
  )
}

export default AdminDhaboard