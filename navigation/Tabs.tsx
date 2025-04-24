import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Scan from '../screens/Scan';
import Chat from '../screens/Chat';
import Profile from '../screens/Profile';
import {useColorScheme, Dimensions, View, Pressable} from 'react-native';
import {Image} from 'react-native';
import {SEMANTIC, PRIMARY, BLACK} from '../styles/colors';
import {textStyles} from '../styles/typography';

const Tab = createBottomTabNavigator();
const {height: SCREEN_HEIGHT} = Dimensions.get('window');
const TOP_SPACE = SCREEN_HEIGHT / 15;

// 스크린을 감싸는 컨테이너 컴포넌트
const withTopSpace = (Component: React.ComponentType) => {
  return () => (
    <View style={{flex: 1, paddingTop: TOP_SPACE, backgroundColor: '#FFFFFF'}}>
      <Component />
    </View>
  );
};

const Tabs = () => {
  const isDark = useColorScheme() === 'dark';
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: SEMANTIC.background.primary,
          height: 60,
          paddingBottom: 10,
          borderTopWidth: 1,
          borderTopColor: SEMANTIC.border.default,
          paddingTop: 5,
        },
        tabBarActiveTintColor: BLACK['01'],
        tabBarInactiveTintColor: SEMANTIC.text.tertiary,
        headerStyle: {
          backgroundColor: SEMANTIC.background.primary,
        },
        headerTitleStyle: {
          ...textStyles.heading18,
          color: SEMANTIC.text.primary,
        },
        tabBarLabelStyle: {
          display: 'none',
        },
        tabBarButton: props => (
          <Pressable
            {...props}
            style={[
              {
                flex: 1,
                backgroundColor: props.accessibilityState?.selected
                  ? BLACK['01']
                  : 'transparent',
              },
              props.style,
            ]}
            android_disableSound={true}
            android_ripple={null}
          />
        ),
      }}>
      <Tab.Screen
        name="홈"
        component={withTopSpace(Home)}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Image
              source={require('../assets/tab/Home.png')}
              style={{width: 40, height: 40, tintColor: color}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="스캔"
        component={withTopSpace(Scan)}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Image
              source={require('../assets/tab/Scan.png')}
              style={{width: 40, height: 40, tintColor: color}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="채팅"
        component={withTopSpace(Chat)}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Image
              source={require('../assets/tab/Chat.png')}
              style={{width: 40, height: 40, tintColor: color}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="프로필"
        component={withTopSpace(Profile)}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Image
              source={require('../assets/tab/Profile.png')}
              style={{width: 40, height: 40, tintColor: color}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
