import { create } from 'zustand';

import { storage } from '@/utils/storage';

interface ColorModeStoreProps {
  colorMode: 'light' | 'dark';
  toggleColorMode: () => void;
}

export const useColorModeStore = create<ColorModeStoreProps>(set => ({
  colorMode: storage.getColorMode(),
  toggleColorMode: () =>
    set(state => {
      const colorMode = state.colorMode === 'light' ? 'dark' : 'light';

      storage.setColorMode(colorMode);
      return { colorMode };
    })
}));
