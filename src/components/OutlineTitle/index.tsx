import type { OutlineTitleProps } from "./types.ts";

function OutlineTitle({ title, size = "medium" }: OutlineTitleProps) {
  const sizeMap = {
    small: "text-4xl",
    medium: "text-6xl",
    large: "text-9xl",
  };
  const textClasses = `${sizeMap[size]} font-bold mb-6 w-full text-outline opacity-70 flex justify-start`;
  return <h2 className={textClasses}>{title}</h2>;
}

export default OutlineTitle;
