// components/Hero.tsx
'use client';
import StarsBackground from './StarsBackground';
import { useCallback } from 'react';
import ManifestoComponent from './Manifesto/ManifestoComponent';
import SponsorsComponent from './Sponsors/SponsorsComponent';
import SpeakersComponent from './Speakers/SpeakersComponent';
import WhatComponent from './What/WhatComponent';
import PanelsComponent from './Panels/PanelsComponent';
import Schedule from './Schedule/Schedule';

import RegisterComponentL from './RegisterComponent/RegisterComponentL';


const Hero = () => {
  const handleAddToCalendar = useCallback(() => {
    const event = {
      title: 'Privacy x Verifiability Conference',
      description: 'Join us for a deep dive into the latest in blockchain privacy and verifiability',
      location: 'EPFL BC, Lausanne, Switzerland',
      start: new Date('2025-03-07T09:00:00+01:00').toISOString(),
      end: new Date('2025-03-07T18:00:00+01:00').toISOString(),
    };

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.start.replace(/[-:]/g, '')}/${event.end.replace(/[-:]/g, '')}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;

    window.open(googleCalendarUrl, '_blank');
  }, []);

  return (
    <div className="relative min-h-[75vh] w-full flex flex-col items-center justify-center bg-transparent">
      <StarsBackground />
      <div className="relative z-10 flex flex-col items-center justify-center gap-8 px-4 h-screen">


        <div className="text-center">
          <h1 className="text-2xl md:text-6xl font-bold text-white ">BSA Blockchain Conference</h1>
          <h1 className="text-xl font-bold text-white ">Privacy and Verifiability</h1>
          <p className="sm:text-xl text-base mt-4 text-white">EPFL, March 7th</p>
        </div>


        <div className="justify-center">
          <a href="/hackathon" className='p-4 hover:bg-blue-200 bg-primary rounded-lg text-white'>Check out the Hackathon</a>
        </div>
        <div>
          <button className="btn btn-primary mt-6 padding-6 text-white" onClick={handleAddToCalendar}
            rel="noopener noreferrer" >Save the date</button>
          <a className="btn btn-primary mt-6 ml-4 text-white" href="https://cryptpad.fr/form/#/2/form/view/VIi0a+XML51M6gBUfB484Tl+umj7stQfGVMGf-1AIFs/">Join as speaker</a>
        </div>

        <RegisterComponentL />
      </div>

      <div id="manifesto">
        <ManifestoComponent />
      </div>

      <div id="sponsors">
        <SponsorsComponent />
      </div>

      <div id="agenda" className="w-full max-w-7xl z-10">


        <Schedule />
      </div>

      <div id="panels">
        <PanelsComponent />
      </div>

      <div id="speakers">
        <SpeakersComponent />
      </div>

      {/* <GrantsComponent /> */}



      <div id="more">
        <WhatComponent />
      </div>

      {/* <WaitComponent /> */}
      <br />
      <br />


    </div>
  );
};

export default Hero;
