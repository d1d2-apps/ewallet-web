import { useColorModeStore } from '@/stores/colorMode';

/**
 * Change value based on color mode.
 *
 * @param light the light mode value
 * @param dark the dark mode value
 *
 * @example
 *
 * ```js
 * const Icon = useColorModeValue(MoonIcon, SunIcon)
 * ```
 */
export function useColorModeValue<TLight = unknown, TDark = unknown>(light: TLight, dark: TDark) {
  const { colorMode } = useColorModeStore();
  return colorMode === 'light' ? light : dark;
}
