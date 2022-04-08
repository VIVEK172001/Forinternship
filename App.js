
import React from 'react';
import {
 Text
} from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//bring in all screens
import Home from './screens/Home'
import Explore from './screens/Explore'
import Profile from './screens/Profile'

const Stack  = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Explore">
        <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerStyle:{
            backgroundColor: "#0f4c75"
          },
          title: 'Home',
          headerTitleStyle: {
            textAlign: "center",
            color: "#00b7c2"
          }
        }}
        >

        </Stack.Screen>
        <Stack.Screen
        name="Explore"
        component={Explore}
        options={{
          headerStyle:{
            backgroundColor: "#0f4c75"
          },
          title: 'Explore',
          headerTitleStyle: {
            textAlign: "center",
            color: "#00b7c2"
          }
        }}
        >

        </Stack.Screen>
        <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerStyle:{
            backgroundColor: "#0f4c75"
          },
          title: 'Profile',
          headerTitleStyle: {
            textAlign: "center",
            color: "#00b7c2"
          }
        }}
        >

        </Stack.Screen>
      </Stack.Navigator>
      
    </NavigationContainer>
  )
}

export default App;
