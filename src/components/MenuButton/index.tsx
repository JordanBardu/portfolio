import type { MenuButtonProps } from "./types.ts";
import { Link } from "react-router";

function MenuButton({ route, label }: MenuButtonProps) {
  const classes =
    "absolute inset-0 flex items-center justify-center text-l font-black uppercase tracking-wide transition-all duration-300";

  return (
    <li>
      <Link to={route} className="relative overflow-hidden group px-4">
        {/*Texte principal*/}
        <div className="overflow-hidden">
          <span className="relative z-20 text-l font-black uppercase tracking-wide text-text transition-transform duration-300">
            {label}
          </span>
        </div>
        <span
          className={`${classes} z-10 text-secondary -translate-y-0 transition-all group-hover:translate-y-1`}
        >
          {label}
        </span>

        <span
          className={`${classes} z-5 text-primary -translate-y-0 transition-all group-hover:translate-y-2`}
        >
          {label}
        </span>
      </Link>
    </li>
  );
}

export default MenuButton;
