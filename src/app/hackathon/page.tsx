'use client';


import NavbarH from '../components/NavbarH';
import Footer from '../components/Footer';
import Hero from '../components/Hackathon/HeroView';
import ApplyView from '../components/Hackathon/ApplyView';

import PrizeView from '../components/Hackathon/PrizeView';
import DiscoverSuiView from '../components/Hackathon/DiscoverSuiView';
import LocationView from '../components/Hackathon/LocationView';
import FaqView from '../components/Hackathon/FaqView';
import RulesView from '../components/Hackathon/RulesView';
import StarsBackground from '../components/StarsBackground';
import ScheduleView from '../components/Agenda/ScheduleView';
import LumaEmbed from '../components/LumaEmbed';



export default function Hackathon() {
  return (
    <div className="flex flex-col min-h-screen">
      <StarsBackground />
      <NavbarH />
      <main className="flex-grow flex-col flex items-center justify-center bg-base-200">

        <Hero />

        <div id="register" className="w-full">
          <LumaEmbed
            eventId="evt-U3ixoqjZHnM3CnO"
            title="Register for the Hackathon"
            description="Join us for an exciting hackathon experience. Register now to secure your spot!"
          />
        </div>

        <div id="apply" className="w-full">
          <ApplyView />
        </div>

        {/* <div id="schedule" className="w-full">
          <ScheduleView />
        </div>  */}

        {/* TODO: timeline */}

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

        <div id="rules" className="w-full mb-12">
          <RulesView />
        </div>
      </main>
      <Footer />
    </div>
  );
}
