import Image, { ImageProps } from 'next/image';
import * as style from './Icon.css';
import React from 'react';
type IconTypes = typeof style.iconVariants;
type IconProps = {
  size?: keyof IconTypes['size'];
  colorFill?: keyof IconTypes['colorFill'];
};

const Icon = React.memo(
  ({ size = 'medium', colorFill = 'darkCharcoal', className, ...props }: ImageProps & IconProps) => {
    const classNames = `${style.icon} ${style.iconSize[size]} ${style.iconColorFill[colorFill]} ${className}`;

    return <Image className={classNames} width={30} height={30} {...props} priority />;
  },
);

export default Icon;
