import type { OutlineTitleProps } from './types.ts';

function OutlineTitle({ title, size = 'medium' }: OutlineTitleProps) {
  const sizeMap = {
    small: 'lg:text-4xl text-2xl',
    medium: 'lg:text-6xl text-3xl',
    large: 'lg:text-9xl text-4xl',
  };
  const textClasses = `${sizeMap[size]} mt-6 lg:mt-24 ml-6 font-bold w-full text-outline opacity-70 flex justify-start font-[Area]`;
  return <h2 className={textClasses}>{title.toUpperCase()}</h2>;
}

export default OutlineTitle;
