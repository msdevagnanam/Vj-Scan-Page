import React from "react";
import Herosetion from '../components/Home/Herosetion'
import PopularPackages from '../components/Home/PopularPackages'
import DiagnosticFacilities from '../components/Home/DiagnosticFacilities'
import Vjscan from '../components/Home/Vjscan'
import Ourspecialisations from '../components/Home/Ourspecialisations'
import FeedbackSection from '../components/Home/FeedbackSection'
import AppointmentForm from '../components/Home/AppointmentForm'
import FAQSection from '../components/Home/FAQSection'
import Footer from '../components/Common/Footer'
import Navbar from '../components/Common/Navbar'
const Home = () => {
  return (
       <>
        <Navbar />
        <Herosetion />
        <PopularPackages />
        <DiagnosticFacilities />
        <Ourspecialisations />
        <Vjscan />
        <FeedbackSection />
        <AppointmentForm />
        <FAQSection />
        <Footer />
       </>
  );
};

export default Home;

