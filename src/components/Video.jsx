import React from 'react';

const Video = () => {
  return (
    <div className="w-full bg-white py-8 md:py-12 lg:py-16">
      {/* Responsive container with dynamic padding */}
      <div className="mx-auto w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] xl:w-[70%] 2xl:w-[60%]">
        {/* Video container with responsive aspect ratio */}
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
    </div>
  );
};

export default Video;