import React from 'react';
import {View, StyleSheet, StatusBar, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {CompositeNavigationProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import ChatRoomItem from '../components/ChatRoomItem';
import {RootStackParamList} from '../navigation/Stack';

type TabParamList = {
  홈: undefined;
  스캔: undefined;
  채팅: undefined;
  프로필: undefined;
};

type ChatScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, '채팅'>,
  NativeStackNavigationProp<RootStackParamList>
>;

interface ChatRoom {
  id: string;
  name: string;
  imageUrl: string;
  lastMessage: string;
  time: string;
  unreadCount: number;
}

const Chat = () => {
  const navigation = useNavigation<ChatScreenNavigationProp>();

  const chatRooms = [
    {
      id: '1',
      imageUrl: 'https://example.com/image1.jpg',
      name: '김트레이너',
      lastMessage: '안녕하세요! 운동 일정 확인해주세요.',
      time: '10:30',
      unreadCount: 3,
    },
    {
      id: '2',
      imageUrl: 'https://example.com/image2.jpg',
      name: '박트레이너',
      lastMessage: '내일 PT 시간 변경 가능할까요?',
      time: '09:15',
      unreadCount: 0,
    },
    // 더 많은 채팅방 데이터 추가 가능
  ];

  const handleChatRoomPress = (chatRoom: ChatRoom) => {
    console.log('Navigating to ChatRoom with:', chatRoom);
    navigation.navigate('Stack', {
      screen: 'ChatRoom',
      params: {
        name: chatRoom.name,
        imageUrl: chatRoom.imageUrl,
      },
    });
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View style={styles.container}>
        <FlatList
          data={chatRooms}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ChatRoomItem
              imageUrl={item.imageUrl}
              name={item.name}
              lastMessage={item.lastMessage}
              time={item.time}
              unreadCount={item.unreadCount}
              onPress={() => handleChatRoomPress(item)}
            />
          )}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Chat;
