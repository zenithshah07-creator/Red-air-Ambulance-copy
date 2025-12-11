import { useState } from "react";
import {
    ArrowRight,
    Phone,
    Gauge,
    ShieldCheck,
    HeartHandshake,
    UserCheck,
    Stethoscope,
    Globe,
    Plane,
    ClipboardCheck,
    Cpu,
    Siren,
    Award,
} from "lucide-react";
import { Link } from "react-router-dom";
import StatsSection from "../components/home/StatsSection";
import ProcessSection from "../components/home/ProcessSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import TailoredCareSection from "../components/home/TailoredCareSection";
import FeaturedInSection from "../components/home/FeaturedInSection";
import EnquiryFormSection from "../components/home/EnquiryFormSection";
import banner1 from "../assets/Home-Page_Banner_1.webp";
import banner2 from "../assets/Home-Page_Banner_2.webp";
import banner3 from "../assets/Home-Page_Banner_3.webp";
import banner4 from "../assets/Home-Page_Banner_4.webp";
import banner5 from "../assets/Home-Page_Banner_5.webp";
import image1 from "../assets/WHO-WE-ARE-1.png";
import partner1 from "../assets/partners img/Basavatarakam-Indo-A-01.png";
import partner2 from "../assets/partners img/Choithram-Hospital-Research-Centre-01.png";
import partner3 from "../assets/partners img/Malla-Reddy-Narayana-01.png";
import partner4 from "../assets/partners img/Rela-Hospitals-01.png";
import partner5 from "../assets/partners img/KIMS.png";
import partner6 from "../assets/partners img/Kamineni-Hospital-LB-Nagar.png";
import partner7 from "../assets/partners img/UTKAL-Hospital-01.png";
import partner8 from "../assets/partners img/uploaded_partner.png";
import partner9 from "../assets/partners img/uploaded_partner_2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import service1 from "../assets/servies/service1.png";
import service2 from "../assets/servies/service2.png";
import service3 from "../assets/servies/service3.png";
import service4 from "../assets/servies/service4.png";
import service5 from "../assets/servies/service5.png";
import service6 from "../assets/servies/service6.png";
import service7 from "../assets/servies/service7.png";

function Home() {
    const [activeTab, setActiveTab] = useState("Expertise");

    const trustContent = {
        Expertise: [
            {
                icon: <Stethoscope className="w-12 h-12 text-primary mb-4" />,
                title: "Expert Medical Team",
                description:
                    "Our highly skilled medical team includes Doctors with specialized training and Fellowships in Aviation Medicine. Their deep understanding of in-flight medical care ensures that patients receive the best possible treatment, even at 30,000 feet. With experience in managing critical cases, they offer expert care from takeoff to landing.",
            },
            {
                icon: <Globe className="w-12 h-12 text-red-600 mb-4" />,
                title: "International Standards & Protocols",
                description:
                    "We adhere strictly to international medical standards, following globally recognized protocols for air medical transport. Our commitment to these practices ensures the highest level of safety and care, making sure every step of the journey is handled with precision.",
            },
            {
                icon: <Plane className="w-12 h-12 text-red-600 mb-4" />,
                title: "FAA-Approved Medical Equipment",
                description:
                    "Our aircraft are equipped with FAA-approved, airworthy medical equipment designed for the unique challenges of in-flight medical care. From advanced life support systems to monitoring devices, we ensure that patients receive continuous, high-quality medical attention during transport.",
            },
            {
                icon: <ClipboardCheck className="w-12 h-12 text-red-600 mb-4" />,
                title: "Clinical Audits & Governance",
                description:
                    "We maintain rigorous clinical audits and governance across all medical operations to ensure consistency and quality in patient care. This systematic approach, combined with a trusted and qualified medical team spread across India, guarantees that our services meet the highest standards of healthcare delivery.",
            },
        ],
        "Core Values": [
            {
                icon: <Gauge className="w-12 h-12 text-red-600 mb-4" />,
                title: "SPEED",
                description:
                    "Every second counts in a medical emergency. With our quick and efficient response system, we prioritize human life above all else, ensuring prompt and accurate medical guidance is delivered",
            },
            {
                icon: <ShieldCheck className="w-12 h-12 text-red-600 mb-4" />,
                title: "RELIABILITY",
                description:
                    "Using advanced technology, we provide reliable and trustworthy medical assistance. Our dedicated helpline number and centralized management system guarantee proper medical aid",
            },
            {
                icon: <HeartHandshake className="w-12 h-12 text-red-600 mb-4" />,
                title: "EMPATHY",
                description:
                    "At the heart of our emergency response system lies empathy. Our compassionate team is trained to provide personalized care, ensuring patients feel supported and understood during their medical emergencies",
            },
            {
                icon: <UserCheck className="w-12 h-12 text-red-600 mb-4" />,
                title: "PATIENT FIRST",
                description:
                    "Our unwavering commitment to putting patients first drives every decision we make. From rapid response to personalized care, we ensure the well-being of each individual is at the forefront of everything we do, offering medical solutions that prioritize the best outcomes for our patients",
            },
        ],
        "Hospital Partnerships": [
            {
                icon: <Cpu className="w-12 h-12 text-primary mb-4" />,
                title: "Advanced Technology",
                description:
                    "We utilize cutting-edge technology to streamline coordination between hospitals, air ambulance services, and medical ground teams. Our real-time tracking and communication systems enable seamless collaboration, allowing medical teams to prepare ahead of time, reducing critical wait periods and ensuring the patient's timely transfer. This integration helps optimize the entire emergency response process, from dispatch to hospital admission.",
            },
            {
                icon: <Siren className="w-12 h-12 text-red-600 mb-4" />,
                title: "Triaging & Priority Admissions",
                description:
                    "We ensure that critical cases are prioritized through our expert triaging system, allowing for rapid decision-making in emergencies. Our strong partnerships with leading hospitals facilitate on-priority admissions, helping patients bypass lengthy administrative procedures. By working closely with hospitals, we guarantee that patients receive timely, life-saving treatment as soon as they arrive, with minimal delays.",
            },
            {
                icon: <Award className="w-12 h-12 text-red-600 mb-4" />,
                title: "JCI-Accredited Ambulances",
                description:
                    "Our fleet of Joint Commission International (JCI)-accredited ambulances adheres to the highest global healthcare standards, equipped with advanced medical technology and staffed by highly trained professionals. Whether it's ground transport or air ambulance, we ensure that patients are in a safe and secure environment, receiving exceptional medical care throughout the journey.",
            },
        ],
    };

    const heroBanners = [banner1, banner2, banner3, banner4, banner5];

    return (
        <>
            <div className="flex flex-col">
                {/* Hero Section */}
                {/* Hero Section */}
                <div className="relative w-full min-h-[100vh] md:min-h-[75vh] md:h-[75vh]">
                    {/* Background Slider */}
                    <div className="absolute inset-0 z-0">
                        <Swiper
                            modules={[Autoplay, EffectFade]}
                            effect="fade"
                            spaceBetween={0}
                            slidesPerView={1}
                            loop={true}
                            autoplay={{ delay: 4000, disableOnInteraction: false }}
                            className="h-full w-full"
                        >
                            {heroBanners.map((banner, index) => (
                                <SwiperSlide key={index}>
                                    <img
                                        src={banner}
                                        alt={`Banner ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* Foggy overlay - Left to Right Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10"></div>

                    {/* Content */}
                    <div className="relative md:absolute inset-0 z-20 flex flex-col md:flex-row items-center justify-center text-left px-4 container mx-auto py-20 md:py-0">
                        {/* Left: Text */}
                        <div className="flex-1 mb-8 md:mb-0 md:mr-12 pl-4 md:pl-8">
                            <h1 className="text-primary text-3xl md:text-5xl font-bold font-sans mb-6 leading-tight drop-shadow-sm">
                                Advanced Life Support <br /> For Critical Conditions:
                                <br />
                                <span className="text-primary-dark">ECMO & Ventilator Cases</span>
                            </h1>
                            <p className="text-gray-800 text-lg md:text-xl max-w-2xl mb-8 font-medium leading-relaxed">
                                We specialize in handling high-risk medical cases requiring
                                advanced life support, including ventilator and ECMO transfers.
                                Our expert team ensures critical care patients receive constant
                                medical attention during transport.
                            </p>
                            <a
                                href="tel:18001207004"
                                className="bg-white border-2 border-gray-800 text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-md font-bold text-lg transition-all shadow-md inline-flex items-center"
                            >
                                Contact Us
                            </a>
                        </div>
                        {/* Right: Form */}
                        <div className="flex-1 flex justify-end pr-4 md:pr-8">
                            <div className="bg-primary rounded-3xl shadow-2xl p-8 max-w-md w-full relative overflow-hidden">
                                <div className="relative z-10">
                                    <h2 className="text-xl font-bold mb-6 text-white text-center leading-snug">
                                        Upon filling the details, you will receive a call within 5 seconds
                                    </h2>
                                    <form
                                        className="space-y-4"
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            alert("Thank you! You will receive a call within 5 seconds.");
                                        }}
                                    >
                                        <div>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                className="w-full px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-primary-dark text-gray-900 placeholder-gray-500"
                                                placeholder="Full Name"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="tel"
                                                id="contact"
                                                name="contact"
                                                required
                                                className="w-full px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-primary-dark text-gray-900 placeholder-gray-500"
                                                placeholder="Phone No"
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full bg-gray-900 hover:bg-black text-white font-bold py-3 rounded-full transition-all flex items-center justify-center mt-4 shadow-lg uppercase tracking-wide text-sm"
                                        >
                                            REQUEST A CALLBACK
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Next Hero Section */}
                <div className="w-full bg-white py-16">
                    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                        {/* Left: Image */}
                        <div className="flex-1 flex justify-center mb-8 md:mb-0 md:mr-12">
                            <img
                                src={image1}
                                alt="Who We Are"
                                className="w-full max-w-md rounded-2xl shadow-xl object-cover"
                            />
                        </div>
                        {/* Right: Text */}
                        <div className="flex-1 border border-gray-300 rounded-xl p-6 bg-blue-100 shadow-lg">
                            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                                Who We Are
                            </h1>
                            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                                At Fly Medical Ambulance, we are a patient-first organization
                                committed to delivering swift, reliable, and advanced medical
                                solutions when every second counts. As leaders in the
                                industry, we provide state-of-the-art air ambulance services
                                globally, ensuring timely medical intervention in critical
                                situations.
                                <br />
                                <br />
                                Backed by a team of medical professionals with over two
                                decades of expertise in emergency care, including ECMO and
                                aeromedical rapid response, we bring unmatched precision and
                                compassion to each mission. Our unwavering commitment to
                                patient safety and care makes us the trusted choice for air
                                ambulance services, setting new benchmarks in emergency
                                healthcare.
                            </p>
                        </div>
                    </div>
                </div>

                {/* services */}
                <StatsSection />
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                                Our Services
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                                We provide fast, secure air transport, ensuring clinically
                                assessed, safe transfers for diverse medical conditions when
                                time is critical
                            </p>
                        </div>

                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                                1280: {
                                    slidesPerView: 4,
                                },
                            }}
                            className="pb-12"
                        >
                            {[
                                {
                                    image: service1,
                                    title: "ICU Air Ambulance",
                                    description:
                                        "Fully equipped ICU jets for long-distance critical care transport across borders.",
                                },
                                {
                                    image: service2,
                                    title: "Planned Air Transfers",
                                    description:
                                        "Our meticulously coordinated bed-to-bed transfers ensure patient safety and comfort. From assessment to equipment logistics, we handle every detail for a seamless journey.",
                                },
                                {
                                    image: service3,
                                    title: "ECMO Transfers",
                                    description:
                                        "Our meticulously coordinated bed-to-bed transfers ensure patient safety and comfort. From assessment to equipment logistics, we handle every detail for a seamless journey.",
                                },
                                {
                                    image: service4,
                                    title: "Neonatal & Pediatric",
                                    description:
                                        "Specialized air ambulance services for ECMO patients guarantee vital support during transport. Our trained teams use advanced technology to maintain stability throughout the journey.",
                                },
                                {
                                    image: service5,
                                    title: "Organ Transfers",
                                    description:
                                        " We prioritize speed in organ transfers, coordinating closely with hospitals to ensure safe and timely transport. Our protocols maintain organ viability for life-saving procedures.",

                                },
                                {
                                    image: service6,
                                    title: "Commercial Stretcher",
                                    description:
                                        "A cost-efficient option for non-emergency transport with medical oversight on commercial flights, ensuring patient comfort and safety throughout.",
                                },
                                {
                                    image: service7,
                                    title: "Disaster Management ",
                                    description: "We deliver fast, coordinated medical evacuations during disasters, ensuring timely care, safe transport, and expert medical supervision in critical situations.",
                                },
                            ].map((service, index) => (
                                <SwiperSlide key={index}>
                                    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col">
                                        <div className="h-48 overflow-hidden">
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                            />
                                        </div>
                                        <div className="p-6 flex-1 flex flex-col">
                                            <h3 className="text-xl font-bold mb-3 text-gray-900">
                                                {service.title}
                                            </h3>
                                            <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-1">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </section>
                {/* Our Partnered Hospitals */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                            Our Partnered Hospitals
                        </h2>
                        <p className="text-gray-600 max-w-4xl mx-auto text-lg mb-12">
                            We coordinate with hospitals for priority admissions, expert
                            triaging, and seamless on-ground medical support, ensuring a
                            secure air ambulance service
                        </p>

                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={30}
                            slidesPerView={2}
                            loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 3,
                                },
                                768: {
                                    slidesPerView: 4,
                                },
                                1024: {
                                    slidesPerView: 5,
                                },
                            }}
                            className="partner-swiper"
                        >
                            {[
                                { src: partner1, alt: "Basavatarakam Indo American Cancer Hospital" },
                                { src: partner2, alt: "Choithram Hospital" },
                                { src: partner3, alt: "Malla Reddy Narayana Hospital" },
                                { src: partner4, alt: "Rela Hospital" },
                                { src: partner5, alt: "KIMS Hospitals" },
                                { src: partner6, alt: "Kamineni Hospitals" },
                                { src: partner7, alt: "Utkal Hospital" },
                                { src: partner8, alt: "Partner Hospital" },
                                { src: partner9, alt: "Partner Hospital 2" },
                            ].map((partner, index) => (
                                <SwiperSlide key={index}>
                                    <div
                                        className="bg-gray-100 rounded-lg p-4 flex items-center justify-center h-24  duration-300"
                                    >
                                        <img
                                            src={partner.src}
                                            alt={partner.alt}
                                            className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </section>


                {/* Why Trust Red Air Ambulance Section */}
                <section className="py-20 bg-gray-100">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary">
                            Why Trust Fly Medical Ambulance?
                        </h2>

                        <div className="flex flex-col lg:flex-row gap-8">
                            {/* Sidebar Tabs */}
                            <div className="lg:w-1/4 flex flex-col gap-4">
                                {Object.keys(trustContent).map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`text-left px-6 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-between ${activeTab === tab
                                            ? "bg-primary text-white shadow-lg"
                                            : "bg-white text-gray-700 hover:bg-gray-50 shadow-sm"
                                            }`}
                                    >
                                        {tab}
                                        {activeTab === tab && <ArrowRight className="w-5 h-5" />}
                                    </button>
                                ))}
                            </div>

                            {/* Content Grid */}
                            <div className="lg:w-3/4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {trustContent[activeTab].map((item, index) => (
                                        <div
                                            key={index}
                                            className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300"
                                        >
                                            {item.icon}
                                            <h3 className="text-xl font-bold mb-3 text-gray-900">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed text-sm">
                                                {item.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Tailored Care Section */}
                <TailoredCareSection />

                {/* Featured In Section */}
                <FeaturedInSection />

                <ProcessSection />

                {/* Testimonials */}
                <TestimonialsSection />

                {/* CTA Section */}
                <section className="py-16 bg-primary">
                    <div className="container mx-auto px-4 text-center text-white">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Need Immediate Assistance?
                        </h2>
                        <p className="text-xl mb-8 max-w-2xl mx-auto">
                            Our team is available 24/7 to answer your questions and arrange
                            urgent transport.
                        </p>
                        <a
                            href="tel:1800121911911"
                            className="bg-white text-primary hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-xl transition-colors shadow-lg inline-flex items-center"
                        >
                            <Phone className="mr-2 h-6 w-6" /> Call 1800-121-911-911
                        </a>
                    </div>
                </section>
                <EnquiryFormSection />
            </div>

        </>
    );
}

export default Home;
