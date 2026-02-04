// src/app/tickets/page.tsx
import NavbarR from '../components/NavbarR';
import Footer from '../components/Footer';
import StarsBackground from '../components/StarsBackground';
import LumaEmbed from '../components/LumaEmbed';


const TicketsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarR />
      <main className="flex-grow flex flex-col items-center justify-center pt-24 pb-12 bg-base-200">
        <StarsBackground />
        <LumaEmbed
          eventId="evt-CJf7KtWdVOHFx8q"
          title="Register for the Conference"
          description="Secure your spot at the BSA Stablecoin & Payments Conference."
        />
      </main>
      <Footer />
    </div>
  );
};

export default TicketsPage;
