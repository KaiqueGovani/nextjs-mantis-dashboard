// material-ui
import Box from '@mui/material/Box';

// project import
import { Theme } from '@mui/material';
import MainCard from 'components/MainCard';
import { PropsWithChildren } from 'react';

// ==============================|| AUTHENTICATION - CARD WRAPPER ||============================== //

export function AuthCard({ children, ...other }: PropsWithChildren) {
  return (
    <MainCard
      sx={{ maxWidth: { xs: 400, lg: 475 }, margin: { xs: 2.5, md: 3 }, '& > *': { flexGrow: 1, flexBasis: '50%' } }}
      content={false}
      {...other}
      border={false}
      boxShadow
      shadow={(theme: Theme) => theme.customShadows.z1}
    >
      <Box sx={{ p: { xs: 2, sm: 3, md: 4, xl: 5 } }}>{children}</Box>
    </MainCard>
  );
}
