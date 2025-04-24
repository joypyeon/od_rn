import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {textStyles} from '../styles/typography';
import {SEMANTIC} from '../styles/colors';
import {TOP_SPACE} from '../styles/common';

interface InfoRowProps {
  label: string;
  value: string;
}

const InfoRow = ({label, value}: InfoRowProps) => (
  <View style={styles.infoRow}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

const HistoryDetail = () => {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          {/* 예약자 정보 */}
          <View style={styles.userInfo}>
            <View style={styles.userInfoLeft}>
              <Text style={styles.userName}>박지원</Text>
              <Image
                source={require('../assets/tab/Profile.png')}
                style={styles.userIcon}
                resizeMode="contain"
              />
            </View>
            <TouchableOpacity style={styles.inquiryButton}>
              <Text style={styles.inquiryButtonText}>문의하기</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            style={styles.content}
            showsVerticalScrollIndicator={false}>
            {/* 구분선 */}
            <View style={styles.divider} />
            {/* 정보 박스 */}
            <View style={styles.infoBox}>
              <InfoRow label="예약 일시" value="2024.04.24 (토)" />
              <InfoRow label="훈련 일시" value="2024.04.31 (토)" />
              <InfoRow
                label="훈련 위치"
                value="고양시 일산서구 반려동물 공원"
              />
              <InfoRow label="훈련 이름" value="퍼피 트레이닝" />
              <InfoRow label="훈련 상세" value="앉아, 기다려" />
              <InfoRow label="총 회차" value="10회" />
              <InfoRow label="최종 진행 회차" value="1회" />
              <InfoRow label="회당 훈련비" value="100,000" />
            </View>

            {/* 후기 작성 버튼 */}
            <TouchableOpacity style={styles.reviewButton}>
              <Text style={styles.reviewButtonText}>후기 작성</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  userInfoLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userIcon: {
    width: 24,
    height: 24,
    marginLeft: 5,
    tintColor: SEMANTIC.text.primary,
  },
  userName: {
    ...textStyles.subtitle16,
    color: SEMANTIC.text.primary,
  },
  inquiryButton: {
    width: 80,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: SEMANTIC.text.primary,
    alignItems: 'center',
  },
  inquiryButtonText: {
    ...textStyles.subtitle14,
    color: SEMANTIC.text.primary,
  },
  content: {
    flex: 1,
  },
  infoBox: {
    padding: 16,
    gap: 16,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    ...textStyles.body14,
    color: SEMANTIC.text.secondary,
    flex: 1,
  },
  value: {
    ...textStyles.body14,
    color: '4D4D4D',
    flex: 2,
    textAlign: 'left',
    fontWeight: '500',
  },
  reviewButton: {
    marginHorizontal: 16,
    marginVertical: 24,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: SEMANTIC.text.primary,
    alignItems: 'center',
  },
  reviewButtonText: {
    ...textStyles.subtitle14,
    color: SEMANTIC.text.primary,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 120,
    width: '80%',
    maxWidth: 300,
    borderWidth: 1,
    borderColor: '#9C9C9C',
  },
  modalHeader: {
    borderBottomWidth: 1,
    borderBottomColor: '#9C9C9C',
    paddingBottom: 10,
    marginBottom: 10,
  },
  modalBody: {
    borderBottomWidth: 1,
    borderBottomColor: '#9C9C9C',
    paddingBottom: 10,
    marginBottom: 10,
  },
  modalFooter: {
    paddingTop: 10,
  },
  divider: {
    width: '90%',
    height: 1,
    backgroundColor: '#727272',
    alignSelf: 'center',
    marginVertical: 16,
  },
});

export default HistoryDetail;
