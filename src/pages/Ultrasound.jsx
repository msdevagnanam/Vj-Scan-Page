import React from 'react'
import Navbar from '../components/Common/Navbar'
import Footer from '../components/Common/Footer'
import Herosection_ultrasonic from '../components/Ultrasound/Herosection_ultrasonic'
import Ultrasound_info_section from '../components/Ultrasound/Ultrasound_info_section'
import Ultrasound_type from '../components/Ultrasound/Ultrasound_type'
import Ultrasound_preparation from '../components/Ultrasound/Ultrasound_preparation'
import Ultrasound_booking from '../components/Ultrasound/Ultrasound_booking'
import FAQSection_ultrasound from '../components/Ultrasound/FAQSection_ultrasound'

function Ultrasound() {
  return (
    <div>
      <Navbar />
      <Herosection_ultrasonic />
      <Ultrasound_info_section />
      <Ultrasound_type />
      <Ultrasound_preparation />
      <Ultrasound_booking />
      <FAQSection_ultrasound />
      <Footer />
    </div>
  )
}

export default Ultrasound
