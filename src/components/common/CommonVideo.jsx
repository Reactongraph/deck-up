"use client";

import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";

export default function VideoPlayer({ url = "" }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative w-full h-full  mx-auto overflow-hidden">
      <video
        ref={videoRef}
        className="w-full h-full object-cover h-[568px]"
        src={url}
        loop
        onClick={togglePlay}
      />
      <div
        className={`absolute inset-0 flex items-center justify-center duration-300 ${
          isPlaying ? "opacity-0" : "opacity-100"
        }`}
        onClick={togglePlay}
      >
        <button
          className="p-4 text-white  rounded-full transition-colors duration-300"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <Pause className="w-12 h-12" />
          ) : (
            // <Play className="w-12 h-12" />
            <img
              src="/images/playsvg.svg"
              className="w-[92px] h-[92px]"
              alt="play"
            />
          )}
        </button>
      </div>
    </div>
  );
}
