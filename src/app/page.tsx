'use client';
////THISTHISTHIS

import NavbarH from './components/NavbarH';
import Footer from './components/Footer';
import Hero from './components/Hackathon/HeroView';
import ApplyView from './components/Hackathon/ApplyView';

import PrizeView from './components/Hackathon/PrizeView';
import DiscoverSuiView from './components/Hackathon/DiscoverSuiView';
import LocationView from './components/Hackathon/LocationView';
import FaqView from './components/Hackathon/FaqView';
import RulesView from './components/Hackathon/RulesView';
import StarsBackground from './components/StarsBackground';
import ScheduleView from './components/Agenda/ScheduleView';
import ThankView from './components/Hackathon/ThankView';
import GrantView from './components/Hackathon/GrantView';



export default function Hackathon() {
  return (
    <div className="flex flex-col min-h-screen">
      <StarsBackground />
      <NavbarH />
      <main className="flex-grow flex-col flex items-center justify-center bg-base-200">
        
        <Hero />

        {/* <div id="apply" className="w-full">
          <ApplyView />
        </div> */}

        <div id="grant" className="w-full">
          <GrantView />
        </div>

        <div id="schedule" className="w-full">
          <ScheduleView />
        </div> 


        <div id="prize" className="w-full">
          <PrizeView />
        </div>

        <div id="discover" className="w-full">
         <DiscoverSuiView />
        </div>

        <div id="location" className="w-full">
          <LocationView />
        </div>  

        <div id="faq" className="w-full">
          <FaqView />
        </div>

        <div id="thx" className="w-full">
          <ThankView />
        </div>

        {/* <div id="rules" className="w-full mb-12">
          <RulesView />
        </div> */}
      </main>
      <Footer />
    </div>
  );
}
