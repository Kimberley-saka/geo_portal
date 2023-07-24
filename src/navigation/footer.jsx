export default function Footer() {
  return(
    <div className="text-white">
      <footer className="flex h-48 bg-sky-950 pt-5 px-5">
      <div className=" flex items-start h-1/3">
        <a href="/" className="font-medium text-xl">
         Open <span className="block"> Geospatial</span>
        </a>
         <div className="flex h-11 pt-1">
           <img src="/icons/location_icon.png" alt="location pin"/>
        </div>
      
        </div>
    </footer>
    </div>
  )
   
}