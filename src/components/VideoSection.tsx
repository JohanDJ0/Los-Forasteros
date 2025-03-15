import React from "react";

interface VideoSectionProps {
  videos: string[];
}

const VideoSection: React.FC<VideoSectionProps> = ({ videos }) => {
  return (
    <section id="videos" className="py-20 px-4 bg-gradient-to-b from-[#1a1a1a] to-black">
      <div className="container mx-auto">
        <h2 className="text-4xl font-serif font-bold text-[#FFD700] mb-12 text-center">Videos</h2>
        
        <div
          className={`grid gap-8 ${
            videos.length === 1
              ? "grid-cols-1 place-items-center"
              : videos.length === 2
              ? "grid-cols-1 md:grid-cols-2"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {videos.map((videoUrl, index) => (
            <div
              key={index}
              className={`relative bg-[#1a1a1a] rounded-lg overflow-hidden ${
                videos.length === 1 ? "w-full max-w-3xl aspect-video" : "aspect-w-16 aspect-h-9"
              }`}
            >
              <iframe
                className="w-full h-full"
                src={videoUrl}
                title={`YouTube Video ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;