import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DecayCard from '../animation/DecayCard';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const services = [
    {
      title: "Importing Consultancy",
      desc: "Experience the future of packaging with BoxBlueprint. Our cutting-edge solutions redefine your logistics strategy, providing innovative designs and sustainable materials tailored for any shipping need.",
      price: "$24",
      image: "/prod1.jpg",
    },
    {
      title: "Wholesaling",
      desc: "Brutally Revolutionizing the logistics industry with cutting-edge eco-friendly wholesaling solutions that enhance efficiency and sustainability. Join us in reshaping the future of shipping. Bulk distribution network spanning 150+ countries",
      price: "$19",
      image: "/prod2.jpg",
    },
    {
      title: "Air Transport",
      desc: "Request a quote for the best prices in the market for any shipment by air. We offer a wide range of air freight services, including express delivery, charter services, and specialized handling for sensitive cargo.",
      price: "$14",
      image: "/prod3.jpg",
    },
  ];

  const sectionRefs = useRef([]);

  useEffect(() => {
    sectionRefs.current.forEach((ref, index) => {
      gsap.fromTo(
        ref,
        { opacity: 0, y: 80, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <div className='relative bg-black text-white min-h-screen overflow-hidden py-12  '>
      {/* Diagonal Slash Decoration */}
      <div className='absolute top-12 right-0 w-full h-48 bg-orange-600 transform -skew-y-4 origin-top-right' />

      {/* Hero Section */}
      <div className='relative pt-32 px-4 text-center'>
        <div className='flex gap-6 justify-center items-center'>
          <h1 className='text-white boldo font-bold text-4xl md:text-7xl'>
            OUR
          </h1>
          <h1 className='text-white boldo font-bold text-4xl md:text-7xl'>
            SERVICES
          </h1>
        </div>
      </div>

<div></div>
      {/* Services Grid */}
      {services.map((service, index) => (

        <div
          key={index}
          className='flex flex-col items-center max-w-7xl mx-auto justify-center gap-10 mt-40 px-4'
          ref={(el) => (sectionRefs.current[index] = el)}
        >

          <div className='flex flex-col md:flex-row items-center justify-between gap-10 w-full'>

            <DecayCard width={400} height={400} image={service.image} />

            <div className="desc flex flex-col max-w-4xl gap-4 text-center md:text-left">
              <h1 className='text-xl sm:text-5xl font-semibold text-gray-300 tracking-wide'>{service.title}</h1>
              <p className='text-md sm:text-2xl text-gray-400 leading-relaxed'>{service.desc}</p>
              <p className='text-xl font-bold text-orange-600'>{service.price}</p>
            </div>
          </div>


          <hr className='w-full max-w-7xl border-t-1 border-gray-700 my-3' />

          {/* Horizontal Line (HR) - Placed after each service block */}


        </div>
      ))}
    
    </div>
  );
};

export default Services;