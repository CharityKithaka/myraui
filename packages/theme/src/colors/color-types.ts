import { colorNames } from './color-names';
import { shades } from './color-shades';

export type ColorMode = 'light' | 'dark';

export type MyraColor = (typeof colorNames)[number];

export type ColorShade = (typeof shades)[number];

export type ColorScale = Record<ColorShade, string>;

export type FlatMyraColor = `${MyraColor}.${ColorShade}`;

export type ColorPalette<T extends string = string> = Record<T, ColorScale>;

export type ThemedColorScale = Record<ColorMode, ColorScale>;

export type MyraColors = Record<MyraColor, ThemedColorScale>;
