import React from 'react';
import AuthNavigation from './AuthNavigaton'
import { View } from 'react-native'
import {SignedInStack,SignedOutStack} from './navigation'

export default function App() {
  // return (<SignedInStack/>)
  return(<AuthNavigation/>)
}
