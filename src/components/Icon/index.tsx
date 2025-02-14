import Image, { ImageProps } from 'next/image';
import * as style from './Icon.css';
import React from 'react';
type IconTypes = typeof style.IconVariants;
type IconProps = {
  size?: keyof IconTypes['size'];
  active?: keyof IconTypes['active'];
};

const Icon = React.memo(({ size = 'medium', active = 'false', ...props }: ImageProps & IconProps) => {
  const className = `${style.Icon} ${style.IconSize[size]} ${style.IconActive[active]}`;

  return <Image className={className} {...props} priority />;
});

export default Icon;
