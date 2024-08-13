import {images} from '../constant';
import NavigationStrings from '../navigation/NavigationStrings';
import DashboardStack from '../navigation/Tabs/DashboardStack';
import VisitsStack from '../navigation/Tabs/VisitsStack';
import ProfileStack from '../navigation/Tabs/ProfileStack';
import {ITabItem, IUserRoles} from './types';

//  user roles
export const userRoles: Array<IUserRoles> = [
  {
    id: '1',
    label: 'Admin',
    value: 'admin',
  },
  {
    id: '2',
    label: 'Operator',
    value: 'operator',
  },
];

// bottom navigation array
export const tabScreens: Array<ITabItem> = [
  {
    id: '1',
    name: NavigationStrings.DASHBOARD_STACK,
    component: DashboardStack,
    title: 'Dashboard',
    activeIcon: images.logo,
    inActiveIcon: images.logo,
  },
  {
    id: '2',
    name: NavigationStrings.VISITS_STACK,
    component: VisitsStack,
    title: 'Visits',
    activeIcon: images.logo,
    inActiveIcon: images.logo,
  },
  {
    id: '3',
    name: NavigationStrings.PROFILE_STACK,
    component: ProfileStack,
    title: 'Profile',
    activeIcon: images.logo,
    inActiveIcon: images.logo,
  },
];
