import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radil,
  space,
} from '@ignite-ui/tokens'

import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  styled,
  getCssText,
  css,
  globalCss,
  config,
  keyframes,
  theme,
  createTheme,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
    borderRadius: 'radil',
  },
  theme: {
    colors,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    radil,
    space,
  },
})
