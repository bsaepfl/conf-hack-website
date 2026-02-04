'use client';

interface LumaEmbedProps {
    eventId: string;
    title?: string;
    description?: string;
}

export default function LumaEmbed({ eventId, title, description }: LumaEmbedProps) {
    return (
        <div className="w-full py-16 px-4">
            <style jsx>{`
        .luma-embed-container {
          position: relative;
          padding: 2px;
          background: linear-gradient(135deg, #6b7280 0%, #9ca3af 50%, #6b7280 100%);
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }
        
        .luma-embed-inner {
          background: var(--fallback-b1, oklch(var(--b1)));
          border-radius: 10px;
          overflow: hidden;
        }
        
        .luma-iframe {
          border: none;
          border-radius: 10px;
        }
        
        /* Modern scrollbar styling for the iframe content */
        .luma-iframe::-webkit-scrollbar {
          width: 8px;
        }
        
        .luma-iframe::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.05);
          border-radius: 4px;
        }
        
        .luma-iframe::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #9ca3af, #6b7280);
          border-radius: 4px;
          transition: background 0.3s ease;
        }
        
        .luma-iframe::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #6b7280, #4b5563);
        }
      `}</style>

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
                    <div className="luma-embed-container w-full max-w-[600px]">
                        <div className="luma-embed-inner">
                            <iframe
                                src={`https://luma.com/embed/event/${eventId}/simple`}
                                width="600"
                                height="450"
                                frameBorder="0"
                                allow="fullscreen; payment"
                                aria-hidden="false"
                                tabIndex={0}
                                className="luma-iframe w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
