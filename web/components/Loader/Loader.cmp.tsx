import './loader.css';
import React from 'react';

interface LoaderProps {
  color?: string;
}

const Loader = ({ color = '#FF3D00' }: LoaderProps) => {
  return (
    <div className="flex h-full items-center justify-center">
      <span
        className="loader"
        style={{
          ['--loader-color' as string]: color,
        }}
      />
    </div>
  );
};

export default Loader;
