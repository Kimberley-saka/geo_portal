export default function AvailableDatasets() {
  return(
    <div className="flex flex-col gap-8 md:my-24 text-sky-950">
      <h3 className="text-2xl px-12 font-bold md:text-3xl md:px-8">
        Ready to explore?
      </h3>
      <div className="grid grid-cols-1 place-items-center gap-y-4 md:px-40
        md:w-full md:grid-cols-3">
        <div className= "flex flex-col items-center h-64 w-64">
          <img src="/img/boundaries.jpg" alt="admin-boundaries" className="
          object-cover h-5/6 w-full rounded-xl ">
          </img>
          < p className="mt-2">Boundaries</p>
        </div>

        <div className= "flex flex-col items-center h-64 w-64 rounded-xl">
          <img src="/img/roads.jpg" alt="roads" className="
          object-cover h-5/6 w-full rounded-xl">
          </img>
          < p className="mt-2">Transportation</ p>
        </div>

        <div className= " hidden flex-col items-center h-64 w-64 rounded-xl md:flex  ">
          <img src="/img/water-features.jpg" alt="water" className="
          object-cover h-5/6 w-full rounded-xl">
          </img>
          < p className="mt-2">Water</ p>
        </div>

        <div className= "hidden flex-col items-center h-64 w-64 rounded-xl md:flex">
          <img src="/img/classroom.jpg" alt="education" className="
          object-cover h-5/6 w-full rounded-xl">
          </img>
          < p className="mt-2">Education</ p>
        </div>

        <div className= "hidden flex-col items-center h-64 w-64 rounded-xl md:flex">
          <img src="/img/Health.jpg" alt="health" className="
          object-cover h-5/6 w-full rounded-xl">
          </img>
          < p className="mt-2">Health</ p>
        </div>

        <div className= "hidden flex-col items-center h-64 w-64 rounded-xl md:flex ">
          <img src="/img/wild-life.jpg" alt="nature" className="
          object-cover h-5/6 w-full rounded-xl">
          </img>
          < p className="mt-2">Nature</ p>
        </div>


    </div>
    
    <div className="flex justify-center items-center">
    <a href="/explore" className="flex justify-center items-center rounded-full
        bg-sky-500 w-32 h-11 hover:bg-sky-300">
        Get Started </a>
    </div>
    
    </div>
  
  )
}