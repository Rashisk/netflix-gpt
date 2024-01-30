import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="py-6 text-sm w-2/5">{overview}</p>
      <div className="flex gap-2">
        <button className="bg-white font-bold text-black p-4 px-12 rounded-lg text-xl hover:bg-opacity-80">
          Play
        </button>
        <button className="bg-gray-500 text-white p-4 px-12 rounded-lg text-xl bg-opacity-80 hover:bg-black">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
