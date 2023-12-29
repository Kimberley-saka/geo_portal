export default function ExplorePage() {

  const getDatasets = () => {
    
  }
  return(
    <div className="flex flex-row px-8 md:px-24 md:my-14">
      <div className="flex justify-center pt-4 md:w-1/3 md:h-screen bg-yellow-200">
        <form className="flex justify-center items-center w-full h-20 bg-pink-200 space-x-6 pt-6 px-6" onSubmit={getDatasets}>
          <input className="w-full h-9 rounded-full placeholder:pl-2" placeholder="Search datasets"></input>
          <button className="" type="submit">Go</button>
        </form>

        <div className="">
        </div>
      </div>

      <div id="map" className="bg-sky-300">
        Map goes here

      </div>
  
    </div>
    )
}