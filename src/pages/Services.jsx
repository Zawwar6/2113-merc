// Services.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Ocean Freight",
    description:
      "Our ocean freight services are designed for businesses that need reliable, large-volume international shipping. Whether it's Full Container Load (FCL) or Less than Container Load (LCL), we ensure smooth cargo movement across all major sea routes. With partnerships in over 100+ countries, we offer competitive rates, port-to-port and door-to-door delivery, secure container handling, and real-time tracking of your shipment. Our team ensures timely documentation, compliance with international regulations, and safe cargo handling from origin to destination.",
    image: "/oc.jpg",
  },
  {
    title: "Air Freight",
    description:
      "For urgent, high-value, or time-sensitive cargo, our air freight services provide the fastest global transportation solution. We collaborate with top international airlines to guarantee daily departures, prioritized handling, and seamless customs clearance. Our services include airport-to-airport, door-to-door, and consolidated shipping options. With advanced tracking tools, secure packaging, and professional staff, we minimize delays and maximize efficiency—ensuring your goods arrive safely and on schedule, every time.",
    image: "/ai.jpg",
  },
  {
    title: "Customs Clearance",
    description:
      "Navigating international customs regulations can be complex—but our experienced agents handle it all for you. We manage all documentation, tariff classifications, duties & taxes, and government compliance procedures. Whether you're importing machinery, electronics, perishables, or consumer goods, we ensure your shipments are cleared quickly and legally. Our team also provides consultancy on trade agreements, HS code classification, and updates on changing border policies to avoid unnecessary delays or penalties.",
    image: "/cc.jpg",
  },
  {
    title: "Warehousing",
    description:
      "Our advanced warehousing solutions offer safe, secure, and scalable storage options tailored to your business needs. We provide both short-term and long-term storage, real-time inventory tracking, cold storage for perishable items, and fulfillment services for e-commerce businesses. With 24/7 surveillance, professional staff, and automated systems, we guarantee the highest standard of goods handling. Our warehouse locations are strategically placed near major transport hubs to ensure faster dispatch and last-mile delivery.",
    image: "/wr.jpg",
  },
];

const Services = () => {
  const containerRef = useRef([]);

  useEffect(() => {
    containerRef.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <section className="px-4 pb-8 sm:my-14  bg-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl boldo text-center sm:text-4xl font-bold my-8 sm:my-12 leading-relaxed uppercase text-orange-600">
          Our Services
        </h1>
        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (containerRef.current[index] = el)}
              className={`flex flex-col-reverse lg:flex-row items-center gap-6 sm:gap-12 ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text */}
              <div className="lg:w-1/2">
                <h3 className="sm:text-3xl text-xl boldo font-semibold text-black mb-4">
                  {service.title}
                </h3>
                <p className="sm:text-lg  lg:text-xl text-gray-800 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Image */}
              <div className="lg:w-1/2 w-full">
                <img
                  src={service.image}
                  alt={service.title}
                  className="sm:rounded-2xl rounded-md w-full h-72 sm:h-[500px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
