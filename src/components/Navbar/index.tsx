import buttonsContent from "./buttonsContent.json";
import MenuButton from "../MenuButton";

function Navbar() {
  return (
    <nav>
      <ul className="flex flex-row gap-12">
        {buttonsContent.map((button) => (
          <MenuButton route={button.route} label={button.label} />
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
