import React from 'react';
import image from '../../assets/34section image/Tailored-Air-Ambulance-Care-for-Critical-Transfers.png';

const TailoredCareSection = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
                {/* Left Content */}
                <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6 leading-tight">
                        Tailored Air Ambulance Care for Critical Transfers
                    </h2>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                        At RED Air Ambulance, we offer personalized air ambulance solutions to meet a wide range of medical needs. From economical commercial stretcher options for critical and non-critical cases to private aircraft for specialized, swift transfers, we prioritize both comfort and expert care.
                    </p>
                    <p className="text-gray-700 mb-8 leading-relaxed">
                        With our dedicated medical escorts and seamless bed-to-bed transfers, we ensure comprehensive support at every stage—from your current location to the destination hospital.
                    </p>
                    <p className="text-gray-900 font-medium mb-8">
                        Call us at 9513686464 to get instant assistance.
                    </p>

                    <a
                        href="tel:9513686464"
                        className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded font-bold transition-colors inline-block"
                    >
                        Book an Air Ambulance
                    </a>
                </div>

                {/* Right Image */}
                <div className="flex-1 w-full">
                    <div className="rounded-3xl overflow-hidden shadow-xl">
                        <img
                            src={image}
                            alt="Tailored Air Ambulance Care"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TailoredCareSection;
