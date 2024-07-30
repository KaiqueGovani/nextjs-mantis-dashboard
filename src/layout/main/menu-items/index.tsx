// project import
import { MenuItem } from 'types/menu';
import dashboard from './dashboard';
import pages from './page';
import support from './support';
import utilities from './utilities';

// ==============================|| MENU ITEMS ||============================== //

const menuItems: { items: MenuItem[] } = {
  items: [dashboard, pages, utilities, support]
};

export default menuItems;
