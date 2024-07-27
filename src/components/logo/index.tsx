'use client';

// material-ui
import { ButtonBase, SxProps, Theme } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
// project import
import config from 'config';
import Link from 'next/link';
import { getEnvConfig } from 'post/config.action';
import { useEffect } from 'react';
import Logo from './LogoMain';
import React from 'react';

// ==============================|| MAIN LOGO ||============================== //

type LogoSectionProps = {
  sx?: SxProps<Theme>;
  to?: string;
};

export default function LogoSection({ sx, to }: LogoSectionProps) {
  const [label, setLabel] = React.useState<string>('');
  useEffect(() => {
    getEnvConfig().then((env) => {
      setLabel(env.version);
    });
  }, []);

  return (
    <Link href={!to ? config.defaultPath : to}>
      <ButtonBase disableRipple sx={sx}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Logo />
          <Chip
            label={label}
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
