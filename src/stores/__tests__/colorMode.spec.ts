import { act } from 'react-dom/test-utils';

import { cleanup, renderHook } from '@/test/test-utils';
import { storage } from '@/utils/storage';

import { useColorModeStore } from '../colorMode';

afterEach(() => cleanup());

test('should load current color mode from localStorage', async () => {
  const { result } = renderHook(() => useColorModeStore());
  expect(result.current.colorMode).toBe('light');
});

test('should be able to toggle to dark color mode', async () => {
  const { result } = renderHook(() => useColorModeStore());

  act(() => result.current.toggleColorMode());

  expect(result.current.colorMode).toBe('dark');

  const storedColorMode = storage.getColorMode();
  expect(storedColorMode).toBe('dark');
});
