import HeroSlider from '../components/sections/HeroSlider/HeroSlider.jsx'
import BusinessSetup from '../components/sections/BusinessSetup/BusinessSetup.jsx'
import OurStory from '../components/sections/OurStory/OurStory.jsx'
import WhatSetsUsApart from '../components/sections/WhatSetsUsApart/WhatSetsUsApart.jsx'
import WhoWeWorkWith from '../components/sections/WhoWeWorkWith/WhoWeWorkWith.jsx'
import OurServices from '../components/sections/OurServices/OurServices.jsx'
import Commitment from '../components/sections/Commitment/Commitment.jsx'
import CoreValues from '../components/sections/CoreValues/CoreValues.jsx'
import MinimalContact from '../components/sections/MinimalContact/MinimalContact.jsx'

/** Vision Business Setup — homepage sections, in order. */
export default function Home() {
  return (
    <>
      <HeroSlider />       {/* 1  hero: "Every Business starts with Vision" */}
      <BusinessSetup />    {/* 2  Mainland / Free Zone / Offshore           */}
      <OurStory />         {/* 3  Why Vision / Our Story (est. 2015)        */}
      <WhatSetsUsApart />  {/* 4  four differentiators                      */}
      <WhoWeWorkWith />    {/* 5  five industries                          */}
      <OurServices />      {/* 6  Licence / Visa / Finance / Other          */}
      <Commitment />       {/* 7  Our Approach / Commitment                 */}
      <CoreValues />       {/* 8  seven core values                        */}
      <MinimalContact />   {/* 9  minimal callback form                    */}
    </>
  )
}
