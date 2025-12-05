import React from 'react';
import telanganaToday from '../../assets/34section image/tt-logo-1.png';
import dailyGuardian from '../../assets/34section image/thedailyguardian.png';
import financialExpress from '../../assets/34section image/The-Financial-Express.jpg';
import yourStory from '../../assets/34section image/Yourstory.png';

const FeaturedInSection = () => {
    const partners = [
        { src: telanganaToday, alt: "Telangana Today" },
        { src: dailyGuardian, alt: "The Daily Guardian" },
        { src: financialExpress, alt: "Financial Express" },
        { src: yourStory, alt: "YourStory" }
    ];

    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-2">
                    Featured In
                </h2>
                <p className="text-gray-600 mb-10">
                    Our Air Ambulance Service is recognized globally.
                </p>

                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                    {partners.map((partner, index) => (
                        <div key={index} className="bg-white px-6 py-4 rounded-lg shadow-sm min-w-[200px] flex items-center justify-center h-24 hover:shadow-md transition-shadow">
                            <img
                                src={partner.src}
                                alt={partner.alt}
                                className="max-h-full max-w-full object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedInSection;
