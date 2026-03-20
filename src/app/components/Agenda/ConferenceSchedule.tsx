'use client';

import React from 'react';
import { Tab } from '@headlessui/react';
import { ConferenceEventType, CurrentEvent, StageName } from '@/types/ScheduleTypes';
import { conferenceSchedule } from './conferenceData';
import ConferenceEventCard from './ConferenceEventCard';
import { MapPin } from 'lucide-react';

interface StageConfig {
    key: StageName;
    label: string;
    room: string;
    color: string;
}

const stages: StageConfig[] = [
    { key: 'panel', label: 'Panel Stage', room: 'BC 05/06', color: '#8b5cf6' },
    { key: 'keynote', label: 'Keynote Stage', room: 'BC420', color: '#f43f5e' },
    { key: 'technical', label: 'Technical Stage', room: 'BC410', color: '#14b8a6' },
];

interface ConferenceScheduleProps {
    currentTime: CurrentEvent;
}

function isFirstAfternoonGap(events: ConferenceEventType[], index: number): boolean {
    if (index === 0) return false;
    const prev = events[index - 1];
    const curr = events[index];
    const prevEnd = prev.date.getHours() * 60 + prev.date.getMinutes() + prev.duration * 60;
    const currStart = curr.date.getHours() * 60 + curr.date.getMinutes();
    if ((currStart - prevEnd) < 30) return false;
    // Only show divider for the first qualifying gap
    for (let j = 1; j < index; j++) {
        const pEnd = events[j - 1].date.getHours() * 60 + events[j - 1].date.getMinutes() + events[j - 1].duration * 60;
        const cStart = events[j].date.getHours() * 60 + events[j].date.getMinutes();
        if ((cStart - pEnd) >= 30) return false;
    }
    return true;
}

const StageColumn: React.FC<{
    stage: StageConfig;
    events: ConferenceEventType[];
    currentTime: CurrentEvent;
}> = ({ stage, events, currentTime }) => (
    <div className="flex flex-col">
        {/* Stage header */}
        <div className="pb-4 mb-4 border-b border-white/10">
            <div className="flex items-center gap-2.5">
                <div className="w-1 h-6 rounded-full" style={{ backgroundColor: stage.color }} />
                <h3 className="text-lg font-bold text-white">{stage.label}</h3>
            </div>
            <div className="flex items-center gap-1.5 mt-1.5 ml-3.5">
                <MapPin className="w-3 h-3 text-white/40" />
                <span className="text-sm font-medium text-white/50">{stage.room}</span>
            </div>
        </div>

        {/* Events with gap detection */}
        <div className="flex flex-col gap-2.5">
            {events.map((event, i) => (
                <React.Fragment key={i}>
                    {i > 0 && isFirstAfternoonGap(events, i) && (
                        <div className="flex items-center gap-3 py-1.5">
                            <div className="flex-1 h-px bg-white/[0.06]" />
                            <span className="text-[10px] font-medium text-white/25 uppercase tracking-wider">afternoon</span>
                            <div className="flex-1 h-px bg-white/[0.06]" />
                        </div>
                    )}
                    <ConferenceEventCard event={event} currentTime={currentTime} />
                </React.Fragment>
            ))}
        </div>
    </div>
);

const ConferenceSchedule: React.FC<ConferenceScheduleProps> = ({ currentTime }) => {
    const eventsByStage = (stage: StageName) =>
        conferenceSchedule.filter(e => e.stage === stage).sort((a, b) => a.date.getTime() - b.date.getTime());

    return (
        <div>
            {/* Desktop: 3-column grid */}
            <div className="hidden md:block">
                <div className="grid grid-cols-3 gap-6">
                    {stages.map((stage) => (
                        <StageColumn key={stage.key} stage={stage} events={eventsByStage(stage.key)} currentTime={currentTime} />
                    ))}
                </div>
            </div>

            {/* Mobile: sub-tabs per stage */}
            <div className="md:hidden">
                <Tab.Group>
                    <Tab.List className="flex gap-1 bg-base-300/50 rounded-lg p-1 mb-5">
                        {stages.map((stage) => (
                            <Tab
                                key={stage.key}
                                className={({ selected }: { selected: boolean }) =>
                                    `flex-1 rounded-md text-xs font-medium transition-all ${selected
                                        ? 'text-white shadow-sm'
                                        : 'text-white/40 hover:text-white/60'
                                    }`
                                }
                            >
                                {({ selected }: { selected: boolean }) => (
                                    <div
                                        className={`rounded-md px-3 py-2 text-center ${selected ? 'text-white' : 'text-white/40'}`}
                                        style={selected ? { backgroundColor: stage.color } : {}}
                                    >
                                        <span className="block text-xs font-medium">{stage.label.replace(' Stage', '')}</span>
                                        <span className="block text-[10px] opacity-70 mt-0.5">{stage.room}</span>
                                    </div>
                                )}
                            </Tab>
                        ))}
                    </Tab.List>
                    <Tab.Panels>
                        {stages.map((stage) => {
                            const events = eventsByStage(stage.key);
                            return (
                                <Tab.Panel key={stage.key}>
                                    <div className="flex flex-col gap-2.5">
                                        {events.map((event, i) => (
                                            <React.Fragment key={i}>
                                                {i > 0 && isFirstAfternoonGap(events, i) && (
                                                    <div className="flex items-center gap-3 py-1.5">
                                                        <div className="flex-1 h-px bg-white/[0.06]" />
                                                        <span className="text-[10px] font-medium text-white/25 uppercase tracking-wider">afternoon</span>
                                                        <div className="flex-1 h-px bg-white/[0.06]" />
                                                    </div>
                                                )}
                                                <ConferenceEventCard event={event} currentTime={currentTime} />
                                            </React.Fragment>
                                        ))}
                                    </div>
                                </Tab.Panel>
                            );
                        })}
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </div>
    );
};

export default ConferenceSchedule;
