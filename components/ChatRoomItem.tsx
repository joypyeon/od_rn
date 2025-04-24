import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  Image,
  TouchableOpacity,
} from 'react-native';
import {BLACK, RED} from '../styles/colors';
import {textStyles} from '../styles/typography';

interface ChatRoomItemProps {
  imageUrl: string;
  name: string;
  lastMessage: string;
  time: string;
  unreadCount?: number;
  onPress?: () => void;
}

const ChatRoomItem = ({
  imageUrl,
  name,
  lastMessage,
  time,
  unreadCount,
  onPress,
}: ChatRoomItemProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}>
      <View style={styles.imageContainer}>
        <Image source={{uri: imageUrl}} style={styles.image} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.message} numberOfLines={1}>
          {lastMessage}
        </Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.time}>{time}</Text>
        {unreadCount && unreadCount > 0 && (
          <View style={styles.unreadContainer}>
            <Text style={styles.unreadCount}>{unreadCount}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F2F4F6',
  },
  imageContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E5E5EA',
    overflow: 'hidden',
    marginRight: 12,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    flex: 1,
    marginRight: 12,
  },
  name: {
    ...textStyles.subtitle20,
    color: BLACK['01'],
    marginBottom: 4,
  },
  message: {
    ...textStyles.body13,
    color: '#797c7b',
  },
  rightContainer: {
    alignItems: 'flex-end',
  },
  time: {
    ...textStyles.body13,
    color: '#797c7b',
    marginBottom: 4,
  },
  unreadContainer: {
    backgroundColor: RED['04'],
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 6,
  },
  unreadCount: {
    ...textStyles.body13,
    color: '#FFFFFF',
  },
});

export default ChatRoomItem;
