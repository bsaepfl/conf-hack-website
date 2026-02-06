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
        <div className="w-full max-w-5xl mx-auto px-4 relative z-[2] py-16">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
                <div>
                    <span className="text-sm font-bold tracking-widest uppercase" style={{ color: '#7c6bb4' }}>
                        Agenda
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mt-1">
                        Event Schedule
                    </h2>
                </div>
            </div>

            {/* Tabs */}
            <Tab.Group onChange={(index) => setSelectedDay(navigationEvent[index])}>
                <Tab.List className="flex gap-1 bg-white/[0.03] backdrop-blur-md rounded-xl p-1.5 border border-white/[0.06] mb-6 overflow-x-auto">
                    {navigationEvent.map((day) => (
                        <Tab
                            key={day.date}
                            className={({ selected }) =>
                                `whitespace-nowrap px-4 py-2.5 rounded-lg transition-all font-medium text-sm ${selected
                                    ? 'bg-[#7c6bb4] text-white shadow-lg shadow-purple-500/20'
                                    : 'text-white/40 hover:text-white/70 hover:bg-white/[0.05]'
                                }`
                            }
                        >
                            {day.label}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels>
                    {navigationEvent.map((day) => (
                        <Tab.Panel key={day.date}>
                            {currentDaySchedule.length > 0 ? (
                                <ul className="flex flex-col gap-3">
                                    {currentDaySchedule.map((event, index) => (
                                        <ScheduleEvent
                                            key={`${day.date}-${index}`}
                                            event={event}
                                            isCurrentEvent={isCurrentEvent}
                                        />
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-white/40 text-center py-12 bg-white/[0.03] border border-white/[0.06] rounded-xl">
                                    No events scheduled for this day
                                </p>
                            )}
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    );
};

export default ScheduleView;
