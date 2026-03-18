import buttonsContent from "./buttonsContent.json";
import MenuButton from "../MenuButton";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center">
      <ul className="mt-4 flex flex-row items-start gap-24 px-8 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
        {buttonsContent.map((button) => (
          <MenuButton route={button.route} label={button.label} />
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
