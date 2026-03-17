'use client';

import React from 'react';
import { Tab } from '@headlessui/react';
import { ConferenceEventType, CurrentEvent, StageName } from '@/types/ScheduleTypes';
import { conferenceSchedule } from './conferenceData';
import ConferenceEventCard from './ConferenceEventCard';

interface StageConfig {
    key: StageName;
    label: string;
    description: string;
    color: string;
}

const stages: StageConfig[] = [
    { key: 'panel', label: 'Main Stage', description: '6 panels on payments & blockchain', color: '#8b5cf6' },
    { key: 'keynote', label: 'Secondary Stage', description: '8 keynote presentations', color: '#f43f5e' },
    { key: 'technical', label: 'Technical Stage', description: '6 research talks', color: '#14b8a6' },
];

interface ConferenceScheduleProps {
    currentTime: CurrentEvent;
}

const StageColumn: React.FC<{
    stage: StageConfig;
    events: ConferenceEventType[];
    currentTime: CurrentEvent;
}> = ({ stage, events, currentTime }) => (
    <div className="flex flex-col">
        <div className="pb-3 mb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
                <div className="w-1 h-6 rounded-full" style={{ backgroundColor: stage.color }} />
                <h3 className="text-lg font-bold text-white">{stage.label}</h3>
            </div>
            <p className="text-xs text-white/40 mt-1 ml-3">{stage.description}</p>
        </div>
        <div className="flex flex-col gap-2">
            {events.map((event, i) => (
                <ConferenceEventCard key={i} event={event} currentTime={currentTime} />
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
                <div className="grid grid-cols-3 gap-4">
                    {stages.map((stage) => (
                        <StageColumn key={stage.key} stage={stage} events={eventsByStage(stage.key)} currentTime={currentTime} />
                    ))}
                </div>
            </div>

            {/* Mobile: sub-tabs per stage */}
            <div className="md:hidden">
                <Tab.Group>
                    <Tab.List className="flex gap-1 bg-base-300/50 rounded-lg p-1 mb-4">
                        {stages.map((stage, idx) => (
                            <Tab
                                key={stage.key}
                                className={({ selected }: { selected: boolean }) =>
                                    `flex-1 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${selected
                                        ? 'text-white shadow-sm'
                                        : 'text-white/40 hover:text-white/60'
                                    }`
                                }
                            >
                                {({ selected }: { selected: boolean }) => (
                                    <span
                                        className={`block w-full rounded-md px-3 py-1.5 text-xs font-medium transition-all ${selected ? 'text-white' : 'text-white/40'
                                            }`}
                                        style={selected ? { backgroundColor: stage.color } : {}}
                                    >
                                        {stage.label.replace(' Stage', '')}
                                    </span>
                                )}
                            </Tab>
                        ))}
                    </Tab.List>
                    <Tab.Panels>
                        {stages.map((stage) => (
                            <Tab.Panel key={stage.key}>
                                <div className="flex flex-col gap-2">
                                    {eventsByStage(stage.key).map((event, i) => (
                                        <ConferenceEventCard key={i} event={event} currentTime={currentTime} />
                                    ))}
                                </div>
                            </Tab.Panel>
                        ))}
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </div>
    );
};

export default ConferenceSchedule;
