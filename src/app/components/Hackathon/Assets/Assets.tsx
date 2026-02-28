import { DayProps, FaqType, ScheduleEvent } from "../Types/Types";
import { generateDate } from "../Utils/generateDate";

export const navigationPreEvent: DayProps[] = [
  {
    label: "Mon, 23 Sep",
    date: "2024-09-23",
    description: "Pre-Event",
  },
  {
    label: "Thu, 26 Sept",
    date: "2024-09-26",
    description: "Pre-Event",
  },
  {
    label: "Mon, 30 Sep",
    date: "2024-09-30",
    description: "Pre-Event",
  },
  {
    label: "Thu, 3 Oct",
    date: "2024-10-03",
    description: "Pre-Event",
  },
  {
    label: "Mon, 7 Oct",
    date: "2024-10-07",
    description: "Pre-Event",
  },
];

export const navigationEvent: DayProps[] = [
  {
    label: "Sat, 12 Oct",
    date: "2024-10-12",
    description: "1st Day",
  },
  {
    label: "Sun, 13 Oct",
    date: "2024-10-13",
    description: "2nd Day",
  },
];

export const schedule: ScheduleEvent[] = [
  // PRE EVENT
  {
    name: "Workshop #1: Introduction to Sui and Installation",
    icon: "workshop",
    description: "",
    time: "18:00",
    date: generateDate("2024-09-23", 18, 0),
    duration: 2,
    value: "2024-09-23",
  },
  {
    name: "Office hours: In person and online via Telegram",
    icon: "team",
    description: "",
    time: "18:00",
    date: generateDate("2024-09-26", 18, 0),
    duration: 2,
    value: "2024-09-26",
  },
  {
    name: "Workshop #2: Introduction to the Sui Move programming language",
    icon: "workshop",
    description: "",
    time: "18:00",
    date: generateDate("2024-09-30", 18, 0),
    duration: 2,
    value: "2024-09-30",
  },
  {
    name: "Office hours: In person and online via Telegram",
    icon: "team",
    description: "",
    time: "18:00",
    date: generateDate("2024-10-03", 18, 0),
    duration: 2,
    value: "2024-10-03",
  },
  {
    name: "Workshop #3: Latecomers & Deep Dive into the Ecosystem with Sui Devs",
    icon: "workshop",
    description: "",
    time: "18:00",
    date: generateDate("2024-10-07", 18, 0),
    duration: 2,
    value: "2024-10-07",
  },

  // HACKATHON

  {
    name: "Registration",
    icon: "registration",
    description: "",
    time: "08:00",
    date: generateDate("2024-10-12", 8, 0),
    duration: 2,
    value: "2024-10-12",
  },
  {
    name: "Breakfast",
    icon: "breakfast",
    description: "",
    time: "08:00",
    date: generateDate("2024-10-12", 8, 0),
    duration: 2,
    value: "2024-10-12",
  },
  {
    name: "Opening Ceremony",
    icon: "ceremonyOpen",
    description: "",
    time: "10:00",
    date: generateDate("2024-10-12", 10, 0),
    duration: 0,
    value: "2024-10-12",
  },
  {
    name: "Sui Overview",
    icon: "workshop",
    description: "",
    time: "10:30",
    date: generateDate("2024-10-12", 10, 30),
    duration: 1,
    value: "2024-10-12",
  },
  {
    name: "Team Building",
    icon: "team",
    description: "",
    time: "11:30",
    date: generateDate("2024-10-12", 11, 30),
    duration: 0,
    value: "2024-10-12",
  },
  {
    name: "Hacking Start!",
    icon: "code",
    description: "",
    time: "12:00",
    date: generateDate("2024-10-12", 12, 0),
    duration: 0,
    value: "2024-10-12",
  },
  {
    name: "Brunch",
    icon: "meal",
    description: "",
    time: "13:00",
    date: generateDate("2024-10-12", 13, 0),
    duration: 1,
    value: "2024-10-12",
  },
  {
    name: "Snacks",
    icon: "snacks",
    description: "",
    time: "18:00",
    date: generateDate("2024-10-12", 18, 0),
    duration: 1,
    value: "2024-10-12",
  },
  {
    name: "Dinner",
    icon: "meal",
    description: "",
    time: "20:00",
    date: generateDate("2024-10-12", 20, 0),
    duration: 1,
    value: "2024-10-12",
  },
  {
    name: "Midnight Snacks",
    icon: "snacks",
    description: "",
    time: "00:00",
    date: generateDate("2024-10-13", 0, 0),
    duration: 1,
    value: "2024-10-13",
  },
  {
    name: "Breakfast",
    icon: "breakfast",
    description: "",
    time: "07:00",
    date: generateDate("2024-10-13", 7, 0),
    duration: 2,
    value: "2024-10-13",
  },
  {
    name: "Project Submissions Due!",
    icon: "projectSubmission",
    description: "",
    time: "13:00",
    date: generateDate("2024-10-13", 13, 0),
    duration: 0,
    value: "2024-10-13",
  },
  {
    name: "Lunch",
    icon: "meal",
    description: "",
    time: "13:00",
    date: generateDate("2024-10-13", 13, 0),
    duration: 1,
    value: "2024-10-13",
  },
  {
    name: "Judging",
    icon: "judging",
    description: "",
    time: "13:00",
    date: generateDate("2024-10-13", 13, 0),
    duration: 2,
    value: "2024-10-13",
  },
  {
    name: "Closing Ceremony and Announcement of the Winners",
    icon: "podium",
    description: "",
    time: "15:00",
    date: generateDate("2024-10-13", 15, 0),
    duration: 2,
    value: "2024-10-13",
  },
];

export const faqQuestions: FaqType[] = [
  {
    question: "Can I participate?",
    answer:
      "You must be at least 18 years old and a student, including apprentices and PhD students, or have graduated in the past 24 months.",
  },
  {
    question: "How much does it cost?",
    answer: "Thanks to our sponsors, attendance is free (including food).",
  },
  {
    question: "I am new to hackathon, can I participate?",
    answer:
      "Absolutely! Our events are open to both beginners and veterans of the blockchain world. This event in particular will be tailored to attendees who have a basic knowledge in Computer Science and are interested in exploring or starting a journey in blockchain.",
  },
  {
    question:
      "Will there be any preparation if we do not know the programming language?",
    answer:
      "Of course! For the next three weeks, we will have workshops and Office hours where you can come to learn. If you sign up, you'll be able to enter the Telegram group for the hackathon in which Move developers await for your questions.\nFinally, not all of the hack is about code! You also need to have ideas and knowledge in Finance and marketing can be very helpful for your team!",
  },
  {
    question: "What is the size of the teams?",
    answer:
      "Teams can range from 2 to 4 participants. We recommend having 2 participants that know how to code and one from a Business background.",
  },
  {
    question: "Where is it?",
    answer:
      "The Sui x BSA III Hackathon will take place in EPFL’s Lausanne campus, BC Building. You can find directions in the section above.",
  },
  {
    question: "What should I bring?",
    answer:
      "Your laptop and charger, as well as toiletries and a sleeping bag if you plan on sleeping there. Please bring a valid ID for admission.",
  },
  {
    question: "Where will I sleep?",
    answer:
      "Mattresses and sleeping bags will be provided on campus for non-local participants. Local participants are welcome to head home, and a quiet room will be available for naps.",
  },
  {
    question: "Will my travel be reimbursed?",
    answer:
      "There is a travel grant of 100 usdc available for non-local participants. To apply, please fill in the travel grant application form.",
  },
  {
    question: "What if I don't have a team?",
    answer:
      "You don’t need one to apply! Part of the fun of a hackathon is meeting new people. We have created a Telegram group in which you will be added upon form registration were you will be able to find a team. You can also come during our workshops to find a team! It is also possible to create teams the first day of hacking.",
  },
  // {
  //   question: "What about intellectual property?",
  //   answer:
  //     "We do not claim any rights on any of your intellectual property whatsoever. Everything you create, at Sui x BSA hackathon or not, belongs to you.",
  // },
];
