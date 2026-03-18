import { type PrimaryButtonProps, PrimaryButtonSizeEnum } from "./types.ts";

function PrimaryButton({
  icon,
  content,
  size = PrimaryButtonSizeEnum.SMALL,
  onClick,
}: PrimaryButtonProps) {
  const sizeMap = {
    small: "h-24 w-24",
    medium: "h-24 w-52",
    large: "h-24 w-76",
  };
  return (
    <div className={`relative group ${sizeMap[size]}`}>
      <div
        className="
          absolute inset-0 rounded-3xl bg-[#c40c0c]
          translate-x-[10px] translate-y-[10px]
          transition-colors duration-200
          group-hover:bg-[#f6ce71]
        "
      />
      <button
        onClick={onClick}
        className="
          absolute inset-0 bg-white rounded-3xl flex justify-center items-center
          transition-transform duration-200 ease-out
          hover:translate-x-[4px] hover:translate-y-[4px] hover:cursor-pointer
          active:translate-x-[0px] active:translate-y-[0px]
          border-4 border-[#c40c0c] active:border-[#f6ce71] hover:border-[#f6ce71]
        "
      >
        <i
          className={`fa-solid ${icon} text-black text-5xl`}
        />
        {content}
      </button>
    </div>
  );
}

export default PrimaryButton;
