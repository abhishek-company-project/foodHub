
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Authlayout from './components/auth/Authlayout'
import { useState } from 'react'
import CollectionPage from './pages/RestrorantusCollection/CollectionPage'
import Practice from './components/Practice'
import AdminDhaboard from './AdminDashboard/AdminDhaboard'
import MainDashboard from './AdminDashboard/MainDashboard'
import Report from './AdminDashboard/Report'
import UserDashbaord from './UserDashabord/UserDashbaord'
import SuperAdminDashboard from './SuperAdminDashboard/SuperAdminDashboard'
import DriverDashboard from './DriveDashboard/DriverDashboard'
import RestauantProfile from './AdminDashboard/RestauantProfile'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/collection/:id" element={<CollectionPage/>}/>
        <Route path='/practice' element={<Practice/>} />
        {/* <Route path='/' element={<Authlayout />} /> */}


      {/* admin dashboad routing */}
     <Route path="/admin" element={<AdminDhaboard/>}>
     <Route index element={<MainDashboard/>}/>
     <Route path='report' element={<Report/>}/>
     <Route path='restaurant-profile' element={<RestauantProfile/>}/>
     </Route>

      {/* user dashboad routing */}
     <Route path="/user" element={<UserDashbaord/>}>
     {/* <Route index element={<MainDashboard/>}/> */}
     {/* <Route path='report' element={<Report/>}/> */}
     </Route>


      {/* super-admin dashboad routing */}
     <Route path="/super-admin" element={<SuperAdminDashboard/>}>
     {/* <Route index element={<MainDashboard/>}/> */}
     {/* <Route path='report' element={<Report/>}/> */}
     </Route>


      {/* super-admin dashboad routing */}
     <Route path="/driver" element={<DriverDashboard/>}>
     {/* <Route index element={<MainDashboard/>}/> */}
     {/* <Route path='report' element={<Report/>}/> */}
     </Route>


    </Routes>
    
    </BrowserRouter>
      
    </>
  )
}

export default App
