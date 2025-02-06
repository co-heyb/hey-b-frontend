import Image, { ImageProps } from 'next/image';
import * as style from './Icon.css';
type IconTypes = NonNullable<style.IconVariants>;
type IconProps = {
  size?: IconTypes['size'];
};

const Icon = ({ size, ...props }: ImageProps & IconProps) => {
  return <Image className={style.Icon({ size })} {...props} />;
};

export default Icon;
