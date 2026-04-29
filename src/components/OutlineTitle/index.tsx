import type { OutlineTitleProps } from './types.ts';

function OutlineTitle({ title, size = 'medium' }: OutlineTitleProps) {
  const sizeMap = {
    small: 'text-4xl',
    medium: 'text-6xl',
    large: 'text-9xl',
  };
  const textClasses = `${sizeMap[size]} mt-24 ml-6 font-bold w-full text-outline opacity-70 flex justify-start font-[Area]`;
  return <h2 className={textClasses}>{title.toUpperCase()}</h2>;
}

export default OutlineTitle;
