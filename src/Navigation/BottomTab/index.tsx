import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import Habits from "../../screens/Home/Habits"
import Dailies from "../../screens/Home/Dailies"
import ToDos from "../../screens/Home/ToDos"
import Rewards from "../../screens/Home/Rewards"

import HeroHeader from '../../components/HeroHeader'

const BottomTab = createBottomTabNavigator();
const TabStack = createStackNavigator();

 function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Habits') {
            return (
              <Ionicons
                name={
                  focused
                    ? 'add-circle'
                    : 'add-circle-outline'
                }
                size={size}
                color={color}
              />
            );
          } else if (route.name === 'Dailies') {
            return (
              <Ionicons
                name={focused ? 'calendar' : 'calendar-sharp'}
                size={size}
                color={color}
              />
            );
          } else if (route.name === 'ToDos') {
            return (
              <Ionicons
                name={focused ? 'checkmark-circle' : 'checkmark-circle-outline'}
                size={size}
                color={color}
              />
            );
          } else if (route.name === 'Rewards') {
            return (
              <Ionicons
                name={focused ? 'ribbon' : 'ribbon-outline'}
                size={size}
                color={color}
              />
            );
          }
        },
      })}
      >
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
        options={{title: "To Do's",}}
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
    <TabStack.Navigator screenOptions={{
      header: (props) => {
        return(
        <>
          <HeroHeader {...props} />
        </>
        )},
    }}>
      <TabStack.Screen name="Tab" component={BottomTabNavigator} />
    </TabStack.Navigator>
  )
}

export default BottomTabStack
