import type { MenuButtonProps } from './types.ts';
import { Link } from 'react-router';
import useIsSmallScreen from '../../hooks/useIsSmallScreen.ts';
import { SCREEN_SIZE } from '../../hooks/types.ts';

function MenuButton({ route, label }: MenuButtonProps) {
  const isMobile = useIsSmallScreen(SCREEN_SIZE.LG);
  const ROUTE_ICONS: Record<string, string> = {
    '/': 'fa-house',
    '/course': 'fa-graduation-cap',
    '/projects': 'fa-code',
    '/skills': 'fa-wrench',
  };
  const classes =
    'absolute inset-0 flex items-center justify-center lg:text-l text-sm font-black uppercase tracking-wide transition-all duration-300';

  return (
    <li>
      <Link to={route} className="relative overflow-hidden group px-4 h-full">
        {isMobile ? (
          <span className={`${classes} z-20 text-text`}>
            <i className={`fa-solid ${ROUTE_ICONS[route] ?? 'fa-circle'}`} />
          </span>
        ) : (
          <>
            <span className={`${classes} z-20 text-text`}>{label}</span>
            <span
              className={`${classes} z-10 text-secondary group-hover:translate-y-1`}
            >
              {label}
            </span>
            <span
              className={`${classes} z-5 text-primary group-hover:translate-y-2`}
            >
              {label}
            </span>
          </>
        )}
      </Link>
    </li>
  );
}

export default MenuButton;
