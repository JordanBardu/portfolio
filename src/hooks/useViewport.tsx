import { debounce } from 'lodash-es';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

export const ViewportContext = createContext<{ width: number; height: number }>(
  {
    width: window.innerWidth,
    height: window.innerHeight,
  },
);

export const ViewportProvider = ({ children }: { children?: ReactNode }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    const debouncedHandleWindowResize = debounce(handleWindowResize);

    window.addEventListener('resize', debouncedHandleWindowResize);
    return () =>
      window.removeEventListener('resize', debouncedHandleWindowResize);
  }, []);

  return (
    <ViewportContext.Provider value={{ width, height }}>
      {children}
    </ViewportContext.Provider>
  );
};

const useViewport = () => {
  const { width, height } = useContext(ViewportContext);
  return { width, height };
};

export default useViewport;
