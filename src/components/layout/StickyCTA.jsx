import React from 'react';
import { Phone } from 'lucide-react';

const StickyCTA = () => {
    return (
        <div className="fixed bottom-0 w-full bg-primary z-40 md:hidden shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
            <a href="tel:1800121911911" className="flex justify-center items-center py-4 text-white font-bold text-lg">
                <Phone className="h-5 w-5 mr-2 animate-bounce" />
                EMERGENCY: 1800-121-911-911
            </a>
        </div>
    );
};

export default StickyCTA;
