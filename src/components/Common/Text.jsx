import React from "react";

const Text = ({
  level,
  children,
  className = '',
  textCenter,
  variant,
}) => {
  const HeadingTag = level;
  let additionalClasses = '';

  // Variant styles use if
//   if (variant === 'ERROR') additionalClasses += 'text-danger';
//   else if (variant === 'MESSAGE') additionalClasses += 'text-success';

  return (
    <HeadingTag
      className={
        className + ` ${additionalClasses} ${textCenter ? 'text-center' : ''}`
      }
    >
      {children}
    </HeadingTag>
  );
};

export default Text;
