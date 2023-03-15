import { AppProvider } from '@/providers/app';
import { renderHook } from '@/test/test-utils';

import { useColorModeValue } from '../useColorModeValue';

describe('useColorModeValue Hook', () => {
  it('should render without crashing', async () => {
    const { result } = renderHook(() => useColorModeValue('light', 'dark'), { wrapper: AppProvider });
    expect(result.current).toBe('light');
  });
});
