import Image, { ImageProps } from 'next/image';
import * as style from './Icon.css';
import React from 'react';
type IconTypes = typeof style.iconVariants;
type IconProps = {
  size?: keyof IconTypes['size'];
  active?: boolean | keyof IconTypes['active'];
};

const Icon = React.memo(({ size = 'medium', active = false, className, ...props }: ImageProps & IconProps) => {
  const activeValue = typeof active === 'boolean' ? (active ? 'true' : 'false') : active;
  const classNames = `${style.icon} ${style.iconSize[size]} ${style.iconActive[activeValue]} ${className}`;

  return <Image className={classNames} width={30} height={30} {...props} priority />;
});

export default Icon;
