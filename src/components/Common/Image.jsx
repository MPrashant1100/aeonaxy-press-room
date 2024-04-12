import React from "react";

const ImageContainer = (
  src,
  alt = '',
  className,
  loading = 'lazy',
  fullWidth = true,
  fullHeight = true,
) => {
  return (
    <div
      className={`${className} ${fullWidth && 'w-full'} ${
        fullHeight && 'h-full'
      }`}
    >
      <image
        src={src}
        alt={alt}
        fill={true}
        loading={loading}
        className={`${className} image`}
      />
    </div>
  );
};

export default ImageContainer;
