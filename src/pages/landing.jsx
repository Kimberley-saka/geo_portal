import CtaSection from "../components/landing-page-components/cta-section";
import AvailableDatasets from "../components/landing-page-components/datasets";
import Description from "../components/landing-page-components/description";

export default function LandingPage(){
  return(
    <div>
      <Description/>
      <CtaSection/>
      <AvailableDatasets/>

    </div>
  )   
    
}