import React, { useState } from 'react';

export default function Image({ className, img }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={img.url} alt='unsplash img' className='image-grid' />
    </div>
  );
}
