import React from 'react';

import {enableScreens} from 'react-native-screens';

import {useTheme} from '@react-navigation/native';

import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {Avatar, AddRepositoryIcon} from './styles';

enableScreens();

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ExploreIcon, HomeIcon, NotificationIcon} from './styles';
import Home from '../pages/Home';
import Repositories from '../pages/Repositories';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeRoutes}
        options={{
          tabBarIcon: ({color, size}) => <HomeIcon color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Notifications"
        options={{
          tabBarIcon: ({color, size}) => (
            <NotificationIcon color={color} size={size} />
          ),
        }}
        component={HomeRoutes}
      />
      <Tab.Screen
        name="Explore"
        options={{
          tabBarIcon: ({color, size}) => (
            <ExploreIcon color={color} size={size} />
          ),
        }}
        component={HomeRoutes}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();
function HomeRoutes() {
  const {colors} = useTheme();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerLargeTitle: true,
          headerTranslucent: true,
          headerLeft: () => <Avatar />,
          headerRight: () => <AddRepositoryIcon color={colors.primary} />,
        }}
      />
      <Stack.Screen
        name="Repositories"
        component={Repositories}
        options={{
          headerLargeTitle: true,
          headerTranslucent: true,
        }}
      />
    </Stack.Navigator>
  );
}
