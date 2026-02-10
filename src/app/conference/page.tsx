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
const bsaLogo = { src: "/images/logo-white.png" };
import LumaEmbed from '../components/LumaEmbed';
import Countdown from '../components/Countdown';

export default function Conference() {
    return (
        <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
            <StarsBackground />
            <NavbarH />
            <main className="flex-grow flex flex-col items-center justify-center w-full overflow-x-hidden">

                <Hero
                    title={
                        <span className="flex flex-col items-center gap-2">
                            <span className="flex items-center justify-center gap-2 flex-wrap">
                                BSA Conference
                                <img
                                    src={bsaLogo.src}
                                    alt="BSA Logo"
                                    className="h-8 md:h-14 object-contain"
                                />
                            </span>
                            <span className="text-center">Stablecoin & Payments</span>
                        </span>
                    }
                    description={
                        <p className="text-base-content max-w-[500px] mb-2 font-normal text-center">
                            Join us for the <span className="font-semibold">BSA Stablecoin & Payments Conference</span> at EPFL.
                            Engage with industry leaders and explore the future of payments.
                        </p>
                    }
                    showCalendar={false}
                    showDate={false}
                    showDiscoverButton={false}
                />

                <Countdown />

                <div id="register" className="w-full">
                    <LumaEmbed
                        eventId="evt-CJf7KtWdVOHFx8q"
                        title="Register for the Conference"
                        description="Secure your spot at the BSA Stablecoin & Payments Conference. Registration is free and open to all."
                    />
                </div>

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
