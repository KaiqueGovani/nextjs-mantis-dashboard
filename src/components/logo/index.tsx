'use client';

// material-ui
import { ButtonBase, SxProps, Theme } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
// project import
import config from 'config';
import Link from 'next/link';
import React from 'react';
import Logo from './LogoMain';

// ==============================|| MAIN LOGO ||============================== //

type LogoSectionProps = {
  sx?: SxProps<Theme>;
  to?: string;
};

export default function LogoSection({ sx, to }: LogoSectionProps) {
  return (
    <Link href={!to ? config.defaultPath : to}>
      <ButtonBase disableRipple sx={sx}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Logo />
          <Chip
            label={process.env.NEXT_PUBLIC_APP_VERSION}
            variant="outlined"
            size="small"
            color="secondary"
            sx={{ mt: 0.5, ml: 1, fontSize: '0.725rem', height: 20, '& .MuiChip-label': { px: 0.5 } }}
          />
        </Stack>
      </ButtonBase>
    </Link>
  );
}
