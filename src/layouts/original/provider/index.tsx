import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

const DashboardLayoutContext = createContext<any>({
  minimize: false,
});

export const DashboardLayoutProvider = ({ children }: PropsWithChildren) => {
  const [isMinimize, setMinimize] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  const onMinimize = useCallback(() => {
    setMinimize((prev) => {
      localStorage?.setItem('isMinimize', (!prev).toString());
      return !prev;
    });
  }, []);

  const onOpenSidebar = useCallback(() => {
    setOpenSidebar((prev) => !prev);
  }, []);

  const value = {
    openSidebar,
    onMinimize,
    isMinimize,
    onOpenSidebar,
  };

  useEffect(() => {
    setMinimize(localStorage?.getItem('isMinimize') === 'true');
  }, []);

  return (
    <DashboardLayoutContext.Provider value={value}>{children}</DashboardLayoutContext.Provider>
  );
};

export const useDashboardLayout = () => {
  const context = useContext(DashboardLayoutContext);

  if (!context) throw new Error('useDashboardLayout must be covered by DashboardLayoutContext');

  return context;
};
