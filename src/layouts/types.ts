import React from 'react';

export type AsideGroupType = {
  title?: string;
  routes: Array<AsideRouteType>;
};

export type AsideRouteType = {
  title: string;
  path: string;
  icon?: React.ReactNode;
  children?: Array<AsideRouteType>;
};
