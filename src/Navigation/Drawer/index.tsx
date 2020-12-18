import { createDrawerNavigator } from "@react-navigation/drawer";
import * as React from "react";

import Home from "../BottomTab";
import Profile from "../../screens/Profile";

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
};

export default DrawerStack;
