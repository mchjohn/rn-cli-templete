import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Profile } from '../screens/Profile';

const { Navigator, Screen } = createNativeStackNavigator();

export function PrivateNavigation() {
  return (
    <Navigator
      initialRouteName='Profile'
    >
      <Screen
        name='Profile'
        component={Profile}
        options={{
          headerShown: false
        }}
      />
    </Navigator>
  )
}