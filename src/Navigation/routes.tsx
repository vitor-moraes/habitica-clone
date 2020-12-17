import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import NotFound from '../screens/NotFound';
import BottomTab from './BottomTab'

const Stack = createStackNavigator();

function RootNavigator() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Root" component={BottomTab} />
        <Stack.Screen name="NotFound" component={NotFound} options={{ title: 'Oops!' }} />
      </Stack.Navigator>
    );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}



