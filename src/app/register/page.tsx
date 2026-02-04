// src/app/tickets/page.tsx
import NavbarR from '../components/NavbarR';
import Footer from '../components/Footer';
import StarsBackground from '../components/StarsBackground';
import LumaEmbed from '../components/LumaEmbed';


const TicketsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarR />
      <main className="flex-grow flex flex-col items-center justify-center pt-24 pb-12">
        <StarsBackground />
        <LumaEmbed
          eventId="evt-CJf7KtWdVOHFx8q"
          title="Register for the Conference"
          description="Secure your spot at the BSA Stablecoin & Payments Conference."
        />
        <LumaEmbed
          eventId="evt-U3ixoqjZHnM3CnO"
          title="Register for the Hackathon"
          description="Join us for an exciting hackathon experience. Register now to secure your spot!"
        />
      </main>
      <Footer />
    </div>
  );
};

export default TicketsPage;
