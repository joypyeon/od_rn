import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Image,
  ImageStyle,
  TextStyle,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {textStyles} from '../styles/typography';
import {SEMANTIC} from '../styles/colors';
import TrainingInfoCard from '../components/TrainingInfoCard';
import CustomModal from '../components/CustomModal';

type RootStackParamList = {
  '예약 내역': undefined;
  HistoryDetail: undefined;
};

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  '예약 내역'
>;

// 임시 데이터
const MOCK_DATA = {
  completed: [
    {
      id: 1,
      trainerName: '김철수 훈련사',
      dogName: '멍멍이',
      session: {current: 1, total: 10},
      date: '2024.04.24',
    },
  ],
  upcoming: [
    {
      id: 2,
      trainerName: '이영희 훈련사',
      dogName: '댕댕이',
      session: {current: 2, total: 10},
      date: '2024.04.26',
    },
    {
      id: 3,
      trainerName: '박지민 훈련사',
      dogName: '바둑이',
      session: {current: 1, total: 8},
      date: '2024.04.28',
    },
    {
      id: 4,
      trainerName: '최민수 훈련사',
      dogName: '초코',
      session: {current: 1, total: 12},
      date: '2024.04.30',
    },
  ],
};

const History = () => {
  const navigation = useNavigation<NavigationProp>();
  const [currentMonth, setCurrentMonth] = useState('2024.04');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handlePrevMonth = () => {
    // 이전 달 로직 구현
  };

  const handleNextMonth = () => {
    // 다음 달 로직 구현
  };

  const handleKebabMenuPress = () => {
    setIsModalVisible(true);
  };

  const handleCustomerService = () => {
    console.log('고객센터에 문의하기');
    setIsModalVisible(false);
  };

  const handleDelete = () => {
    console.log('훈련 내역 삭제하기');
    setIsModalVisible(false);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View style={styles.container}>
        {/* 월 선택 네비게이션 */}
        <View style={styles.monthNav}>
          <TouchableOpacity
            style={styles.arrowButton}
            onPress={handlePrevMonth}
            activeOpacity={1}>
            <Image
              source={require('../assets/profile/left.png')}
              style={styles.arrowIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text style={styles.monthText}>{currentMonth}</Text>
          <TouchableOpacity
            style={styles.arrowButton}
            onPress={handleNextMonth}
            activeOpacity={1}>
            <Image
              source={require('../assets/profile/right.png')}
              style={styles.arrowIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.content}>
          {/* 예약 완료 섹션 */}
          {MOCK_DATA.completed.length > 0 && (
            <TouchableOpacity
              style={styles.section}
              activeOpacity={0.7}
              onPress={() => navigation.navigate('HistoryDetail')}>
              <View style={styles.sectionHeader}>
                <View style={styles.titleContainer}>
                  <Text style={[styles.sectionTitle, styles.completedTitle]}>
                    예약 완료
                  </Text>
                  <Image
                    source={require('../assets/profile/right.png')}
                    style={[
                      styles.sectionArrow,
                      {tintColor: SEMANTIC.text.primary},
                    ]}
                    resizeMode="contain"
                  />
                </View>
                <TouchableOpacity
                  activeOpacity={0.7}
                  hitSlop={10}
                  onPress={handleKebabMenuPress}>
                  <Image
                    source={require('../assets/profile/Kebab_menu.png')}
                    style={styles.kebabMenu}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
              {MOCK_DATA.completed.map(item => (
                <TrainingInfoCard
                  key={item.id}
                  item={item}
                  isCompleted={true}
                />
              ))}
            </TouchableOpacity>
          )}

          {/* 훈련 예정 섹션 */}
          {MOCK_DATA.upcoming.length > 0 &&
            MOCK_DATA.upcoming.map((item, index) => (
              <TouchableOpacity
                key={item.id}
                style={styles.section}
                activeOpacity={0.7}
                onPress={() => navigation.navigate('HistoryDetail')}>
                <View style={styles.sectionHeader}>
                  <View style={styles.titleContainer}>
                    <Text style={styles.sectionTitle}>훈련 예정</Text>
                    <Image
                      source={require('../assets/profile/right.png')}
                      style={[
                        styles.sectionArrow,
                        {tintColor: SEMANTIC.text.secondary},
                      ]}
                      resizeMode="contain"
                    />
                  </View>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    hitSlop={10}
                    onPress={handleKebabMenuPress}>
                    <Image
                      source={require('../assets/profile/Kebab_menu.png')}
                      style={styles.kebabMenu}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                </View>
                <TrainingInfoCard
                  key={item.id}
                  item={item}
                  isCompleted={false}
                />
              </TouchableOpacity>
            ))}
        </ScrollView>
      </View>
      <CustomModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onCustomerService={handleCustomerService}
        onDelete={handleDelete}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  monthNav: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  arrowButton: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowIcon: {
    width: 14,
    height: 14,
    tintColor: SEMANTIC.text.primary,
  } as ImageStyle,
  monthText: {
    ...textStyles.subtitle16,
    color: SEMANTIC.text.primary,
  } as TextStyle,
  content: {
    flex: 1,
    backgroundColor: SEMANTIC.background.secondary,
  },
  section: {
    backgroundColor: SEMANTIC.background.primary,
    marginBottom: 10,
    padding: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  sectionTitle: {
    ...textStyles.heading18,
    color: SEMANTIC.text.secondary,
  } as TextStyle,
  sectionArrow: {
    width: 14,
    height: 14,
    tintColor: SEMANTIC.text.primary,
  } as ImageStyle,
  kebabMenu: {
    width: 24,
    height: 24,
    tintColor: SEMANTIC.text.primary,
  } as ImageStyle,
  completedTitle: {
    ...textStyles.heading18,
    color: SEMANTIC.text.primary,
  } as TextStyle,
});

export default History;
