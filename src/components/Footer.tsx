import Link from 'next/link';
import React from 'react';

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="flex">
      <Link
        className="bg-[#FAA629] m-auto my-4 px-4 py-2 text-white font-bold font-sans text-xl"
        href="/about">
        sobre nosotros
      </Link>
    </div>
  );
};

export default Footer;
