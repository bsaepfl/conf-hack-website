import React, { useState, useEffect } from 'react';
import { Tab } from '@headlessui/react';
import { CurrentEvent, DayProps, ScheduleEventType } from '@/types/ScheduleTypes';
import ScheduleEvent from './ScheduleEvent';

const navigationEvent: DayProps[] = [
    {
        label: "Thu, 11 Sep",
        date: "2025-09-11",
        description: "Workshop 1 - Sui Overview & Installation"
    },
    {
        label: "Thu, 18 Sep",
        date: "2025-09-18",
        description: "Workshop 2 - Move Language"
    },
    {
        label: "Thu, 25 Sep",
        date: "2025-09-25",
        description: "Workshop 3 - Advanced Features (contract deployment, front-end integration, testing)"
    },
    {
        label: "Sat, 27 Sep",
        date: "2025-09-27",
        description: "Day 1"
    },
    {
        label: "Sun, 28 Sep",
        date: "2025-09-28",
        description: "Day 2"
    },
    
];

const schedule: ScheduleEventType[] = [
    {
        date: new Date("2025-09-11T17:00:00"),
        name: "Workshop 1 - Sui Overview & Installation",
        icon: "workshop",
        duration: 3,
        value: "2025-09-11"
    },
    {
        date: new Date("2025-09-18T17:00:00"),
        name: "Workshop 2 - Move Language",
        icon: "workshop",
        duration: 3,
        value: "2025-09-18"
    },
    {
        date: new Date("2025-09-25T17:00:00"),
        name: "Workshop 3 - Advanced Features (contract deployment, front-end integration, testing",
        icon: "workshop",
        duration: 3,
        value: "2025-09-25"
    },
    
     // Day 1 (Sep 27, 2025)
     {
        date: new Date("2025-09-27T08:30:00"),
        name: "Registration & Breakfast",
        icon: "breakfast",
        duration: 1.5,
        value: "2025-09-27"
    },
    {
        date: new Date("2025-09-27T09:30:00"),
        name: "Opening Ceremony",
        icon: "ceremonyOpen",
        duration: 0.25,
        value: "2025-09-27"
    },
    {
        date: new Date("2025-09-27T10:00:00"),
        name: "Hacking Starts",
        icon: "code",
        duration: 0,
        value: "2025-09-27"
    },
    {
        date: new Date("2025-09-27T12:30:00"),
        name: "Brunch",
        icon: "snacks",
        duration: 0.5,
        value: "2025-09-27"
    },
    {
        date: new Date("2025-09-27T18:30:00"),
        name: "Dinner",
        icon: "meal",
        duration: 1,
        value: "2025-09-27"
    },

    // Day 2 (Sep 28, 2025)
    {
        date: new Date("2025-09-28T00:00:00"),
        name: "Midnight Snack",
        icon: "snacks",
        duration: 1,
        value: "2025-09-28"
    },
    {
        date: new Date("2025-09-28T07:00:00"),
        name: "Breakfast",
        icon: "breakfast",
        duration: 2,
        value: "2025-09-28"
    },
    {
        date: new Date("2025-09-28T13:00:00"),
        name: "Hacking Ends",
        icon: "projectSubmission",
        duration: 0,
        value: "2025-09-28"
    },
    {
        date: new Date("2025-09-28T13:00:00"),
        name: "Lunch",
        icon: "meal",
        duration: 1,
        value: "2025-09-28"
    },
    {
        date: new Date("2025-09-28T13:00:00"),
        name: "Judging",
        icon: "judging",
        duration: 2,
        value: "2025-09-28"
    },
    {
        date: new Date("2025-09-28T15:00:00"),
        name: "Closing Ceremony & Awards",
        icon: "ceremonyClose",
        duration: 2,
        value: "2025-09-28"
    },
];

const ScheduleView: React.FC = () => {
    const [selectedDay, setSelectedDay] = useState(navigationEvent[0]);
    const [currentTime, setCurrentTime] = useState<CurrentEvent>({
        date: "",
        hour: 0,
        minutes: 0
    });

    const isCurrentEvent = (event: ScheduleEventType) => {
        if (event.value === currentTime.date) {
            const eventStart = event.date.getHours() * 60 + event.date.getMinutes();
            const eventEnd = eventStart + (event.duration || 0) * 60;
            const currentTimeInMinutes = currentTime.hour * 60 + currentTime.minutes;
            return eventStart <= currentTimeInMinutes && currentTimeInMinutes <= eventEnd;
        }
        return false;
    };

    useEffect(() => {
        const now = new Date();
        const date = now.toISOString().split('T')[0];
        setCurrentTime({
            date,
            hour: now.getHours(),
            minutes: now.getMinutes()
        });
    }, []);

    const currentDaySchedule = schedule.filter(
        (event) => event.value === selectedDay.date
    );

    return (
        <div className="w-full max-w-7xl mx-auto px-4">
            <br />
            <h2 className="w-full font-bold text-3xl sm:text-4xl text-black indent-2 pb-10">
                Schedule
            </h2>
            <Tab.Group onChange={(index) => setSelectedDay(navigationEvent[index])}>
                <Tab.List className="flex space-x-2 bg-white bg-opacity-100 rounded-xl p-2">
                    {navigationEvent.map((day) => (
                        <Tab
                            key={day.date}
                            className={({ selected }) =>
                                `px-4 py-2 rounded-lg transition-colors ${selected ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'
                                }`
                            }
                        >
                            {day.label}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="mt-4">
                    {navigationEvent.map((day) => (
                        <Tab.Panel key={day.date}>
                            {currentDaySchedule.length > 0 ? (
                                <ul className="bg-white bg-opacity-100 rounded-xl divide-y">
                                    {currentDaySchedule.map((event, index) => (
                                        <ScheduleEvent
                                            key={`${day.date}-${index}`}
                                            event={event}
                                            isCurrentEvent={isCurrentEvent}
                                        />
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-gray-500 text-center py-8 bg-white bg-opacity-100">
                                    No events scheduled for this day
                                </p>
                            )}
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
            <br />
        </div>
    );
};

export default ScheduleView;
