import type { MenuButtonProps } from "./types.ts";
import { Link } from "react-router";

function MenuButton({ route, label }: MenuButtonProps) {
  const classes =
    "absolute inset-0 flex items-center justify-center text-4xl font-black uppercase tracking-wide transition-all duration-300";

  return (
    <li>
      <Link to={route} className="relative overflow-hidden group px-4 py-2">
        {/*Texte principal*/}
        <div className="overflow-hidden">
          <span className="relative z-20 text-4xl font-black uppercase tracking-wide text-[#fce3be] transition-transform duration-300">
            {label}
          </span>
        </div>

        {/*/!*Couche bleu clair*!/*/}
        {/*<div className="overflow-hidden">*/}
        {/*  <span*/}
        {/*    className={`${classes} z-10 text-[#87cdc0] translate-y-0 transition-all group-hover:translate-y-2`}*/}
        {/*  >*/}
        {/*    {label}*/}
        {/*  </span>*/}
        {/*</div>*/}

        {/*/!*Couche bleu foncé*!/*/}
        {/*<div className="overflow-hidden">*/}
        {/*  <span*/}
        {/*    className={`${classes} z-5 text-[#0777a1] translate-y-0 transition-all group-hover:translate-y-3`}*/}
        {/*  >*/}
        {/*    {label}*/}
        {/*  </span>*/}
        {/*</div>*/}

        {/*Couche orange clair */}
        <span
          className={`${classes} z-10 text-[#fcb06a] -translate-y-0 transition-all group-hover:translate-y-1`}
        >
          {label}
        </span>

        {/*Couche orange foncé*/}
        <span
          className={`${classes} z-5 text-[#fd4d17] -translate-y-0 transition-all group-hover:translate-y-2`}
        >
          {label}
        </span>
      </Link>
    </li>
  );
}

export default MenuButton;
