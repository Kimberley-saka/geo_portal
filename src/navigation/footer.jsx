import { Link } from "react-router-dom"

export default function div() {
  return(
      <div className="flex flex-row justify-between h-46 bg-sky-950 pt-5 px-20 text-white">
        <div className=" flex items-start h-full bg-slate-400">
          <div className="flex items-start h-1/3">
          <Link to="/" className="font-medium text-xl">
          Open <span className="block"> Geospatial</span>
          </Link>
          <div className="flex h-11 pt-1">
            <img src="/icons/location_icon.png" alt="location pin"/>
          </div>

          </div>
         
        </div>


        <div className="hidden flex-col gap-2 md:flex">
            <Link to="/">Home</Link>
            <Link to="/explore">Explore</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/about">About us</Link>
          </div>


          <div className="flex flex-col mt-32">

          <p> Copyright &copy; 2023. All Rights Reserved.</p>
          </div>
      
    </div>
  )
   
}