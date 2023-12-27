export default function AboutPage() {
  return(
  <div className="flex flex-col pt-10 px-6 text-sky-950 md:pt-14 md:px-40">
      <div className="text-5xl font-bold w-5/6">
        <p>About</p>
        <div className="flex space-x-2 items-center">
        <p> Us </p> <p className="w-20 border-b-4 border-sky-950"></p>
        </div>
      
      </div>


      
    <div className="flex items-start pt-4 flex-col text-lg">
      <p>
      Open Geospatial is a platform that aims to provide a platform for 
      users to explore the world through the lens of geospatial data.
      At the heart of our platform is a passion for fostering collaboration 
      among enthusiasts, professionals, and organizations alike.
      Open Geospatial provides a user-friendly space to explore, contribute,
      and discover the power of location-based knowledge.
      </p>

      <p className="pt-3 pb-20">
      Our platform is built on the principles of open source and open data.
      Our commitment lies in creating a community-driven experience, where
      diverse datasets converge to inspire innovation across various domains.
      Join us in charting the course for a spatially informed future, where every
      shared map contributes to a richer understanding of the world we navigate together.
      </p>
        
    </div>

  </div>
  )
  }