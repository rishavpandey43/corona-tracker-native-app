import React from 'react';
import {Icon} from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/primary/Home';
import CountryScreen from '../screens/primary/Country';
import NewsScreen from '../screens/primary/News';
import GuideLineScreen from '../screens/primary/GuideLine';
import HelpScreen from '../screens/primary/Help';

import variables from '../styles/variables';

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            let iconName;

            switch (route.name) {
              case 'home-screen':
                iconName = 'globe-asia';
                break;
              case 'country-screen':
                iconName = 'flag';
                break;
              case 'news-screen':
                iconName = 'newspaper';
                break;
              case 'guidelines-screen':
                iconName = 'info';
                break;
              case 'help-screen':
                iconName = 'phone';
                break;
              default:
                break;
            }
            return (
              <Icon
                name={iconName}
                size={size}
                type="font-awesome-5"
                color={color}
              />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: variables.mainThemeColor,
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen
          name="home-screen"
          component={HomeScreen}
          options={() => ({
            title: 'World',
          })}
        />
        <Tab.Screen
          name="country-screen"
          component={CountryScreen}
          options={() => ({
            title: 'Country',
          })}
        />
        <Tab.Screen
          name="news-screen"
          component={NewsScreen}
          options={() => ({
            title: 'News',
          })}
        />
        <Tab.Screen
          name="guidelines-screen"
          component={GuideLineScreen}
          options={() => ({
            title: 'Guidelines',
          })}
        />
        <Tab.Screen
          name="help-screen"
          component={HelpScreen}
          options={() => ({
            title: 'Help',
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
