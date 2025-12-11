import React from 'react';

const StatsSection = () => {
    const stats = [
        { value: "1500 +", label: "Patient Transfers since 2016" },
        { value: "750 +", label: "Hospital Admissions Secured" },
        { value: "250 +", label: "ECMO Initiation & Transfers" },
        { value: "70 %", label: "of all organ airlifts in India" },
        { value: "35 +", label: "International Patient Transfers" },
        { value: "20 +", label: "Neonatal Patient Transfers" }
    ];

    return (
        <section className="py-16 bg-blue-100">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center group">
                            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                                {stat.value}
                            </h3>
                            <p className="text-gray-600 text-sm md:text-base font-medium leading-tight">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
