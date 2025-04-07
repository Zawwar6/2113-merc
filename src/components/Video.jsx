import React from 'react';

const Video = () => {
  return (
    <div className="w-full bg-[#f44708] py-8 md:py-12 lg:py-16 relative overflow-x-hidden">
      {/* Animated Slider */}
      <div className="absolute top-4 md:top-8 left-0 w-full overflow-hidden">
        <div className="animate-slide-in-out  w-max flex items-center">
          <h1 className="text-[2rem] md:text-7xl lg:text-8xl boldo font-extrabold text-black uppercase 
                         px-4 md:px-8 py-2 md:py-4" >
             
            EMBARK TODAY
            EMBARK TODAY
            EMBARK TODAY
            EMBARK TODAY
            EMBARK TODAY
            EMBARK TODAY
            EMBARK TODAY
            EMBARK TODAY
            EMBARK TODAY
            EMBARK TODAY
            EMBARK TODAY
            EMBARK TODAY
            EMBARK TODAY
            EMBARK TODAY
            EMBARK TODAY
            EMBARK TODAY
            EMBARK TODAY
            EMBARK TODAY
            EMBARK TODAY
            EMBARK TODAY
            EMBARK TODAY
            EMBARK TODAY
            EMBARK TODAY
            EMBARK TODAY
          </h1>
        </div>
      </div>

      {/* Video Container */}
      <div className="mx-auto  w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] xl:w-[70%] 2xl:w-[60%] mt-20 md:mt-40">
        <div className="relative overflow-hidden rounded-lg md:rounded-xl lg:rounded-2xl shadow-lg md:shadow-xl lg:shadow-2xl aspect-video">
          <video 
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes slide-in-out {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-slide-in-out {
          animation: slide-in-out 250s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Video;