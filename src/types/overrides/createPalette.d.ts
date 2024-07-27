import * as createPalette from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface PaletteColor {
    lighter: string;
    darker: string;
    700: string;
  }
}
