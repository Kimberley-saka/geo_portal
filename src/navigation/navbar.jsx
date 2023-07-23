export default function NavBar() {
  return(
    <div>
      <nav className="flex flex-row justify-between items-center px-5 h-20
      text-sky-950 md:px-40 ">
        <div className=" flex items-center h-full">
        <a href="/" className="font-medium text-xl">
         Open <span className="block"> Geospatial</span>
        </a>
         <div className="flex h-11 pt-1">
          <img src="/icons/location_icon.png" alt="location pin"/>
        </div>
      
        </div>
        
        <div className="hidden flex-row text-base  justify-between items-center 
        w-96 h-full md:flex">
        <a href="/explore" className="hover:text-gray-400">Explore</a>
        <a href="/about" className="hover:text-gray-400">About Us</a>
        <a href="/contact" className="hover:text-gray-400">Contact Us</a>
        <div className=" flex justify-center items-center rounded-full
        bg-sky-500 w-20 h-10 hover:bg-sky-300">
          <a href="/authentication" >
            Log in</a>
        </div>
        
        </div>
       
        

        
    
      
    </nav>
    
    </div>
  
  )
}