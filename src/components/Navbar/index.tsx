import buttonsContent from './buttonsContent.json';
import MenuButton from '../MenuButton';

function Navbar() {
  return (
    <nav className="fixed lg:top-0 left-0 bottom-0 w-full z-50 flex justify-center lg:h-14 h-20">
      <ul className="flex flex-row items-center lg:w-[90%] w-full lg:gap-0 justify-around lg:rounded-b-xl backdrop-blur-xl bg-white/5 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
        {buttonsContent.map((button) => (
          <MenuButton route={button.route} label={button.label} />
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
