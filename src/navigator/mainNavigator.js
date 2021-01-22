import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Feed4195409Navigator from '../features/Feed4195409/navigator';
import Maps6195407Navigator from '../features/Maps6195407/navigator';
import UserProfile11195403Navigator from '../features/UserProfile11195403/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Feed4195409: { screen: Feed4195409Navigator },
Maps6195407: { screen: Maps6195407Navigator },
UserProfile11195403: { screen: UserProfile11195403Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
