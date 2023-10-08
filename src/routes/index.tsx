import { SvgColor } from '@/components';
import { AsideGroupType } from '../layouts/types';

const icon = (name: string) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);
export const groupRoutes: Array<AsideGroupType> = [
  {
    title: 'Overview',
    routes: [
      {
        title: 'App',
        path: '/dashboard',
        icon: icon('ic_dashboard'),
      },
      {
        title: 'E-Commerce',
        path: '/dashboard/e-commerce',
        icon: icon('ic_cart'),
      },
      {
        title: 'Analytics',
        path: '/dashboard/analytics',
        icon: icon('ic_analytics'),
      },
      {
        title: 'Banking',
        path: '/dashboard/banking',
        icon: icon('ic_banking'),
      },
      {
        title: 'Booking',
        path: '/dashboard/booking',
        icon: icon('ic_booking'),
      },
      {
        title: 'File',
        path: '/dashboard/file',
        icon: icon('ic_file'),
      },
    ],
  },
  {
    title: 'Management',
    routes: [
      {
        title: 'user',
        path: '/dashboard/user',
        icon: icon('ic_user'),
        children: [
          {
            title: 'Profile',
            path: '/dashboard/user/profile',
          },
          {
            title: 'Cards',
            path: '/dashboard/user/cards',
          },
          {
            title: 'List',
            path: '/dashboard/user/list',
          },
          {
            title: 'Account',
            path: '/dashboard/user/account',
          },
        ],
      },
      {
        title: 'Product',
        path: '/dashboard/product',
        icon: icon('ic_product'),
        children: [
          {
            title: 'List',
            path: '/dashboard/product',
          },
          {
            title: 'Detail',
            path: '/dashboard/product/details',
          },
          {
            title: 'Create',
            path: '/dashboard/product/create',
          },
          {
            title: 'Edit',
            path: '/dashboard/product/edit',
          },
        ],
      },
      {
        title: 'Order',
        path: '/dashboard/order',
        icon: icon('ic_order'),
        children: [
          {
            title: 'List',
            path: '/dashboard/order',
          },
          {
            title: 'Detail',
            path: '/dashboard/order/details',
          },
        ],
      },
      {
        title: 'Invoice',
        path: '/dashboard/invoice',
        icon: icon('ic_invoice'),
        children: [
          {
            title: 'List',
            path: '/dashboard/invoice',
          },
          {
            title: 'Detail',
            path: '/dashboard/invoice/details',
          },
          {
            title: 'Create',
            path: '/dashboard/invoice/create',
          },
          {
            title: 'Edit',
            path: '/dashboard/invoice/edit',
          },
        ],
      },
      {
        title: 'Blog',
        path: '/dashboard/blog',
        icon: icon('ic_blog'),
        children: [
          {
            title: 'List',
            path: '/dashboard/blog',
          },
          {
            title: 'Detail',
            path: '/dashboard/blog/details',
          },
          {
            title: 'Create',
            path: '/dashboard/blog/create',
          },
          {
            title: 'Edit',
            path: '/dashboard/blog/edit',
          },
        ],
      },
      {
        title: 'Job',
        path: '/dashboard/job',
        icon: icon('ic_job'),
        children: [
          {
            title: 'List',
            path: '/dashboard/job',
          },
          {
            title: 'Detail',
            path: '/dashboard/job/details',
          },
          {
            title: 'Create',
            path: '/dashboard/job/create',
          },
          {
            title: 'Edit',
            path: '/dashboard/job/edit',
          },
        ],
      },
      {
        title: 'Tour',
        path: '/dashboard/tour',
        icon: icon('ic_tour'),
        children: [
          {
            title: 'List',
            path: '/dashboard/tour',
          },
          {
            title: 'Detail',
            path: '/dashboard/tour/details',
          },
          {
            title: 'Create',
            path: '/dashboard/tour/create',
          },
          {
            title: 'Edit',
            path: '/dashboard/tour/edit',
          },
        ],
      },
      {
        title: 'File Manager',
        path: '/dashboard/file-manager',
        icon: icon('ic_folder'),
      },
      {
        title: 'Mail',
        path: '/dashboard/mail',
        icon: icon('ic_mail'),
      },
      {
        title: 'Chat',
        path: '/dashboard/chat',
        icon: icon('ic_chat'),
      },
      {
        title: 'Calendar',
        path: '/dashboard/calendar',
        icon: icon('ic_calendar'),
      },
      {
        title: 'Kanban',
        path: '/dashboard/kanban',
        icon: icon('ic_kanban'),
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
