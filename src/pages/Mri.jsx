import React from 'react'
import Navbar from '../components/Common/Navbar'
import Footer from '../components/Common/Footer'
import Herosectionmri from '../components/MRI/Herosectionmri'
import Mri_info_section from '../components/MRI/Mri_info_section'
import Mri_type from '../components/MRI/Mri_type'
import Mri_preparation from '../components/MRI/Mri_preparation'
import Mri_booking from '../components/MRI/Mri_booking'
import FAQSection_mri from '../components/MRI/FAQSection_mri'

function Mri() {
  return (
    <div>
        <Navbar />
        <Herosectionmri />
        <Mri_info_section />
        <Mri_type />
        <Mri_preparation />
        <Mri_booking /> 
        <FAQSection_mri />
        <Footer />
    </div>
  )
}

export default Mri