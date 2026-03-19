import { ConferenceEventType } from '@/types/ScheduleTypes';

export const conferenceSchedule: ConferenceEventType[] = [
    // === PANEL STAGE ===
    {
        date: new Date("2026-03-20T09:30:00"),
        name: "Privacy in Payments",
        icon: "panel",
        duration: 0.75,
        stage: "panel",
        panelists: [
            { name: "JP Aumasson", linkedin: "https://www.linkedin.com/in/aumasson/", company: "Taurus" },
            { name: "Lancelot de Ferriere", linkedin: "https://www.linkedin.com/in/lancelotdeferriere/", company: "Hyli" },
            { name: "Cedric Maire", linkedin: "https://www.linkedin.com/in/cedric-maire/", company: "CVA - Bitcoin Suisse AG" },
        ],
    },
    {
        date: new Date("2026-03-20T10:30:00"),
        name: "CBDCs and their Frameworks",
        icon: "panel",
        duration: 0.75,
        stage: "panel",
        panelists: [
            { name: "Sebastiaan Krist", linkedin: "https://www.linkedin.com/in/sebastiaankrist/", company: "Raiffeisen" },
            { name: "Oleschak Robert", linkedin: "https://www.linkedin.com/in/robert-oleschak-702059a0/", company: "SNB" },
            { name: "Shiri Band", linkedin: "https://www.linkedin.com/in/shiri-band/", company: "" },
            { name: "Alexandre Mourot", linkedin: "https://www.linkedin.com/in/alexandre-mourot-01b965239/", company: "BSA" },

        ],
    },
    {
        date: new Date("2026-03-20T11:30:00"),
        name: "L1s & L2s in Payments",
        icon: "panel",
        duration: 0.75,
        stage: "panel",
        panelists: [
            { name: "Adi Seredinschi", linkedin: "https://www.linkedin.com/in/seredinschi/", company: "Circle" },
            { name: "Micha Roon", linkedin: "https://www.linkedin.com/in/micha/", company: "Hashgraph Association" },
            { name: "Filip Koprivec", linkedin: "https://www.linkedin.com/in/filip-koprivec-a6635b107/", company: "Flare Network" },
            { name: "Sheraz Ahmed", linkedin: "https://www.linkedin.com/in/sherazahmed1/", company: "STORM Partners" },
        ],
    },
    {
        date: new Date("2026-03-20T14:00:00"),
        name: "Regulatory Landscape & Compliance",
        icon: "panel",
        duration: 0.75,
        stage: "panel",
        panelists: [
            { name: "Biba Homsy", linkedin: "https://www.linkedin.com/in/bibahomsy/", company: "Homsy Legal" },
            { name: "Juan Ignacio Ibanez", linkedin: "https://www.linkedin.com/in/juanignacioibanez/", company: "MiCA Crypto Alliance" },
            { name: "Trang Fernandez-Leenknecht", linkedin: "https://www.linkedin.com/in/trangfernandezleenknecht/", company: "Holistik" },
            { name: "Nicola Massella", linkedin: "https://www.linkedin.com/in/nicolamassella/", company: "STORM Partners" },
        ],
    },
    {
        date: new Date("2026-03-20T15:00:00"),
        name: "Real-World Adoption & Merchant Integration",
        icon: "panel",
        duration: 0.75,
        stage: "panel",
        panelists: [
            { name: "William De'Ath", linkedin: "https://www.linkedin.com/in/williamde-ath/", company: "AlphaTON" },
            { name: "Thomas Hussenet", linkedin: "https://www.linkedin.com/in/thomas-hussenet/", company: "XRPL" },
            { name: "Jean-François Rochet", linkedin: "https://www.linkedin.com/in/jfrochet/", company: "Ledger" },
            { name: "Carmen Hett", linkedin: "https://www.linkedin.com/in/carmen-hett-/", company: "UNHCR" },
            { name: "Stan Stelcher", linkedin: "https://www.linkedin.com/in/stan-stelcher/", company: "BSA" },
        ],
    },
    {
        date: new Date("2026-03-20T16:00:00"),
        name: "How Can Banks Create a DeFi Strategy?",
        icon: "panel",
        duration: 0.75,
        stage: "panel",
        panelists: [
            { name: "Carlos Martin Doncel", linkedin: "https://www.linkedin.com/in/carlos-martin-doncel-7ab37319/", company: "Swissquote" },
            { name: "Charles Henry Monchau", linkedin: "https://www.linkedin.com/in/charles-henry-monchau-cfa-cmt-caia-4003096/", company: "SYZ" },
            { name: "Rafael Mastroberardino", linkedin: "https://www.linkedin.com/in/rafael-mastroberardino/", company: "Franklin Templeton" },
            { name: "Mark Richardson", linkedin: "https://www.linkedin.com/in/mrichardson87/", company: "Bancor Protocol" },
            { name: "Sebastiaan Krist", linkedin: "https://www.linkedin.com/in/sebastiaankrist/", company: "Raiffeisen" },
        ],
    },

    // === KEYNOTE STAGE ===
    {
        date: new Date("2026-03-20T09:30:00"),
        name: "AlphaTON - Data Sovereignty, Take Back Control: Blockchain in the Age of AI",
        icon: "keynote",
        duration: 0.5,
        stage: "keynote",
        panelists: [
            { name: "William De Ath", linkedin: "https://www.linkedin.com/in/williamde-ath/", company: "AlphaTON" },
        ],
    },
    {
        date: new Date("2026-03-20T09:50:00"),
        name: "The Rise of Autonomous Agents in Decentralized Finance",
        icon: "keynote",
        duration: 0.5,
        stage: "keynote",
        panelists: [
            { name: "Gauthier Vila", linkedin: "https://www.linkedin.com/in/gauthier-vila/", company: "Zyfai" },
        ],
    },
    {
        date: new Date("2026-03-20T10:15:00"),
        name: "How Token Issuers Efficiently Grow TVL: Lessons From Billion Dollar Market",
        icon: "keynote",
        duration: 0.75,
        stage: "keynote",
        panelists: [
            { name: "Nandy", linkedin: "https://www.linkedin.com/in/nandyba/", company: "AAVE" },
        ],
    },
    {
        date: new Date("2026-03-20T11:00:00"),
        name: "On-Chain Treasury - United Nations Transformation: Adoption of Blockchain Technology, Tokenisation, and Use of Stablecoins",
        icon: "keynote",
        duration: 0.75,
        stage: "keynote",
        panelists: [
            { name: "Carmen Hett", linkedin: "https://www.linkedin.com/in/carmen-hett-/", company: "UNHCR" },
            { name: "William De Ath", linkedin: "https://www.linkedin.com/in/williamde-ath/", company: "AlphaTON" },
        ],
    },
    {
        date: new Date("2026-03-20T11:45:00"),
        name: "Belem Capital - From Experiment to Infrastructure: How Institutional Capital Is Reshaping DeFi",
        icon: "keynote",
        duration: 0.75,
        stage: "keynote",
        panelists: [
            { name: "Stanislas de Maistre", linkedin: "https://www.linkedin.com/in/standemaistre/", company: "Belem Capital" },
        ],
    },
    {
        date: new Date("2026-03-20T13:00:00"),
        name: "CMTAT",
        icon: "keynote",
        duration: 0.25,
        stage: "keynote",
        panelists: [
            { name: "Rosie Ovan", linkedin: "https://www.linkedin.com/in/rosieovan/", company: "CMTA" },
            { name: "Ryan Sauge", linkedin: "https://www.linkedin.com/in/ryan-sge/", company: "Taurus" },
        ],
    },
    {
        date: new Date("2026-03-20T13:15:00"),
        name: "Stablecoins will bring all the trading onchain",
        icon: "keynote",
        duration: 0.75,
        stage: "keynote",
        panelists: [
            { name: "Nicolas Rémond", linkedin: "https://www.linkedin.com/in/nremond/", company: "SwissBorg" },
        ],
    },
    {
        date: new Date("2026-03-20T14:00:00"),
        name: "Hyli - the ZK settlement layer for institutional finance",
        icon: "keynote",
        duration: 0.75,
        stage: "keynote",
        panelists: [
            { name: "Lancelot de Ferrière", linkedin: "https://www.linkedin.com/in/lancelotdeferriere/", company: "Hyli" },
        ],
    },
    {
        date: new Date("2026-03-20T14:45:00"),
        name: "Areta x Storm - Understanding M&A in Digital Assets: From Industry Origins to Future Opportunities",
        icon: "keynote",
        duration: 0.75,
        stage: "keynote",
        panelists: [
            { name: "Sheraz Ahmed", linkedin: "https://www.linkedin.com/in/sherazahmed1/", company: "STORM Partners" },
            { name: "Timothy Voirol", linkedin: "https://www.linkedin.com/in/timothy-voirol/", company: "Areta" },
        ],
    },
    {
        date: new Date("2026-03-20T15:30:00"),
        name: "Institutional Yield in Digital Assets: Technical Foundations and Regulatory Aspects",
        icon: "keynote",
        duration: 0.75,
        stage: "keynote",
        panelists: [
            { name: "Florian Ducommun", linkedin: "https://www.linkedin.com/in/florianducommun/", company: "Bonnard Lawson" },
        ],
    },

    // === TECHNICAL STAGE ===
    {
        date: new Date("2026-03-20T10:30:00"),
        name: "Ephemeral Coin Tracing",
        icon: "technical",
        duration: 0.75,
        stage: "technical",
        panelists: [
            { name: "François-Xavier Wicht", linkedin: "François-Xavier Wicht", company: "UniBern" },
        ],
    },
    {
        date: new Date("2026-03-20T11:15:00"),
        name: "Programmable Money: How Stablecoins Replace the Backend of Asset Management",
        icon: "technical",
        duration: 0.75,
        stage: "technical",
        panelists: [
            { name: "Marc Bickel", linkedin: "https://www.linkedin.com/in/marc-bickel/", company: "Fume" },
        ],
    },
    {
        date: new Date("2026-03-20T14:00:00"),
        name: "Offline Use of Stablecoins at Time of War or Natural Disaster",
        icon: "technical",
        duration: 0.75,
        stage: "technical",
        panelists: [
            { name: "Dr. habil. Jean-Marc Seigneur", linkedin: "https://www.linkedin.com/in/jmseigneur/", company: "University of Geneva" },
        ],
    },
    {
        date: new Date("2026-03-20T14:45:00"),
        name: "An Arbitrary Mean-Rate Exchange Protocol",
        icon: "technical",
        duration: 0.75,
        stage: "technical",
        panelists: [
            { name: "Mark Richardson", linkedin: "https://www.linkedin.com/in/mrichardson87/", company: "Bancor Protocol" },
        ],
    },
    {
        date: new Date("2026-03-20T15:30:00"),
        name: "The Invisible Infrastructure: How Stablecoins Are Quietly Rebuilding Global Payments",
        icon: "technical",
        duration: 0.75,
        stage: "technical",
        panelists: [
            { name: "Dr. Anandadeep Mandal", linkedin: "https://www.linkedin.com/in/anandadeep-mandal-177978293/" },
        ],
    },
];
