import React from 'react'
import Navbar from '../components/Common/Navbar'
import Footer from '../components/Common/Footer'
import Herosection_xray from '../components/X-ray/Herosection_xray'
import XrayInfoSection from '../components/X-ray/XrayInfoSection'
import XrayType from '../components/X-ray/X_ray_type'
import Xrapreparation from '../components/X-ray/X_ray_preparation'
import FAQSection_X_Ray from '../components/X-ray/FAQSection_X_Ray'
import X_ray_booking from '../components/X-ray/X_ray_booking'

function Xray() {
  return (
    <div>
      <Navbar />
      <Herosection_xray />
      <XrayInfoSection />
      <XrayType />
      <Xrapreparation />
      <X_ray_booking />
      <FAQSection_X_Ray />
      <Footer />
    </div>
  )
}

export default Xray
