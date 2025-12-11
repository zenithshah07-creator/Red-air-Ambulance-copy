import React from 'react';
import { PhoneCall, ClipboardCheck, Activity, PlaneTakeoff, Handshake } from 'lucide-react';

const ProcessSection = () => {
    const steps = [
        {
            icon: <PhoneCall className="h-8 w-8 text-white" />,
            title: "Expert Consultation from the First Call",
            description: "From the moment you call, we assess the patient’s medical condition, gathering a detailed summary and connecting you with our team of expert doctors for immediate decision-making."
        },
        {
            icon: <ClipboardCheck className="h-8 w-8 text-white" />,
            title: "Personalized Pre-Transfer Planning",
            description: "We handle all aspects of preparation, from assembling the specialized medical team to securing FAA-approved equipment and supplies."
        },
        {
            icon: <Activity className="h-8 w-8 text-white" />,
            title: "Patient Assessment & Stabilization",
            description: "Before the transfer begins, our dedicated medical team evaluates the patient’s condition on-site, stabilizing them to ensure they are fit for air transport."
        },
        {
            icon: <PlaneTakeoff className="h-8 w-8 text-white" />,
            title: "Seamless Air Transfer Coordination",
            description: "We manage documentation, coordinate with airport authorities, and provide direct access to the aircraft. Throughout the journey, the patient is closely monitored."
        },
        {
            icon: <Handshake className="h-8 w-8 text-white" />,
            title: "Seamless Communication & Handover",
            description: "We maintain a three-way communication channel between the treating hospital, patient’s family, and receiving hospital, ensuring a stress-free experience."
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">How We Work</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">A streamlined process to ensure rapid and safe medical transport.</p>
                </div>

                <div className="relative">
                    {/* Vertical Line for Desktop */}
                    <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>

                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <div key={index} className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                                <div className="lg:w-1/2 flex justify-center lg:justify-end px-8">
                                    <div className={`lg:w-full lg:max-w-md ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-left`}>
                                        <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                                    </div>
                                </div>

                                <div className="relative z-10 my-4 lg:my-0">
                                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                                        {step.icon}
                                    </div>
                                </div>

                                <div className="lg:w-1/2 px-8 hidden lg:block"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
