import React from 'react';
import classNames from 'classnames';
import Link from "next/link";

const GradientLink = ({ href, text, size }) => {
  const classes = classNames({
    'rounded-full py-2 px-3 sm:py-3 sm:px-6 bg-gradient focus:outline-none shadow-lg text-white': true,
    ' text-md sm:text-xl': size === 'lg flex'
  });
  
  return (
    <Link href={href}>
      <a className={classes}>{text}</a>
    </Link>
  );
};

export default GradientLink;
