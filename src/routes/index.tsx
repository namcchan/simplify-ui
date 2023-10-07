import { SvgColor } from '../components';
import { SidebarGroupType } from '../layouts/types';

const icon = (name: string) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);
export const groupRoutes: Array<SidebarGroupType> = [
  {
    title: 'Overview',
    routes: [
      {
        title: 'App',
        path: '/',
        icon: <SvgColor src="/assets/icons/Files/File.svg" sx={{ width: 1, height: 1 }} />,
      },
      {
        title: 'E-Commerce',
        path: '/e-commerce',
        icon: <SvgColor src="/assets/icons/Files/File.svg" sx={{ width: 1, height: 1 }} />,
      },
      {
        title: 'Analytics',
        path: '/analytics',
        icon: icon('ic_analytics'),
      },
      {
        title: 'Banking',
        path: '/banking',
        icon: <SvgColor src="/assets/icons/Files/File.svg" sx={{ width: 1, height: 1 }} />,
      },
      {
        title: 'Booking',
        path: '/booking',
        icon: <SvgColor src="/assets/icons/Files/File.svg" sx={{ width: 1, height: 1 }} />,
      },
      {
        title: 'File',
        path: '/file',
        icon: <SvgColor src="/assets/icons/Files/File.svg" sx={{ width: 1, height: 1 }} />,
      },
    ],
  },
  {
    title: 'Management',
    routes: [
      {
        title: 'user',
        path: '/user',
        icon: icon('ic_user'),
        children: [
          {
            title: 'Profile',
            path: '/user/profile',
          },
          {
            title: 'Cards',
            path: '/user/cards',
          },
          {
            title: 'List',
            path: '/user/list',
          },
          {
            title: 'Account',
            path: '/user/account',
          },
        ],
      },
      {
        title: 'Product',
        path: '/product',
        icon: icon('ic_cart'),
        children: [
          {
            title: 'List',
            path: '/user/profile',
          },
          {
            title: 'Detail',
            path: '/user/cards',
          },
          {
            title: 'Create',
            path: '/user/list',
          },
          {
            title: 'Edit',
            path: '/user/account',
          },
        ],
      },
      {
        title: 'blog',
        path: '/dashboard/blog',
        icon: icon('ic_blog'),
      },
      {
        title: 'login',
        path: '/login',
        icon: icon('ic_lock'),
      },
      {
        title: 'Not found',
        path: '/404',
        icon: icon('ic_disabled'),
      },
    ],
  },
];
