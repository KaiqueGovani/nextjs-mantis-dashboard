// material-ui
import Box from '@mui/material/Box';
import { SxProps, Theme, useTheme } from '@mui/material/styles';

// project import
import { ColorProps } from 'types/extended';
import { getColors } from 'utils/getColors';

type DotProps = {
  color: ColorProps;
  size?: number;
  variant?: 'outlined' | 'filled';
  sx?: SxProps<Theme>;
};

export default function Dot({ color, size, variant, sx }: DotProps) {
  const theme = useTheme();
  const colors = getColors(theme, color || 'primary');
  const { main } = colors;

  return (
    <Box
      sx={{
        width: size || 8,
        height: size || 8,
        borderRadius: '50%',
        bgcolor: variant === 'outlined' ? '' : main,
        ...(variant === 'outlined' && { border: `1px solid ${main}` }),
        ...sx
      }}
    />
  );
}
