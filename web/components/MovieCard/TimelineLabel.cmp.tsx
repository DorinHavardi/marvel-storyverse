import React from 'react';

interface TimelineLabelProps {
  timelineDate: string;
}

const TimelineLabel = ({ timelineDate }: TimelineLabelProps) => {
  return (
    <div className="relative flex items-center justify-center mb-4">
      {/* Glowing black spot exactly under the text */}
      <div className="absolute rounded-full w-20 px-4 py-4 bg-black/80 blur-md" />

      {/* Text above */}
      <p className="relative z-10 text-2xl font-bold text-gray-200">
        {timelineDate}
      </p>
    </div>
  );
};

export default TimelineLabel;
