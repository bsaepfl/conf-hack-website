import React from 'react';
import {
    Coffee, Users, Pizza, Code as CodeIcon, Laptop,
    Sunrise, Award, Trophy, PartyPopper, Presentation as PresentationIcon,
    Upload, ClipboardList, MessagesSquare, Mic, GraduationCap
} from 'lucide-react';
import { ScheduleEventType } from '@/types/ScheduleTypes';

const icons: { [key: string]: React.ReactNode } = {
    meal: <Pizza className="w-5 h-5" />,
    team: <Users className="w-5 h-5" />,
    snacks: <Coffee className="w-5 h-5" />,
    code: <CodeIcon className="w-5 h-5" />,
    workshop: <Laptop className="w-5 h-5" />,
    breakfast: <Sunrise className="w-5 h-5" />,
    ceremonyClose: <Award className="w-5 h-5" />,
    ceremonyOpen: <PartyPopper className="w-5 h-5" />,
    judging: <Trophy className="w-5 h-5" />,
    presentation: <PresentationIcon className="w-5 h-5" />,
    projectSubmission: <Upload className="w-5 h-5" />,
    registration: <ClipboardList className="w-5 h-5" />,
    panel: <MessagesSquare className="w-5 h-5" />,
    keynote: <Mic className="w-5 h-5" />,
    technical: <GraduationCap className="w-5 h-5" />
};

const badgeConfig: { [key: string]: { label: string; color: string } } = {
    meal: { label: 'BREAK', color: 'bg-amber-500/20 text-amber-400 border-amber-500/30' },
    snacks: { label: 'BREAK', color: 'bg-amber-500/20 text-amber-400 border-amber-500/30' },
    breakfast: { label: 'BREAK', color: 'bg-amber-500/20 text-amber-400 border-amber-500/30' },
    workshop: { label: 'WORKSHOP', color: 'bg-green-500/20 text-green-400 border-green-500/30' },
    code: { label: 'HACKING', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
    ceremonyOpen: { label: 'CEREMONY', color: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
    ceremonyClose: { label: 'CEREMONY', color: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
    judging: { label: 'JUDGING', color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' },
    presentation: { label: 'TALK', color: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30' },
    projectSubmission: { label: 'SUBMISSION', color: 'bg-orange-500/20 text-orange-400 border-orange-500/30' },
    registration: { label: 'REGISTRATION', color: 'bg-slate-500/20 text-slate-400 border-slate-500/30' },
    team: { label: 'TEAM', color: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30' },
    panel: { label: 'PANEL', color: 'bg-violet-500/20 text-violet-400 border-violet-500/30' },
    keynote: { label: 'KEYNOTE', color: 'bg-rose-500/20 text-rose-400 border-rose-500/30' },
    technical: { label: 'RESEARCH', color: 'bg-teal-500/20 text-teal-400 border-teal-500/30' },
};

interface ScheduleEventProps {
    event: ScheduleEventType;
    isCurrentEvent: (event: ScheduleEventType) => boolean;
}

const ScheduleEvent: React.FC<ScheduleEventProps> = ({ event, isCurrentEvent }) => {
    const hours = event.date.getHours();
    const minutes = event.date.getMinutes();
    const isPM = hours >= 12;
    const displayHour = hours.toString().padStart(2, '0');
    const displayMin = minutes.toString().padStart(2, '0');
    const badge = badgeConfig[event.icon] || { label: 'EVENT', color: 'bg-white/10 text-white/70 border-white/20' };
    const isCurrent = isCurrentEvent(event);

    return (
        <li className={`relative flex items-center gap-3 sm:gap-6 px-3 sm:px-6 py-4 sm:py-5 rounded-xl border transition-colors ${isCurrent ? 'bg-base-300 border-purple-500/40' : 'bg-base-200 border-white/10 hover:bg-base-300'}`}>
            {/* Current event indicator */}
            {isCurrent && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-r-full bg-green-400" />
            )}

            {/* Time */}
            <div className="flex flex-col items-center flex-shrink-0 w-14 sm:w-20">
                <span className="text-xl sm:text-3xl font-bold" style={{ color: '#7c6bb4' }}>
                    {displayHour}:{displayMin}
                </span>
                <span className="text-xs text-white/40 font-medium uppercase">
                    {isPM ? 'PM' : 'AM'}
                </span>
            </div>

            {/* Divider */}
            <div className="w-px h-10 bg-white/10 flex-shrink-0 hidden sm:block" />

            {/* Content */}
            <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                    <span className={`text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-md border ${badge.color}`}>
                        {badge.label}
                    </span>
                    {event.duration ? (
                        <span className="text-xs text-white/30">{event.duration}h</span>
                    ) : null}
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-white break-words">
                    {event.name}
                </h3>
            </div>

            {/* Icon */}
            <div className="flex-shrink-0 text-white/20">
                {icons[event.icon]}
            </div>
        </li>
    );
};

export default ScheduleEvent;
