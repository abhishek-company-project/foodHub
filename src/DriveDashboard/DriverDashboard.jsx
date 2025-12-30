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
  HelpCircle,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

function DriverDashboard() {

    
    const menuItems = [
      { name: "Dashboard-driver", icon: LayoutDashboard, active: true },
      { name: "My Orders", icon: Receipt },
      { name: "My Address", icon: Package },
      { name: "Biling", icon: Users },
      { name: "Reports", icon: FileText },
    //   { name: "Transactions", icon: CreditCard },
      { name: "Settings", icon: Settings },
      { name: "Help", icon: HelpCircle },
    ];
    

  return (
     <div className='w-screen h-screen  flex '>
            <Sidebar data={menuItems}/>
            <div className='w-full h-full '>
                <Header/>
                {/* <Outlet/> */}
            </div>
        </div>
  )
}

export default DriverDashboard