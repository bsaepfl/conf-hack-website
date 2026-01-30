'use client';

import NavbarH from '../components/NavbarH';
import Footer from '../components/Footer';
import Hero from '../components/Hackathon/HeroView';
import ApplyView from '../components/Hackathon/ApplyView';
import DiscoverSuiView from '../components/Hackathon/DiscoverSuiView';
import LocationView from '../components/Hackathon/LocationView';
import FaqView from '../components/Hackathon/FaqView';
import RulesView from '../components/Hackathon/RulesView';
import StarsBackground from '../components/StarsBackground';
import ScheduleView from '../components/Agenda/ScheduleView';
import ThankView from '../components/Hackathon/ThankView';
import GrantView from '../components/Hackathon/GrantView';
import SpeakersComponent from '../components/SpeakersComponent/SpeakersComponent';
import bsaLogo from '../components/Hackathon/images/icons/Logo-dark.png';

export default function Conference() {
    return (
        <div className="flex flex-col min-h-screen">
            <StarsBackground />
            <NavbarH />
            <main className="flex-grow flex-col flex items-center justify-center bg-base-200">

                <Hero
                    title={
                        <>
                            BSA Conference
                            <img
                                src={bsaLogo.src}
                                alt="BSA Logo"
                                className="h-8 md:h-14 inline-block object-contain align-middle px-2 pb-2"
                            />
                            <br />
                            Stablecoin & Payments
                        </>
                    }
                    description={
                        <p className="text-black max-w-[500px] mb-2 font-normal text-center">
                            Join us for the <span className="font-semibold">BSA Stablecoin & Payments Conference</span> at EPFL.
                            Engage with industry leaders and explore the future of payments.
                        </p>
                    }
                />

                {/* <div id="apply" className="w-full">
          <ApplyView />
        </div> */}



                <div id="speakers" className="w-full">
                    <SpeakersComponent />
                </div>

                <div id="schedule" className="w-full">
                    <ScheduleView />
                </div>

                <div id="grant" className="w-full">
                    <GrantView />
                </div>


                {/* PrizeView removed */}
                {/* <div id="prize" className="w-full">
          <PrizeView />
        </div> */}

                {/* <div id="discover" className="w-full">
                    <DiscoverSuiView />
                </div> */}

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
