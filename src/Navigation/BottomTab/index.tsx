import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Habits from "../../screens/Home/Habits"
import Dailies from "../../screens/Home/Dailies"
import ToDos from "../../screens/Home/ToDos"
import Rewards from "../../screens/Home/Rewards"

const BottomTab = createBottomTabNavigator();
const TabStack = createStackNavigator();

 function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="TabOne">
      <BottomTab.Screen
        name="Habits"
        component={Habits}
      />
      <BottomTab.Screen
        name="Dailies"
        component={Dailies}
      />
      <BottomTab.Screen
        name="ToDos"
        component={ToDos}
      />
      <BottomTab.Screen
        name="Rewards"
        component={Rewards}
      />
    </BottomTab.Navigator>
  );
}

const BottomTabStack = () => {
  return(
    <TabStack.Navigator>
      <TabStack.Screen name="Tab" component={BottomTabNavigator} />
    </TabStack.Navigator>
  )
}

export default BottomTabStack
