export type SidebarGroupType = {
  title?: string;
  routes: Array<SidebarRouteType>;
};

export type SidebarRouteType = {
  title: string;
  path: string;
  icon?: React.ReactNode;
  children?: Array<SidebarRouteType>;
};
