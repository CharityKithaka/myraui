import { colorNames } from './color-names';
import { shades } from './color-shades';

export type ColorMode = 'light' | 'dark';

export type ColorName = (typeof colorNames)[number];

export type ColorShade = (typeof shades)[number];

export type ColorScale = Record<ColorShade, string>;

export type ColorValue = Record<ColorMode, ColorScale>;

export type BaseColors = Record<ColorName, ColorValue>;
