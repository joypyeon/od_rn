import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SEMANTIC, PRIMARY, BLACK} from '../styles/colors';
import Tabs from './Tabs';
import History from '../screens/History';
import HistoryDetail from '../screens/HistoryDetail';
import Setting from '../screens/Setting';
import ChatRoom from '../screens/ChatRoom';
import {
  useColorScheme,
  Image,
  Pressable,
  Platform,
  StatusBar,
  Text,
} from 'react-native';
import {TOP_SPACE} from '../styles/common';

export type RootStackParamList = {
  Stack: {
    screen: string;
    params?: {
      name?: string;
      imageUrl?: string;
    };
  };
  Tabs: undefined;
  History: undefined;
  HistoryDetail: undefined;
  Setting: undefined;
  ChatRoom: {
    name: string;
    imageUrl: string;
  };
};

const NativeStack = createNativeStackNavigator<RootStackParamList>();

const Stack = () => {
  const isDark = useColorScheme() === 'dark';
  return (
    <NativeStack.Navigator
      screenOptions={{
        headerBackVisible: true,
        headerTintColor: BLACK['02'],
        headerStyle: {
          backgroundColor: '#FFFFFF',
        },
        headerShadowVisible: false,
        headerTitleStyle: {
          color: BLACK['01'],
        },
        headerTitleAlign: 'center',
        contentStyle: {
          backgroundColor: '#FFFFFF',
        },
      }}>
      <NativeStack.Screen name="Tabs" component={Tabs} />
      <NativeStack.Screen
        name="History"
        component={History}
        options={{
          title: '예약 내역',
          headerShown: true,
        }}
      />
      <NativeStack.Screen
        name="HistoryDetail"
        component={HistoryDetail}
        options={{
          title: '예약 상세 정보',
          headerShown: true,
        }}
      />
      <NativeStack.Screen
        name="Setting"
        component={Setting}
        options={{
          title: '설정',
          headerShown: true,
        }}
      />
      <NativeStack.Screen
        name="ChatRoom"
        component={ChatRoom}
        options={({route}) => ({
          title: route.params?.name || '채팅',
          headerShown: true,
          headerRight: () => (
            <Pressable
              onPress={() => {
                // TODO: 메뉴 액션 구현
                console.log('Menu pressed');
              }}>
              <Text style={{marginRight: 16, fontSize: 24}}>⋮</Text>
            </Pressable>
          ),
        })}
      />
    </NativeStack.Navigator>
  );
};

export default Stack;
