import React from 'react';
import Image from 'next/image';
import { banner, bannerContainer } from './Banner.css';
import Link from 'next/link';

const Banner = () => {
  return (
    <Link href={'/universe'} className={bannerContainer}>
      <Image className={banner} width={1200} height={640} alt={'또또와 친구들 배너'} src={'/images/banner.png'} />
    </Link>
  );
};

export default Banner;
