import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Fleet = () => {
    const aircrafts = [
        {
            name: "Bombardier Learjet 45",
            type: "Mid-Size Jet",
            description: "The Learjet 45 offers superior cruise speeds and range, making it ideal for international transfers. Its spacious cabin allows for full ICU capabilities and comfortable seating for medical staff and family.",
            specs: {
                range: "2,100 nm",
                speed: "535 mph",
                altitude: "51,000 ft",
                cabinHeight: "4.9 ft",
                cabinWidth: "5.1 ft"
            },
            capacity: {
                stretcher: 1,
                medicalTeam: "2-3",
                family: "1-2"
            }
        },
        {
            name: "King Air 200",
            type: "Turboprop",
            description: "A versatile and reliable turboprop aircraft perfect for regional flights and accessing airports with shorter runways. It provides a cost-effective solution without compromising on medical care quality.",
            specs: {
                range: "1,500 nm",
                speed: "310 mph",
                altitude: "35,000 ft",
                cabinHeight: "4.8 ft",
                cabinWidth: "4.5 ft"
            },
            capacity: {
                stretcher: 1,
                medicalTeam: "2",
                family: "1"
            }
        },
        {
            name: "Eurocopter EC135",
            type: "Helicopter",
            description: "Designed for rapid response and short-range transfers, often used for scene response or hospital-to-hospital transfers in congested areas.",
            specs: {
                range: "340 nm",
                speed: "155 mph",
                altitude: "20,000 ft",
                cabinHeight: "4.1 ft",
                cabinWidth: "4.9 ft"
            },
            capacity: {
                stretcher: 1,
                medicalTeam: "2",
                family: "0"
            }
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="bg-primary text-white py-20">
                <div className="container mx-auto px-4">
                    <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors">
                        <ArrowLeft className="h-4 w-4 mr-2" /> Back to Home
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Fleet</h1>
                    <p className="text-xl text-gray-300 max-w-2xl">
                        A diverse fleet of medically equipped aircraft to meet any transport requirement.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="space-y-20">
                    {aircrafts.map((aircraft, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div className="h-64 lg:h-auto bg-gray-300 flex items-center justify-center text-gray-500 font-bold text-2xl">
                                    {/* Placeholder for Aircraft Image */}
                                    Image: {aircraft.name}
                                </div>
                                <div className="p-8 lg:p-12">
                                    <div className="flex items-center justify-between mb-4">
                                        <h2 className="text-3xl font-bold text-primary">{aircraft.name}</h2>
                                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wide">{aircraft.type}</span>
                                    </div>
                                    <p className="text-gray-600 mb-8 leading-relaxed">
                                        {aircraft.description}
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <h3 className="text-lg font-bold text-primary mb-4 border-b border-gray-100 pb-2">Specifications</h3>
                                            <ul className="space-y-2 text-gray-600">
                                                <li className="flex justify-between"><span>Range:</span> <span className="font-semibold">{aircraft.specs.range}</span></li>
                                                <li className="flex justify-between"><span>Speed:</span> <span className="font-semibold">{aircraft.specs.speed}</span></li>
                                                <li className="flex justify-between"><span>Max Altitude:</span> <span className="font-semibold">{aircraft.specs.altitude}</span></li>
                                                <li className="flex justify-between"><span>Cabin Height:</span> <span className="font-semibold">{aircraft.specs.cabinHeight}</span></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-primary mb-4 border-b border-gray-100 pb-2">Medical Capacity</h3>
                                            <ul className="space-y-2 text-gray-600">
                                                <li className="flex justify-between"><span>Stretcher:</span> <span className="font-semibold">{aircraft.capacity.stretcher}</span></li>
                                                <li className="flex justify-between"><span>Medical Team:</span> <span className="font-semibold">{aircraft.capacity.medicalTeam}</span></li>
                                                <li className="flex justify-between"><span>Family Members:</span> <span className="font-semibold">{aircraft.capacity.family}</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Fleet;
