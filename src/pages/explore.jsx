export default function ExplorePage() {

  const getDatasets = () => {
    
  }
  return(
    <div className="flex flex-row px-8 md:px-24 md:my-14">
      <div className="flex flex-col space-y-8 pt-4 md:w-1/3 md:h-screen">
        <form className="w-full px-8 " onSubmit={getDatasets}>
          <div className="relative">
            <input className="flex-grow w-full h-9 rounded-full pl-5 pr-12" placeholder="Search datasets" />
            <button className="absolute top-0 right-0 mt-2 mr-2 pr-3
            transform transition-transform duration-200 hover:scale-110" type="submit">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5 17.5L22 22" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944
                20 11 20C15.9706 20 20 15.9706 20 11Z" stroke="#141B34" stroke-width="1.5" stroke-linejoin="round"/>
              </svg>

            </button>
          </div>
        </form>
        <div className="pt-8 border-t-2 border-sky-950 bg-white h-full ">
          datasets goes here
        </div>
      </div>

      <div id="map" className="bg-sky-300 md:w-3/4">
        Map goes here

      </div>
  
    </div>
    )
}