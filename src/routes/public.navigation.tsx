import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { About } from '../screens/About';

const { Navigator, Screen } = createNativeStackNavigator();

export function PublicNavigation() {
  return (
    <Navigator
      initialRouteName='Home'
    >
      <Screen
        name='Home'
        component={Home}
        options={{
          headerShown: false
        }}
      />
      <Screen
        name='About'
        component={About}
        options={{
          headerShown: false
        }}
      />
    </Navigator>
  )
}