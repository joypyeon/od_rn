import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  Animated,
} from 'react-native';
import {SEMANTIC, BLACK} from '../styles/colors';
import {textStyles} from '../styles/typography';

interface NotificationItemProps {
  title: string;
  description?: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
}

interface Styles {
  container: ViewStyle;
  section: ViewStyle;
  sectionTitle: TextStyle;
  sectionContent: ViewStyle;
  notificationItem: ViewStyle;
  notificationInfo: ViewStyle;
  itemTitle: TextStyle;
  description: TextStyle;
  accountButton: ViewStyle;
  accountButtonText: TextStyle;
  switchContainer: ViewStyle;
  switchThumb: ViewStyle;
}

interface CustomSwitchProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
}

const CustomSwitch = ({value, onValueChange}: CustomSwitchProps) => {
  const [animation] = useState(new Animated.Value(value ? 1 : 0));

  const toggleSwitch = () => {
    const toValue = !value;
    Animated.spring(animation, {
      toValue: toValue ? 1 : 0,
      useNativeDriver: true,
    }).start();
    onValueChange(toValue);
  };

  const translateX = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 20],
  });

  return (
    <TouchableOpacity
      onPress={toggleSwitch}
      style={[
        styles.switchContainer,
        {backgroundColor: value ? '#6B6DF8' : '#C9C9C9'},
      ]}>
      <Animated.View
        style={[
          styles.switchThumb,
          {
            transform: [{translateX}],
          },
        ]}
      />
    </TouchableOpacity>
  );
};

const NotificationItem = ({
  title,
  description,
  value,
  onValueChange,
}: NotificationItemProps) => (
  <View style={styles.notificationItem}>
    <View style={styles.notificationInfo}>
      <Text style={styles.itemTitle}>{title}</Text>
      {description && <Text style={styles.description}>{description}</Text>}
    </View>
    <CustomSwitch value={value} onValueChange={onValueChange} />
  </View>
);

const Setting = () => {
  const [chatNotification, setChatNotification] = useState(false);
  const [matchNotification, setMatchNotification] = useState(false);
  const [eventNotification, setEventNotification] = useState(false);

  return (
    <View style={styles.container}>
      {/* 알림 섹션 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>알림</Text>
        <View style={styles.sectionContent}>
          <NotificationItem
            title="채팅 알림"
            description="메시지가 왔을 때"
            value={chatNotification}
            onValueChange={setChatNotification}
          />
          <NotificationItem
            title="매칭 상태 알림"
            description="예약 상태가 변경됐을 때"
            value={matchNotification}
            onValueChange={setMatchNotification}
          />
          <NotificationItem
            title="혜택 및 이벤트 알림"
            value={eventNotification}
            onValueChange={setEventNotification}
          />
        </View>
      </View>

      {/* 계정 설정 섹션 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>계정 설정</Text>
        <View style={styles.sectionContent}>
          <TouchableOpacity style={styles.accountButton}>
            <Text style={styles.accountButtonText}>회원 정보 변경</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.accountButton}>
            <Text style={styles.accountButtonText}>로그아웃</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
  },
  section: {
    marginTop: 24,
  },
  sectionTitle: {
    ...textStyles.heading20,
    color: BLACK['01'],
    marginBottom: 8,
  },
  sectionContent: {
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
  },
  notificationItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  notificationInfo: {
    flex: 1,
  },
  itemTitle: {
    ...textStyles.subtitle16,
    color: BLACK['01'],
    marginBottom: 4,
  },
  description: {
    ...textStyles.body16,
    color: BLACK['01'],
  },
  accountButton: {
    paddingVertical: 16,
  },
  accountButtonText: {
    ...textStyles.body16,
    color: BLACK['01'],
  },
  switchContainer: {
    width: 51,
    height: 31,
    borderRadius: 20,
    justifyContent: 'center',
    paddingHorizontal: 2,
  },
  switchThumb: {
    width: 27,
    height: 27,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
  },
});

export default Setting;
