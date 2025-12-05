import React, { useState } from 'react';
import { Plane, Shield, Clock, ChevronDown, ChevronUp, CheckCircle, Activity, Heart, Baby } from 'lucide-react';

const Services = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const services = [
        {
            id: 'icu-air-ambulance',
            title: 'ICU Air Ambulance',
            icon: <Plane className="h-12 w-12 text-primary" />,
            description: 'Our fleet of dedicated air ambulances is equipped to ICU standards, allowing us to transport critical care patients safely across the globe.',
            features: [
                'Full ICU setup with ventilators and monitors',
                'Specialized medical teams (Doctors, Nurses, Paramedics)',
                'Bed-to-bed service including ground ambulance',
                'Coordination with sending and receiving hospitals'
            ]
        },
        {
            id: 'planned-transfers',
            title: 'Planned Air Transfers',
            icon: <Clock className="h-12 w-12 text-primary" />,
            description: 'Meticulously coordinated bed-to-bed transfers ensuring patient safety and comfort. From assessment to equipment logistics, we handle every detail.',
            features: [
                'Scheduled non-emergency transfers',
                'Comprehensive logistics management',
                'Patient comfort prioritization',
                'Seamless hospital-to-hospital handover'
            ]
        },
        {
            id: 'ecmo-transfers',
            title: 'ECMO Transfers',
            icon: <Activity className="h-12 w-12 text-primary" />,
            description: 'Specialized air ambulance services for ECMO patients guarantee vital support during transport using advanced technology.',
            features: [
                'Specialized ECMO equipment',
                'Highly trained perfusionists and specialists',
                'Continuous monitoring and stabilization',
                'High-risk transport capability'
            ]
        },
        {
            id: 'neonatal-pediatric',
            title: 'Neonatal and Pediatric Transfers',
            icon: <Baby className="h-12 w-12 text-primary" />,
            description: 'Tailored transport for neonatal and pediatric patients with specialized ambulances and expert teams ensuring unique medical needs are met.',
            features: [
                'Neonatal incubators and ventilators',
                'Pediatric intensive care specialists',
                'Family-centered care approach',
                'Specialized pediatric medication and equipment'
            ]
        },
        {
            id: 'organ-transfers',
            title: 'Organ Transfers',
            icon: <Heart className="h-12 w-12 text-primary" />,
            description: 'We prioritize speed in organ transfers, coordinating closely with hospitals to ensure safe and timely transport maintaining organ viability.',
            features: [
                'Rapid response protocols',
                'Green corridor coordination',
                'Organ preservation equipment',
                'Direct tarmac access'
            ]
        },
        {
            id: 'commercial-stretcher',
            title: 'Commercial Stretcher Transfer',
            icon: <Shield className="h-12 w-12 text-primary" />,
            description: 'A cost-efficient option for non-emergency transport with medical oversight on commercial flights, ensuring patient comfort and safety.',
            features: [
                'Airline clearance and coordination',
                'Medical escort accompaniment',
                'Stretcher installation on commercial flights',
                'Cost-effective alternative'
            ]
        }
    ];

    const faqs = [
        {
            question: "How quickly can you organize a transport?",
            answer: "We can typically have an aircraft airborne within 2-4 hours of confirmation, depending on permits and logistics."
        },
        {
            question: "Does insurance cover air ambulance services?",
            answer: "Many travel and health insurance policies cover air ambulance. Our team can assist with insurance verification and claims."
        },
        {
            question: "Can a family member accompany the patient?",
            answer: "Yes, usually one or two family members can accompany the patient on our private jets at no extra cost, subject to medical requirements."
        },
        {
            question: "What medical equipment is on board?",
            answer: "Our aircraft are equipped with state-of-the-art ICU equipment including ventilators, cardiac monitors, infusion pumps, and emergency medications."
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Page Header */}
            <div className="bg-secondary-dark text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">Comprehensive medical transport solutions tailored to your specific needs.</p>
                </div>
            </div>

            {/* Services List */}
            <div className="container mx-auto px-4 py-16">
                <div className="space-y-16">
                    {services.map((service, index) => (
                        <div key={service.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                            <div className="lg:w-1/2">
                                <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-primary">
                                    <div className="mb-6 bg-red-50 w-20 h-20 rounded-full flex items-center justify-center">
                                        {service.icon}
                                    </div>
                                    <h2 className="text-3xl font-bold mb-4 text-secondary-dark">{service.title}</h2>
                                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">{service.description}</p>
                                    <ul className="space-y-3">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                                                <span className="text-gray-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="lg:w-1/2">
                                {/* Placeholder for service images */}
                                <div className="bg-gray-200 rounded-2xl h-80 w-full flex items-center justify-center text-gray-400 font-bold text-xl shadow-inner">
                                    Image: {service.title}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white py-20">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl font-bold text-center mb-12 text-secondary-dark">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                                <button
                                    className="w-full flex justify-between items-center p-6 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                                    onClick={() => toggleFaq(index)}
                                >
                                    <span className="font-bold text-lg text-secondary-dark">{faq.question}</span>
                                    {openFaq === index ? <ChevronUp className="h-5 w-5 text-primary" /> : <ChevronDown className="h-5 w-5 text-gray-400" />}
                                </button>
                                {openFaq === index && (
                                    <div className="p-6 bg-white border-t border-gray-100">
                                        <p className="text-gray-600">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
