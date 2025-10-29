import React from 'react'
import Navbar from './components/Navbar/Navbar'
import './index.css'
import Herosetion from './components/Herosection/Herosetion'
import PopularPackages from './components/Popularpackages/PopularPackages'
import DiagnosticFacilities from './components/DiagnosticFacilities/DiagnosticFacilities'
import Vjscan from './components/Vjscan/Vjscan'
import Ourspecialisations from './components/Ourspecialisations/Ourspecialisations'
import FeedbackSection from './components/FeedbackSection/FeedbackSection'
import AppointmentForm from './components/AppointmentForm/AppointmentForm'
import FAQSection from './components/FAQSection/FAQSection'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <Herosetion />
      <PopularPackages />
      <DiagnosticFacilities />
      <Ourspecialisations />
      <Vjscan />
      <FeedbackSection  />
      <AppointmentForm />
      <FAQSection />
      <Footer />
    </div>
  )
}

export default App