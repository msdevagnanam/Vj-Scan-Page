import React from 'react'
import Navbar from '../components/Common/Navbar'
import Footer from '../components/Common/Footer'
import Herosection_ct_scan from '../components/CT-Scan/Herosection_ct_scan'
import CTInfoSection from '../components/CT-Scan/CTInfoSection'
import CTScanTypes from '../components/CT-Scan/CTScanTypes'
import CTPreparation from '../components/CT-Scan/CTPreparation'
import CTScanBooking from '../components/CT-Scan/CTScanBooking'
import FAQSection_CT_Scan from '../components/CT-Scan/FAQSection_CT_Scan'

function Ctscan() {
  return (
    <div>
        <Navbar />
        <Herosection_ct_scan />
        <CTInfoSection />
        <CTScanTypes />
        <CTPreparation />
        <CTScanBooking />
        <FAQSection_CT_Scan />
        <Footer />
    </div>
  )
}

export default Ctscan
