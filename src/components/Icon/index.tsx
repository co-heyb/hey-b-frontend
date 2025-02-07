import Image, { ImageProps } from 'next/image';
import * as style from './Icon.css';
import React from 'react';
type IconTypes = NonNullable<style.IconVariants>;
type IconProps = {
  size?: IconTypes['size'];
  active?: IconTypes['active'];
};

const Icon = ({ size, active, ...props }: ImageProps & IconProps) => {
  return <Image className={style.Icon({ size, active })} {...props} />;
};

export default React.memo(Icon);
