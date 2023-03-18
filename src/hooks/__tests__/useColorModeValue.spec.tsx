import { AppProvider } from '@/providers/app';
import { cleanup, renderHook } from '@/test/test-utils';

import { useColorModeValue } from '../useColorModeValue';

afterEach(() => cleanup());

test('returns the value for light mode', async () => {
  const { result } = renderHook(() => useColorModeValue('light', 'dark'), { wrapper: AppProvider });
  expect(result.current).toBe('light');
});
