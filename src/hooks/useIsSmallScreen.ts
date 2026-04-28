import { SCREEN_SIZE } from './types.ts';
import useViewport from './useViewport.tsx';

const useIsSmallScreen = (smallScreenDef = SCREEN_SIZE.LG): boolean => {
  const { width } = useViewport();

  return width <= smallScreenDef;
};

export default useIsSmallScreen;
