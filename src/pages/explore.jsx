export default function ExplorePage() {

  const getDatasets = () => {
    
  }
  return(
    <div className="flex flex-row">
      <div className="flex">
        <form onSubmit={getDatasets}>
          <input placeholder="Search datasets"></input>
          <button type="submit">Go</button>
        </form>
      </div>

      <div id="map">

      </div>
  
    </div>
    )
}