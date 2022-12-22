import { createContext, useCallback, useState, useContext, useMemo } from 'react';

import { storage } from '@/utils/storage';

interface ColorModeContextData {
  colorMode: 'light' | 'dark';
  toggleColorMode: () => void;
}

interface ColorModeProviderProps {
  children: React.ReactNode;
}

const ColorModeContext = createContext<ColorModeContextData>({} as ColorModeContextData);

function ColorModeProvider({ children }: ColorModeProviderProps) {
  const [colorMode, setColorMode] = useState(() => storage.getColorMode());

  const toggleColorMode = useCallback(() => {
    if (colorMode === 'light') {
      setColorMode('dark');
      storage.setColorMode('dark');
    } else {
      setColorMode('light');
      storage.setColorMode('light');
    }
  }, [colorMode]);

  const providerValue = useMemo(() => ({ colorMode, toggleColorMode }), [colorMode, toggleColorMode]);

  return <ColorModeContext.Provider value={providerValue}>{children}</ColorModeContext.Provider>;
}

function useColorMode(): ColorModeContextData {
  const context = useContext(ColorModeContext);

  if (!context) {
    throw new Error('useColorMode must be inside ColorModeProvider');
  }

  return context;
}

export { ColorModeProvider, useColorMode };
