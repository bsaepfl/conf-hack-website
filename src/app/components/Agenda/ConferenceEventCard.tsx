import React from 'react';
import { ConferenceEventType, CurrentEvent } from '@/types/ScheduleTypes';

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

    const endMinutes = hours * 60 + minutes + event.duration * 60;
    const endH = Math.floor(endMinutes / 60).toString().padStart(2, '0');
    const endM = (endMinutes % 60).toString().padStart(2, '0');

    const startMin = hours * 60 + minutes;
    const now = currentTime.hour * 60 + currentTime.minutes;
    const eventDate = `${event.date.getFullYear()}-${(event.date.getMonth() + 1).toString().padStart(2, '0')}-${event.date.getDate().toString().padStart(2, '0')}`;
    const isCurrent = eventDate === currentTime.date && startMin <= now && now <= endMinutes;

    const borderColor = stageColors[event.stage] || '#7c6bb4';

    return (
        <div
            className={`relative flex items-start gap-3 px-3.5 py-3.5 rounded-lg transition-colors ${
                isCurrent
                    ? 'bg-base-300 border border-purple-500/40 border-l-2'
                    : 'bg-base-200 border border-white/[0.06] border-l-2'
            }`}
            style={{ borderLeftColor: borderColor }}
        >
            {isCurrent && (
                <div className="absolute right-2.5 top-2.5 w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            )}

            {/* Time block */}
            <div className="flex flex-col items-center flex-shrink-0 w-[3.75rem] tabular-nums">
                <span className="text-xl font-bold leading-none" style={{ color: '#7c6bb4' }}>
                    {displayHour}:{displayMin}
                </span>
                <span className="text-sm text-white/40 mt-0.5">
                    {endH}:{endM}
                </span>
            </div>

            {/* Subtle divider */}
            <div className="w-px self-stretch bg-white/[0.06] flex-shrink-0" />

            {/* Content */}
            <div className="flex flex-col gap-0.5 flex-1 min-w-0 pt-0.5">
                <h4 className="text-sm font-semibold text-white leading-snug">
                    {event.name}
                </h4>
                {event.speaker && (
                    <p className="text-xs text-white/45 leading-relaxed">{event.speaker}</p>
                )}
                {event.panelists && event.panelists.length > 0 && (
                    <div className="flex flex-wrap gap-x-1.5 gap-y-0.5 mt-0.5">
                        {event.panelists.map((p, i) => (
                            <span key={i}>
                                <a href={p.linkedin} target="_blank" rel="noreferrer"
                                   className="text-xs text-white/45 hover:text-white/70 underline underline-offset-2 transition-colors">
                                    {p.name}{p.company && ` (${p.company})`}
                                </a>
                                {i < event.panelists!.length - 1 && <span className="text-white/20">,</span>}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ConferenceEventCard;
