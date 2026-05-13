import type { MenuButtonProps } from './types.ts';
import { Link } from 'react-router';
import useIsSmallScreen from '../../hooks/useIsSmallScreen.ts';
import { SCREEN_SIZE } from '../../hooks/types.ts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import {
  faCircle,
  faCode,
  faEnvelope,
  faGraduationCap,
  faHouse,
  faWrench,
} from '@fortawesome/free-solid-svg-icons';

function MenuButton({ route, label }: MenuButtonProps) {
  const isMobile = useIsSmallScreen(SCREEN_SIZE.LG);
  const ROUTE_ICONS: Record<string, IconDefinition> = {
    '/': faHouse,
    '/course': faGraduationCap,
    '/projects': faCode,
    '/skills': faWrench,
    '/contact': faEnvelope,
  };
  const classes =
    'absolute inset-0 flex items-center justify-center lg:text-base text-sm font-black uppercase tracking-wide transition-all duration-300';

  return (
    <li className="h-full flex justify-center items-center">
      <Link to={route} className="relative group lg:px-4">
        {isMobile ? (
          <div className="flex flex-col items-center gap-2">
            <FontAwesomeIcon
              icon={ROUTE_ICONS[route] ?? faCircle}
              className="text-lg text-text"
            />
          </div>
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
