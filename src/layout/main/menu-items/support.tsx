// assets
import { ChromeOutlined, QuestionOutlined } from '@ant-design/icons';
import { MenuItem } from 'types/menu';

// icons
const icons = {
  ChromeOutlined,
  QuestionOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support: MenuItem = {
  id: 'support',
  title: 'Support',
  type: 'group',
  children: [
    {
      id: 'sample-page',
      title: 'Sample Page',
      type: 'item',
      url: '/sample-page',
      icon: icons.ChromeOutlined
    },
    {
      id: 'documentation',
      title: 'Documentation',
      type: 'item',
      url: 'https://github.com/KaiqueGovani/nextjs-mantis-dashboard',
      icon: icons.QuestionOutlined,
      external: true,
      target: true
    }
  ]
};

export default support;
