import React, { useState, useEffect } from 'react';
import { Tab } from '@headlessui/react';
import { CurrentEvent, DayProps, ScheduleEventType } from '@/types/ScheduleTypes';
import ScheduleEvent from './ScheduleEvent';
import ConferenceSchedule from './ConferenceSchedule';

const navigationEvent: DayProps[] = [
    {
        label: "Fri, 20 Mar",
        date: "2026-03-20",
        description: "Conference"
    },
    {
        label: "Sat, 21 Mar",
        date: "2026-03-21",
        description: "Hackathon Day 1"
    },
    {
        label: "Sun, 22 Mar",
        date: "2026-03-22",
        description: "Hackathon Day 2"
    },
];

const schedule: ScheduleEventType[] = [
    // Conference (Mar 20, 2026)

    // Hackathon Day 1 (Mar 21, 2026)
    {
        date: new Date("2026-03-21T08:30:00"),
        name: "Registration & Breakfast",
        icon: "breakfast",
        duration: 1.5,
        value: "2026-03-21"
    },
    {
        date: new Date("2026-03-21T09:30:00"),
        name: "Opening Ceremony",
        icon: "ceremonyOpen",
        duration: 0.25,
        value: "2026-03-21"
    },
    {
        date: new Date("2026-03-21T10:00:00"),
        name: "Hacking Starts",
        icon: "code",
        duration: 0,
        value: "2026-03-21"
    },
    {
        date: new Date("2026-03-21T12:30:00"),
        name: "Brunch",
        icon: "snacks",
        duration: 0.5,
        value: "2026-03-21"
    },
    {
        date: new Date("2026-03-21T18:30:00"),
        name: "Dinner",
        icon: "meal",
        duration: 1,
        value: "2026-03-21"
    },

    // Hackathon Day 2 (Mar 22, 2026)
    {
        date: new Date("2026-03-22T00:00:00"),
        name: "Midnight Snack",
        icon: "snacks",
        duration: 1,
        value: "2026-03-22"
    },
    {
        date: new Date("2026-03-22T07:00:00"),
        name: "Breakfast",
        icon: "breakfast",
        duration: 2,
        value: "2026-03-22"
    },
    {
        date: new Date("2026-03-22T13:00:00"),
        name: "Hacking Ends",
        icon: "projectSubmission",
        duration: 0,
        value: "2026-03-22"
    },
    {
        date: new Date("2026-03-22T13:00:00"),
        name: "Lunch",
        icon: "meal",
        duration: 1,
        value: "2026-03-22"
    },
    {
        date: new Date("2026-03-22T13:00:00"),
        name: "Judging",
        icon: "judging",
        duration: 2,
        value: "2026-03-22"
    },
    {
        date: new Date("2026-03-22T15:00:00"),
        name: "Closing Ceremony & Awards",
        icon: "ceremonyClose",
        duration: 2,
        value: "2026-03-22"
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
        <div className="w-full max-w-6xl mx-auto px-4 relative z-[2] py-16 rounded-xl">
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
                <Tab.List className="flex gap-1 bg-base-200 rounded-xl p-1.5 border border-white/10 mb-6 overflow-x-auto">
                    {navigationEvent.map((day) => (
                        <Tab
                            key={day.date}
                            className={({ selected }) =>
                                `whitespace-nowrap px-2.5 py-2 sm:px-4 sm:py-2.5 rounded-lg transition-all font-medium text-xs sm:text-sm ${selected
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
                            {day.date === "2026-03-20" ? (
                                <ConferenceSchedule currentTime={currentTime} />
                            ) : currentDaySchedule.length > 0 ? (
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
                                <p className="text-white/40 text-center py-12 bg-base-200 border border-white/10 rounded-xl">
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
