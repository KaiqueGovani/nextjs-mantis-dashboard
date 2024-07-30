'use client';

import { useEffect } from 'react';

// material-ui
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import useMediaQuery from '@mui/material/useMediaQuery';

// project import
import Breadcrumbs from 'components/@extended/Breadcrumbs';
import Loader from 'components/Loader';

import { Theme } from '@mui/material';
import { handlerDrawerOpen, useGetMenuMaster } from 'api/menu';
import Drawer from 'layout/main/Drawer';
import Header from 'layout/main/Header';
import menuItems from 'layout/main/menu-items';

// ==============================|| MAIN LAYOUT ||============================== //

export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { menuMasterLoading } = useGetMenuMaster();
  const downLG = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));

  useEffect(() => {
    handlerDrawerOpen(!downLG);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [downLG]);

  if (menuMasterLoading) return <Loader />;

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Header />
      <Drawer />
      <Box component="main" sx={{ width: 'calc(100% - 260px)', flexGrow: 1, p: { xs: 2, sm: 3 } }}>
        <Toolbar />
        <Breadcrumbs navigation={menuItems} title />
        {children}
      </Box>
    </Box>
  );
}
