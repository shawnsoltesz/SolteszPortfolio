/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from 'react'
import { Navigation } from './components/navigation'
import { Home } from './components/home'
import { About } from './components/about'
import { Portfolio } from './components/portfolio'
import { Contact } from './components/contact'
import { Footer } from './components/footer'
import JsonData from "./data/data.json";

export function App()  

 { const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []); 

  {function JsonData(JsonData: any) {
    throw new Error('Function not implemented.')
  }
  return (
    <div>
      <Navigation />
      <Home />
      <About />
      <Portfolio />
      <Contact data={landingPageData.Contact} />
      <Footer data={landingPageData.Footer} />
    </div>
  );
}
