import MuiAvatar from '@mui/material/Avatar';
import { styled, Theme, useTheme } from '@mui/material/styles';
import { ReactNode } from 'react';

// Custom types
import { AvatarTypeProps, ColorProps, SizeProps } from 'types/extended';
import { getColors } from 'utils/getColors';

interface GetColorStyleProps {
  theme: Theme;
  color: ColorProps;
  type?: AvatarTypeProps;
}

function getColorStyle({ theme, color, type }: GetColorStyleProps) {
  const colors = getColors(theme, color);
  const { lighter, light, main, contrastText } = colors;

  switch (type) {
    case 'filled':
      return {
        color: contrastText,
        background: main
      };
    case 'outlined':
      return {
        color: main,
        border: '1px solid',
        borderColor: main,
        background: 'transparent'
      };
    case 'combined':
      return {
        color: main,
        border: '1px solid',
        borderColor: light,
        background: lighter
      };
    default:
      return {
        color: main,
        background: lighter
      };
  }
}

// ==============================|| AVATAR - SIZE STYLE ||============================== //

function getSizeStyle(size: SizeProps) {
  switch (size) {
    case 'badge':
      return {
        border: '2px solid',
        fontSize: '0.675rem',
        width: 20,
        height: 20
      };
    case 'xs':
      return {
        fontSize: '0.75rem',
        width: 24,
        height: 24
      };
    case 'sm':
      return {
        fontSize: '0.875rem',
        width: 32,
        height: 32
      };
    case 'lg':
      return {
        fontSize: '1.2rem',
        width: 52,
        height: 52
      };
    case 'xl':
      return {
        fontSize: '1.5rem',
        width: 64,
        height: 64
      };
    case 'md':
    default:
      return {
        fontSize: '1rem',
        width: 40,
        height: 40
      };
  }
}

interface AvatarStyleProps {
  theme: Theme;
  color: ColorProps;
  type?: AvatarTypeProps;
  size: SizeProps;
}

const AvatarStyle = styled(MuiAvatar, {
  shouldForwardProp: (prop) => prop !== 'color' && prop !== 'type' && prop !== 'size'
})<AvatarStyleProps>(({ theme, color, type, size }) => ({
  ...getSizeStyle(size),
  ...getColorStyle({ theme, color, type }),
  ...(size === 'badge' && {
    borderColor: theme.palette.background.default
  })
}));

export interface AvatarProps {
  color?: ColorProps;
  children?: ReactNode;
  type?: AvatarTypeProps;
  size?: SizeProps;
  [key: string]: any; // For any other additional props
}

export default function Avatar({ children, color = 'primary', type, size = 'md', ...others }: AvatarProps) {
  const theme = useTheme();

  return (
    <AvatarStyle theme={theme} color={color} type={type} size={size} {...others}>
      {children}
    </AvatarStyle>
  );
}
