import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
    const reviews = [
        {
            name: "Randeep Wadehra",
            date: "2024-10-14",
            text: "The staff is polite, prompt and thoroughly professional. During my air ambulance journey from Panchkula (Haryana) to Bengaluru (Karnataka) I was looked after with great care. Dr. Misbah and his team comprising Uttam and Zubair were unceasingly attentive during the air journey. God bless you all!"
        },
        {
            name: "Tushar Roy",
            date: "2024-10-03",
            text: "My mother was in critical condition and we needed to shift her from Purnea, Bihar to Bangalore, Karnataka. It seemed impossible but Fly Medical Ambulance team provided us with impeccable support and service because of which we were able to shift her in less than 7 hours. Thank you Fly Medical. Forever Grateful."
        },
        {
            name: "Sudip Hazra",
            date: "2024-09-07",
            text: "Fly Medical Ambulance exceeded all expectations with their fast, professional, and compassionate service. The response time was incredible, and the medical team provided expert care throughout the flight. Their attention to detail and clear communication made a stressful situation much more manageable."
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Trust Fly Medical Ambulance?</h2>
                    <div className="flex justify-center items-center space-x-2 mb-4">
                        <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="h-5 w-5" />)}
                        </div>
                        <span className="font-bold text-gray-700">100+ Google Reviews</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                            <div className="flex text-yellow-400 mb-4">
                                {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="h-4 w-4" />)}
                            </div>
                            <p className="text-gray-600 mb-6 italic line-clamp-6">"{review.text}"</p>
                            <div className="mt-auto">
                                <h4 className="font-bold text-primary">{review.name}</h4>
                                <span className="text-xs text-gray-400">{review.date}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="#" className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-8 rounded-full transition-colors">
                        Read All Reviews
                    </a>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
