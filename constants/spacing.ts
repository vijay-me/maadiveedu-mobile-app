/**
  Use these spacings for margins/paddings and other whitespace throughout your app.
 */
  export const spacing = {
    micro: 2,
    tiny: 4,
    extraSmall: 8,
    small: 12,
    medium: 16,
    large: 24,
    extraLarge: 32,
    huge: 48,
    massive: 64,
    // extraMassive: 80,
    // gigantic: 96,
    // colossal: 128,
    // extraColossal: 160,
    // enormous: 192,
    // extraEnormous: 224,
    // gargantuan: 256,
    // titanic: 288,
    // extraTitanic: 320,
    // monumental: 352,
    // extraMonumental: 384,
  } as const
  
  export type Spacing = keyof typeof spacing
  