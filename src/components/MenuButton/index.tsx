import type { MenuButtonProps } from "./types.ts";
import { Link } from "react-router";

function MenuButton({ route, label }: MenuButtonProps) {
  const classes =
    "absolute inset-0 flex items-center justify-center text-l font-black uppercase tracking-wide transition-all duration-300";

  return (
    <li>
      <Link to={route} className="relative overflow-hidden group px-4">
        {/* Texte principal */}
        <span className={`${classes} z-20 text-text`}>{label}</span>

        {/* Layer secondaire */}
        <span
          className={`${classes} z-10 text-secondary group-hover:translate-y-1`}
        >
          {label}
        </span>

        {/* Layer tertiaire */}
        <span
          className={`${classes} z-5 text-primary group-hover:translate-y-2`}
        >
          {label}
        </span>
      </Link>
    </li>
  );
}

export default MenuButton;
