import { ChipProps, SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { ComponentClass, FunctionComponent } from 'react';

export type MenuItem = {
  id?: string;
  url?: string;
  title: string;
  type?: MenuItemType;
  children?: MenuItem[];
  breadcrumbs?: boolean;
  chip?: ChipProps;
  target?: boolean;
  external?: boolean;
  disabled?: boolean;
  icon?:
    | (OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
        muiName: string;
      })
    | ComponentClass<any>
    | FunctionComponent<any>;
};
export type MenuItemType = 'group' | 'item' | 'collapse';
