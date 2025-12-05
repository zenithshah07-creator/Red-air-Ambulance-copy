import React from 'react';
import image from '../../assets/34section image/Our-Services.png';

const EnquiryFormSection = () => {
    return (
        <section className="py-16 bg-white flex justify-center">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="bg-gray-100 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center shadow-sm">
                    {/* Left Form Section */}
                    <div className="flex-1 w-full">
                        <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-8">
                            Want to know more about our services?
                        </h2>

                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Enter Your Name"
                                    className="w-full px-4 py-3 rounded-md bg-white border-none focus:ring-2 focus:ring-red-500 outline-none"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Enter Your Email"
                                        className="w-full px-4 py-3 rounded-md bg-white border-none focus:ring-2 focus:ring-red-500 outline-none"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone No</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        placeholder="Enter Your Phone No"
                                        className="w-full px-4 py-3 rounded-md bg-white border-none focus:ring-2 focus:ring-red-500 outline-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    placeholder="Message"
                                    className="w-full px-4 py-3 rounded-md bg-white border-none focus:ring-2 focus:ring-red-500 outline-none resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded transition-colors"
                            >
                                Submit
                            </button>
                        </form>
                    </div>

                    {/* Right Image Section */}
                    <div className="flex-shrink-0">
                        <div className="relative w-64 h-80 rounded-2xl overflow-hidden shadow-lg">
                            <img
                                src={image}
                                alt="Customer Support"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EnquiryFormSection;
