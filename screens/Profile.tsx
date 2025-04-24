import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {CompositeNavigationProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {SEMANTIC} from '../styles/colors';
import {textStyles} from '../styles/typography';
import {RootStackParamList} from '../navigation/Stack';

type TabParamList = {
  홈: undefined;
  스캔: undefined;
  채팅: undefined;
  프로필: undefined;
};

type ProfileScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, '프로필'>,
  NativeStackNavigationProp<RootStackParamList>
>;

const Profile = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View style={styles.container}>
        {/* 상단 프로필 섹션 */}
        <View style={styles.header}>
          <View style={styles.profileSection}>
            <View style={styles.profileImageContainer}>
              <Image
                source={{uri: 'https://via.placeholder.com/100'}}
                style={styles.profileImage}
              />
            </View>
            <Text style={styles.profileName}>사용자 이름</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Setting')}
            style={styles.settingButton}>
            <Image
              source={require('../assets/profile/Setting.png')}
              style={styles.settingIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        {/* 버튼 섹션 */}
        <View style={styles.buttonSection}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => navigation.navigate('Stack', {screen: 'History'})}>
            <Image
              source={require('../assets/profile/Paper.png')}
              style={styles.actionIcon}
            />
            <Text style={styles.actionButtonText}>예약내역</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Image
              source={require('../assets/profile/Bell.png')}
              style={styles.actionIcon}
            />
            <Text style={styles.actionButtonText}>알림센터</Text>
          </TouchableOpacity>
        </View>

        {/* 메뉴 리스트 */}
        <View style={styles.menuList}>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>고객센터</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>자주 하는 질문 (FAQ)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>훈련사 프로필로 전환</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>로그아웃</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImageContainer: {
    width: 40,
    height: 40,
    borderRadius: 25,
    overflow: 'hidden',
    marginRight: 12,
    backgroundColor: 'red',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  profileName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E1E22',
  },
  settingButton: {
    padding: 8,
  },
  settingIcon: {
    width: 24,
    height: 24,
    tintColor: SEMANTIC.text.primary,
  },
  buttonSection: {
    flexDirection: 'row',
    padding: 20,
  },
  actionButton: {
    flex: 1,
    height: 56,
    backgroundColor: '#F2F4F6',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    flexDirection: 'row',
  },
  actionIcon: {
    width: 26,
    height: 26,
    marginRight: 6,
    tintColor: '#1E1E22',
  },
  actionButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1E1E22',
  },
  menuList: {
    paddingTop: 10,
  },
  menuItem: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  menuText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1E1E22',
  },
});

export default Profile;
