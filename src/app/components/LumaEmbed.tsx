'use client';

interface LumaEmbedProps {
    eventId: string;
    title?: string;
    description?: string;
}

export default function LumaEmbed({ eventId, title, description }: LumaEmbedProps) {
    return (
        <div className="w-full py-16 px-4 bg-base-200">
            <div className="max-w-4xl mx-auto">
                {title && (
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-base-content">
                        {title}
                    </h2>
                )}
                {description && (
                    <p className="text-center text-base-content/80 mb-8 max-w-2xl mx-auto">
                        {description}
                    </p>
                )}
                <div className="flex justify-center">
                    <iframe
                        src={`https://luma.com/embed/event/${eventId}/simple`}
                        width="600"
                        height="450"
                        frameBorder="0"
                        style={{ border: '1px solid #bfcbda88', borderRadius: '4px' }}
                        allow="fullscreen; payment"
                        aria-hidden="false"
                        tabIndex={0}
                        className="w-full max-w-[600px] shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
}
