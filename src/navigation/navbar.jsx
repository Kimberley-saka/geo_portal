import { Link} from "react-router-dom";
import { useContext } from "react";
import { UserContext } from '../utils/UserContext';

export default function NavBar() {
  const {user} =useContext(UserContext)

  return (
    <div>
      <nav className="flex flex-row justify-between items-center mx-6 h-20
      text-sky-950 md:px-40 ">
        <div className=" flex items-center h-full">
        <Link to="/" className="font-medium text-xl">
         Open <span className="block"> Geospatial</span>
        </Link>
         <div className="flex h-11 pt-1">
           <img src="/icons/location_icon.png" alt="location pin"/>
        </div>
      
        </div>
        
        <div className="hidden flex-row text-base  justify-between items-center 
        w-2/4 h-full md:flex">
          <Link to="/" className="hover:text-gray-400">Home</Link>
        <Link to="/explore" className="hover:text-gray-400">Explore</Link>
        <Link to="/about" className="hover:text-gray-400">About Us</Link>
        <Link to="/contact" className="hover:text-gray-400">Contact Us</Link>
        <Link to="/authentication" className=" flex justify-center items-center rounded-full
        bg-sky-500 w-20 h-10 hover:bg-sky-300 transition-colors">
          {user? `Hi ${user.firstName}`: 'Log in'}
        </Link>
        
        </div>
      
    </nav>
    
    </div>
  
  )
}