export default function Description() {
return(
  <div className=" flex flex-col-reverse gap-10 justify-start 
  pt-14 md:px-8 md:flex-row md:gap-20">
    <div className="flex flex-col justify-start items-start md:w-2/5">
      <p className="text-3xl text-bold pb-5 text-sky-950 md:pb-9 md:text-5xl">
      Discover geospatial datasets that suit your needs</p>

      <p className="text-lg text-gray-500 md:mb-9">
        Uncover a world of geospatial data at your finger tips
      </p>

      <a href="/explore" className="flex justify-center items-center rounded-full
        bg-sky-500 w-32 h-11 hover:bg-sky-300">
        Get Started </a>
    </div>
      
    <div className="flex md:h-96">
     <img src="/img/map-collection.png"></img>
    </div>

  </div>
)
}