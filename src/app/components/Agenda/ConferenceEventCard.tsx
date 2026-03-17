import React from 'react';
import {
    MessagesSquare, Mic, GraduationCap, Pizza, ClipboardList, Award
} from 'lucide-react';
import { ConferenceEventType, CurrentEvent } from '@/types/ScheduleTypes';

const icons: { [key: string]: React.ReactNode } = {
    panel: <MessagesSquare className="w-4 h-4" />,
    keynote: <Mic className="w-4 h-4" />,
    technical: <GraduationCap className="w-4 h-4" />,
    meal: <Pizza className="w-4 h-4" />,
    registration: <ClipboardList className="w-4 h-4" />,
    ceremonyClose: <Award className="w-4 h-4" />,
};

const badgeConfig: { [key: string]: { label: string; color: string } } = {
    panel: { label: 'PANEL', color: 'bg-violet-500/20 text-violet-400 border-violet-500/30' },
    keynote: { label: 'KEYNOTE', color: 'bg-rose-500/20 text-rose-400 border-rose-500/30' },
    technical: { label: 'RESEARCH', color: 'bg-teal-500/20 text-teal-400 border-teal-500/30' },
    meal: { label: 'BREAK', color: 'bg-amber-500/20 text-amber-400 border-amber-500/30' },
    registration: { label: 'REGISTRATION', color: 'bg-slate-500/20 text-slate-400 border-slate-500/30' },
    ceremonyClose: { label: 'CEREMONY', color: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
};

const stageColors: { [key: string]: string } = {
    panel: '#8b5cf6',
    keynote: '#f43f5e',
    technical: '#14b8a6',
};

interface ConferenceEventCardProps {
    event: ConferenceEventType;
    currentTime: CurrentEvent;
}

const ConferenceEventCard: React.FC<ConferenceEventCardProps> = ({ event, currentTime }) => {
    const hours = event.date.getHours();
    const minutes = event.date.getMinutes();
    const displayHour = hours.toString().padStart(2, '0');
    const displayMin = minutes.toString().padStart(2, '0');

    const endTotalMin = (hours * 60 + minutes) + event.duration * 60;
    const endH = Math.floor(endTotalMin / 60).toString().padStart(2, '0');
    const endM = (endTotalMin % 60).toString().padStart(2, '0');

    const eventDateStr = event.date.toISOString().split('T')[0];
    const eventStart = hours * 60 + minutes;
    const eventEnd = eventStart + event.duration * 60;
    const currentMinutes = currentTime.hour * 60 + currentTime.minutes;
    const isCurrent = eventDateStr === currentTime.date && eventStart <= currentMinutes && currentMinutes <= eventEnd;

    const badge = badgeConfig[event.icon] || { label: 'EVENT', color: 'bg-white/10 text-white/70 border-white/20' };
    const borderColor = stageColors[event.stage] || '#7c6bb4';

    return (
        <div
            className={`relative flex items-start gap-3 px-3 py-3 rounded-lg border-l-2 transition-colors ${
                isCurrent ? 'bg-base-300 border-r border-t border-b border-r-purple-500/40 border-t-purple-500/40 border-b-purple-500/40' : 'bg-base-200 border-r border-t border-b border-r-white/10 border-t-white/10 border-b-white/10 hover:bg-base-300'
            }`}
            style={{ borderLeftColor: borderColor }}
        >
            {isCurrent && (
                <div className="absolute right-2 top-2 w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            )}

            <div className="flex flex-col items-center flex-shrink-0 w-14">
                <span className="text-lg font-bold" style={{ color: '#7c6bb4' }}>
                    {displayHour}:{displayMin}
                </span>
                <span className="text-sm text-white/30">
                    {endH}:{endM}
                </span>
            </div>

            <div className="flex flex-col gap-1 flex-1 min-w-0">
                <div className="flex items-center gap-1.5 flex-wrap">
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ${badge.color}`}>
                        {badge.label}
                    </span>
                </div>
                <h4 className="text-sm font-semibold text-white leading-tight">
                    {event.name}
                </h4>
                {event.speaker && (
                    <p className="text-xs text-white/50">{event.speaker}</p>
                )}
            </div>

            <div className="flex-shrink-0 text-white/20 mt-0.5">
                {icons[event.icon]}
            </div>
        </div>
    );
};

export default ConferenceEventCard;
