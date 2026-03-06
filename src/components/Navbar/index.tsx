import buttonsContent from "./buttonsContent.json";
import MenuButton from "../MenuButton";

function Navbar() {
  return (
    <nav>
      <ul className="fixed top-0 left-0 w-full z-50 flex flex-row items-start px-6 justify-between">
        {buttonsContent.map((button) => (
          <MenuButton route={button.route} label={button.label} />
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
