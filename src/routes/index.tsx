import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { PublicNavigation } from './public.navigation';
import { PrivateNavigation } from './private.navigation';

export function Navigation() {
  const user = { name: 'Michel John' }

  function getNavigation() {
    if(user.name) {
      return <PublicNavigation />
    }

    return <PrivateNavigation />
  }

  return (
    <NavigationContainer>{getNavigation()}</NavigationContainer>
  )
}