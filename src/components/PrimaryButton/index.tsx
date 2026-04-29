import { type PrimaryButtonProps, PrimaryButtonSizeEnum } from './types.ts';

function PrimaryButton({
  icon,
  content,
  buttonSize = PrimaryButtonSizeEnum.SMALL,
  onClick,
  iconSize = PrimaryButtonSizeEnum.SMALL,
  textSize = PrimaryButtonSizeEnum.SMALL,
}: PrimaryButtonProps) {
  const buttonClasses = `absolute inset-0 bg-test rounded-3xl flex justify-center items-center transition-transform duration-200 ease-out hover:translate-x-[4px] hover:translate-y-[4px] hover:cursor-pointer active:translate-x-[0px] active:translate-y-[0px] border-4 border-[#c40c0c] active:border-[#f6ce71] hover:border-[#f6ce71] ${content && icon ? 'gap-4' : ''}`;
  const buttonSizeMap = {
    small: 'h-24 w-24',
    medium: 'h-24 w-56',
    large: 'h-24 w-76',
  };
  const iconSizeMap = {
    small: 'text-xl',
    medium: 'text-3xl',
    large: 'text-5xl',
  };
  const textSizeMap = {
    small: 'text-lg',
    medium: 'text-xl',
    large: 'text-2xl',
  };
  return (
    <div className={`relative group ${buttonSizeMap[buttonSize]}`}>
      <div
        className="
          absolute inset-0 rounded-3xl bg-[#c40c0c]
          translate-x-[10px] translate-y-[10px]
          transition-colors duration-200
          group-hover:bg-[#f6ce71]
        "
      />
      <button onClick={onClick} className={buttonClasses}>
        <i className={`fa-solid ${icon} text-black ${iconSizeMap[iconSize]}`} />
        <p className={`text-black ${textSizeMap[textSize]} font-bold`}>
          {content}
        </p>
      </button>
    </div>
  );
}

export default PrimaryButton;
