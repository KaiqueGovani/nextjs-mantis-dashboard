'use client';

import { useEffect, useState } from 'react';

// material-ui
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// project import
import MainCard from 'components/MainCard';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { MenuItem } from 'types/menu';
import { SxProps, Theme } from '@mui/system';

type BreadcrumbsProps = {
  navigation: { items: MenuItem[] };
  title: boolean;
  card?: boolean;
  custom?: boolean;
  divider?: boolean;
  heading?: string;
  icon?: boolean;
  icons?: boolean;
  links?: any[];
  maxItems?: number;
  rightAlign?: boolean;
  separator?: any;
  titleBottom?: boolean;
  sx?: SxProps<Theme>;
  others?: any;
};

export default function Breadcrumbs({ navigation, title, ...others }: BreadcrumbsProps) {
  const location = usePathname();
  const router = useRouter();
  const [main, setMain] = useState<MenuItem>();
  const [item, setItem] = useState<MenuItem>();

  // set active item state
  const getCollapse = (menu: MenuItem) => {
    if (menu.children) {
      menu.children.filter((collapse: MenuItem) => {
        if (collapse.type && collapse.type === 'collapse') {
          getCollapse(collapse);
        } else if (collapse.type && collapse.type === 'item') {
          if (location === collapse.url) {
            setMain(menu);
            setItem(collapse);
          }
        }
        return false;
      });
    }
  };

  useEffect(() => {
    navigation?.items?.map((menu: MenuItem) => {
      if (menu.type && menu.type === 'group') {
        getCollapse(menu);
      }
      return false;
    });
  }, [location, navigation]);

  // only used for component demo breadcrumbs
  if (location === '/breadcrumbs') {
    router.push('/dashboard/analytics');
  }

  let mainContent;
  let itemContent;
  let breadcrumbContent = <Typography />;
  let itemTitle = '';

  // collapse item
  if (main && main.type === 'collapse') {
    mainContent = (
      <Link href={document.location.pathname}>
        <Typography variant="h6" sx={{ textDecoration: 'none' }} color="textSecondary">
          {main.title}
        </Typography>
      </Link>
    );
  }

  // items
  if (item && item.type === 'item') {
    itemTitle = item.title;
    itemContent = (
      <Typography variant="subtitle1" color="textPrimary">
        {itemTitle}
      </Typography>
    );

    // main
    if (item.breadcrumbs !== false) {
      breadcrumbContent = (
        <MainCard border={false} sx={{ mb: 3, bgcolor: 'transparent' }} {...others} content={false}>
          <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start" spacing={1}>
            <Grid item>
              <MuiBreadcrumbs aria-label="breadcrumb">
                <Link href="/" style={{ textDecoration: 'none' }}>
                  <Typography color="textSecondary" variant="h6" sx={{ textDecoration: 'none' }}>
                    Home
                  </Typography>
                </Link>
                {mainContent}
                {itemContent}
              </MuiBreadcrumbs>
            </Grid>
            {title && (
              <Grid item sx={{ mt: 2 }}>
                <Typography variant="h5">{item.title}</Typography>
              </Grid>
            )}
          </Grid>
        </MainCard>
      );
    }
  }

  return breadcrumbContent;
}
