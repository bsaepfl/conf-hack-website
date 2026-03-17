// components/SpeakersComponent.tsx
import Image from 'next/image';
import placeholder from '../../images/tickets/placeholder.webp';
import PY from '../../images/speakers/PY.png';
import GM from '../../images/speakers/GM.jpeg';
import FP from '../../images/speakers/FP.jpeg';
import ZG from '../../images/speakers/ZG.jpg';
import fxw from '../../images/speakers/fxw.jpg';
import PK from '../../images/speakers/PK.jpeg';
import MS from '../../images/speakers/MS.jpg';
import MK from '../../images/speakers/MK.png';
import q from '../../images/speakers/q.jpg';
import HA from '../../images/speakers/HA.jpeg';
import GA from '../../images/speakers/GA.jpeg';
import SC from '../../images/speakers/SC.jpeg';
import SM from '../../images/speakers/SM.jpeg';
import K from '../../images/speakers/K.jpg';
import AM from '../../images/speakers/AM.jpeg';
import AL from '../../images/speakers/AL.jpeg';
import CK from '../../images/speakers/CK.png';
import NS from '../../images/speakers/NS.jpeg';
import PJ from '../../images/speakers/PJ.jpeg';
import S from '../../images/speakers/S.jpg';
import JB from '../../images/speakers/JB.jpg';
import JBW from '../../images/speakers/JBW.jpg';
import MO from '../../images/speakers/MO.jpeg';
import YG from '../../images/speakers/YG.jpeg';
import AS from '../../images/speakers/AS.jpeg';
import LB from '../../images/speakers/LB.jpg';
import JPA from '../../images/speakers/JP-A.jpeg';
import LK from '../../images/speakers/LK.jpeg';
import MR from '../../images/speakers/MR.jpeg';
import ABH from '../../images/speakers/ABH.jpeg';
import VA from '../../images/speakers/VA.jpeg';
import BS from '../../images/speakers/BS.jpeg';
import IMH from '../../images/speakers/IMH.jpeg';
import WD from '../../images/speakers/WD.png';
import SK from '../../images/speakers/SK.png';
import OR from '../../images/speakers/OR.png';
import RT from '../../images/speakers/RT.png';
import BH from '../../images/speakers/BH.png';
import JI from '../../images/speakers/JI.png';
import CM from '../../images/speakers/CM.png';
import MRR from '../../images/speakers/MR.png';
import VT from '../../images/speakers/VT.png';
import JMS from '../../images/speakers/JMS.png';
import GV from '../../images/speakers/GV.png';
import MB from '../../images/speakers/MB.png';
import FX from '../../images/speakers/FX.jpg';
import AlexMourot from '../../images/speakers/AlexMourot.jpeg';
import BryanFord from '../../images/speakers/bryanford.jpg';
import CarmenHett from '../../images/speakers/carmenhett.jpeg';
import CedricMaire from '../../images/speakers/cedricmair.jpeg';
import CharlesHenryMonchau from '../../images/speakers/chmonchau.jpeg';
import FlorianDucommun from '../../images/speakers/floriantduco.jpeg';
import JeanFrancoisRochet from '../../images/speakers/JFrochet.jpeg';
import LancelotDeFerriere from '../../images/speakers/lancelotdef.jpg';
import NicolaMassella from '../../images/speakers/nicomass.jpeg';
import SherazAhmed from '../../images/speakers/sheraza.jpg';
import ShiriBand from '../../images/speakers/shiriband.jpeg';
import TrangFernandezLeenknecht from '../../images/speakers/trangfer.jpeg';
import FK from '../../images/speakers/FK.jpeg';
import SS from '../../images/speakers/SS.jpeg';
import RM from '../../images/speakers/RM.jpeg';
import NB from '../../images/speakers/NB.jpeg';
import SDM from '../../images/speakers/SDM.jpeg';
import NR from '../../images/speakers/NR.jpeg';
import TV from '../../images/speakers/TV.jpeg';
import ADM from '../../images/speakers/ADM.jpg';
import SpeakerCard from './SpeakerCard';
import { BiHeading } from 'react-icons/bi';

const speakersData = [
  {
    name: 'Alexandre Mourot',
    image: AlexMourot,
    description: 'President, BSA Blockchain Club | Sui Developer Ambassador',
    socials: {
      twitter: '',
      linkedin: '',
    },
  },
  {
    name: 'Bryan Ford',
    image: BryanFord,
    description: 'Leads the Decentralized/Distributed Systems (DEDIS) lab at the Swiss Federal Institute of Technology in Lausanne (EPFL)',
    socials: { twitter: '', linkedin: '' },
  },
  {
    name: 'Carmen Hett',
    image: CarmenHett,
    description: 'Corporate Treasurer at UNHCR',
    socials: { twitter: '', linkedin: '' },
  },
  {
    name: 'Cedric Maire',
    image: CedricMaire,
    description: 'Co-Chair Cyber Security Working Group Crypto Valley Association',
    socials: { twitter: '', linkedin: '' },
  },
  {
    name: 'Charles Henry Monchau',
    image: CharlesHenryMonchau,
    description: 'Chief Investment Officer & Member of the Executive Committee at Syz Group',
    socials: { twitter: '', linkedin: '' },
  },
  {
    name: 'Florian Ducommun',
    image: FlorianDucommun,
    description: 'Partner Bonnard Lawson International Law Firm / Group CEO Colossus Digital SA',
    socials: { twitter: '', linkedin: '' },
  },
  {
    name: 'Jean-François Rochet',
    image: JeanFrancoisRochet,
    description: 'Ledger Exec',
    socials: { twitter: '', linkedin: '' },
  },
  {
    name: 'Lancelot de Ferriere',
    image: LancelotDeFerriere,
    description: 'Hyli CTO',
    socials: { twitter: '', linkedin: '' },
  },
  {
    name: 'Nicola Massella',
    image: NicolaMassella,
    description: 'Partner at STORM Partners, leading the Legal & Compliance practice.',
    socials: { twitter: '', linkedin: '' },
  },
  {
    name: 'Sheraz Ahmed',
    image: SherazAhmed,
    description: 'Founder of Decentral House',
    socials: { twitter: '', linkedin: '' },
  },
  {
    name: 'Shiri Band',
    image: ShiriBand,
    description: 'Technical Product Lead - CBDC, Tokenization, Digital Assets SICPA',
    socials: { twitter: '', linkedin: '' },
  },
  {
    name: 'Trang Fernandez-Leenknecht',
    image: TrangFernandezLeenknecht,
    description: 'Founding partner at holistik',
    socials: { twitter: '', linkedin: '' },
  },
  {
    name: 'Marc Bickel',
    image: MB,
    description: 'Co-Founder & CTO of Fume',
    socials: {
      twitter: '',
      linkedin: '',
    },
  },
  {
    name: 'Jean-Marc Seigneur',
    image: JMS,
    description: 'Researcher and Lecturer in Decentralized Trust at the University of Geneva',
    socials: {
      twitter: '',
      linkedin: '',
    },
  },
  {
    name: 'Vytautas Vito Tumas',
    image: VT,
    description: 'Blockchain Researcher & Senior Software Engineer at Ripple',
    socials: {
      twitter: '',
      linkedin: '',
    },
  },
  {
    name: 'Mark Richardson',
    image: MRR,
    description: 'Director Global Distribution at Amgen',
    socials: {
      twitter: '',
      linkedin: '',
    },
  },
  {
    name: 'Carlos Martin Doncel',
    image: CM,
    description: 'Leading Digital Assets and New Initiatives at Swissquote Bank',
    socials: {
      twitter: '',
      linkedin: '',
    },
  },
  {
    name: 'Juan Ignacio Ibañez',
    image: JI,
    description: 'General Secretary of the MiCA Crypto Alliance',
    socials: {
      twitter: '',
      linkedin: '',
    },
  },
  {
    name: 'Biba Homsy',
    image: BH,
    description: 'Founder & Partner at Homsy Legal, Regulatory & Crypto Lawyer',
    socials: {
      twitter: '',
      linkedin: '',
    },
  },
  {
    name: 'Oleschak Robert',
    image: OR,
    description: 'Adviser at the Swiss National Bank',
    socials: {
      twitter: '',
      linkedin: '',
    },
  },
  {
    name: 'Sebastiaan Krist',
    image: SK,
    description: 'Head of Corporate Banking Projects at Raiffeisen Switzerland',
    socials: {
      twitter: '',
      linkedin: '',
    },
  },
  {
    name: 'JP Aumasson',
    image: JPA,
    description: 'CSO & Co-founder of Taurus Group',
    socials: {
      twitter: '',
      linkedin: '',
    },
  },
  {
    name: 'François Xavier Wicht',
    image: fxw,
    description: 'PhD student in the Cryptology and Data Security Group at UniBern',
    socials: {
      twitter: '',
      linkedin: '',
    },
  },
  {
    name: 'William De Ath',
    image: WD,
    description: 'Chief Partnership Officer at AlphaTON Capital',
    socials: { twitter: '', linkedin: '' },
  },
  {
    name: 'Micha Roon',
    image: MR,
    description: 'Head of Engineering at the Hashgraph Association',
    socials: { twitter: '', linkedin: '' },
  },
  {
    name: 'Filip Koprivec',
    image: FK,
    description: 'CPO at Flare Network',
    socials: { twitter: '', linkedin: '' },
  },
  {
    name: 'Stan Stelcher',
    image: SS,
    description: 'BSA',
    socials: { twitter: '', linkedin: '' },
  },
  {
    name: 'Rafael Mastroberardino',
    image: RM,
    description: 'Franklin Templeton',
    socials: { twitter: '', linkedin: '' },
  },
  {
    name: 'Nandy Ba',
    image: NB,
    description: 'AAVE ACI Team',
    socials: { twitter: '', linkedin: '' },
  },
  {
    name: 'Stanislas de Maistre',
    image: SDM,
    description: 'Belem Capital',
    socials: { twitter: '', linkedin: '' },
  },
  {
    name: 'Nicolas Rémond',
    image: NR,
    description: 'SwissBorg',
    socials: { twitter: '', linkedin: '' },
  },
  {
    name: 'Timothy Voirol',
    image: TV,
    description: 'Storm Partners',
    socials: { twitter: '', linkedin: '' },
  },
  {
    name: 'Dr. Anandadeep Mandal',
    image: ADM,
    description: 'Researcher',
    socials: { twitter: '', linkedin: '' },
  },
];

const SpeakersComponent = () => {
  return (
    <section className="relative z-10 w-full flex flex-col items-center justify-center pt-28 pb-12 px-4 sm:px-6 lg:px-8">
      {/* Title Section */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-base-content">
        Meet the Speakers
      </h2>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 w-full max-w-screen-xl">
        {speakersData.map((speaker, index) => (
          <div key={index} className="perspective-1000">
            <SpeakerCard speaker={speaker} />
          </div>
        ))}
      </div>

      {/* Button Section */}
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSeev0bjpyQp30GdqETcBUJTwAvqyS6RU6O8aYahM1Q_r6kZbw/viewform"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary bg-base-100 btn-wide text-white transform transition-transform duration-300 hover:scale-105 active:scale-95 mt-12"
      >
        Apply as speaker
      </a>
    </section>
  );
};

export default SpeakersComponent;
