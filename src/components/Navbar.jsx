import { NavLink } from "react-router-dom";
import { MdOutlineArrowOutward } from "react-icons/md";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../features/authSlice";

const Navbar = ({ openLogin }) => {
  const count=useSelector((state)=>state.counter.value)
  const user=useSelector((state)=>state.auth.user)
  const dispatch=useDispatch()
  return (
    <nav className="w-full bg-orange-500 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-around">
        
        <div className="flex items-center gap-3 cursor-pointer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png"
            alt="logo"
            className="w-10"
          />
          <h1 className="text-2xl font-bold text-white">
            FoodHub
          </h1>
        </div>

        <div className="flex items-center gap-8 font-medium text-[18px] text-white">
          <NavLink to="/corporate">Swiggy Corporate</NavLink>
          <NavLink to="/partner">Partner With Us</NavLink>

          <NavLink
            to="/app"
            className="px-4 py-4 flex items-center gap-2 border border-gray-300 rounded-xl"
          >
            Get the App <MdOutlineArrowOutward />
          </NavLink>

          {/* SIGN IN BUTTON */}

          
         

      {
        user?"hello,"+user.username:"hello,user"
      }

          {
            user? <button
            className="px-8 py-4 border border-gray-300 bg-red-400 rounded-xl"
            onClick={()=>{dispatch(logout())}}
          >
            logout
          </button>: <button
            onClick={openLogin}
            className="px-8 py-4 border border-gray-300 bg-black rounded-xl"
          >
            Sign In {count}
          </button>
          }

         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
