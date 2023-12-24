export default function CtaSection() {
  return(
    <div className=" flex flex-col px-6 gap-5 my-20 md:px-8 text-sky-950
    md:gap-24 md:flex-row md:my-40">
      <div className="flex flex-col gap-5 md:w-1/3">
        <p className="font-bold text-3xl"> 
          Welcome to our geospatial data wonderland </p>
        <p className=" text-gray-500"> 
        Are you ready to unlock the limitless potential of geospatial data?
        Dive into a world of insights and possibilities as you embark on an
        extraordinary journey through our collection of diverse datasets
        </p>
      </div>

      <div className="flex flex-col gap-6 md:w-2/4">
        <div className="flex flex-col gap-3">
          <p className="flex flex-row mr-4 rounded-full  bg-sky-200 md:bg-transparent">
            <span className="h-8 inline-flex justify-center items-center bg-sky-500 rounded-full
            w-8 mr-4">
              1.</span><span className="font-bold text-lg">
                Browse Our Datasets</span>
          </p>
          
          <p className="text-gray-500 md:pl-12">
          Explore our comprehensive catalog, conveniently organized by
          categories. 
          </p>
        </div>


        <div className="flex flex-col gap-3">
          <p className="flex flex-row mr-4 rounded-full bg-sky-200 md:bg-transparent">
            <span className="h-8 inline-flex justify-center bg-sky-500 rounded-full
            w-8 mr-4">
              2.</span><span className="font-bold text-lg">
                Download</span>
          </p>
          
          <p className="text-gray-500 md:pl-12">
            Found the perfect dataset for your project? Download it in a
            variety of formats, so you can seamlessly integrate it into
            your favorite GIS software.
          </p>
        </div>


        <div className="flex flex-col gap-3">
          <p className="flex flex-row mr-4 rounded-full bg-sky-200 md:bg-transparent">
            <span className="h-8 inline-flex justify-center bg-sky-500 rounded-full
            w-8 mr-4">
              3.</span><span className="font-bold text-lg">
                Contribute</span>
          </p>
          
          <p className="text-gray-500 md:pl-12">
          The geospatial world is a collaborative one, share your
          discoveries with other like minded enthusiasts.
          </p>
        </div>

        
      </div>
    </div>
  )  
}