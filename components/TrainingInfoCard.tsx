import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {textStyles} from '../styles/typography';
import {SEMANTIC} from '../styles/colors';

interface TrainingInfoCardProps {
  item: {
    id: number;
    trainerName: string;
    dogName: string;
    session: {
      current: number;
      total: number;
    };
    date: string;
  };
  isCompleted: boolean;
}

const TrainingInfoCard = ({item, isCompleted}: TrainingInfoCardProps) => (
  <View style={styles.card}>
    <View style={styles.cardContent}>
      <View style={styles.cardRow}>
        <Text style={styles.cardLabel}>훈련사</Text>
        <Text style={styles.trainerName}>{item.trainerName}</Text>
      </View>
      <View style={styles.cardRow}>
        <Text style={styles.cardLabel}>강아지</Text>
        <Text style={styles.dogName}>{item.dogName}</Text>
      </View>
      <View style={styles.cardRow}>
        <Text style={styles.cardLabel}>훈련회차</Text>
        <Text style={styles.sessionInfo}>
          {item.session.current}회차 / 총 {item.session.total}회
        </Text>
      </View>
      <View style={styles.cardRow}>
        <Text style={styles.cardLabel}>훈련일시</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
    </View>
    {isCompleted && (
      <TouchableOpacity style={styles.reviewButton} activeOpacity={1}>
        <Text style={styles.reviewButtonText}>후기 작성</Text>
      </TouchableOpacity>
    )}
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: SEMANTIC.background.primary,
    marginBottom: 5,
  },
  cardContent: {
    gap: 8,
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardLabel: {
    ...textStyles.label14,
    width: 60,
    marginRight: 12,
    color: SEMANTIC.text.secondary,
  },
  trainerName: {
    ...textStyles.body14,
    color: SEMANTIC.text.primary,
  },
  dogName: {
    ...textStyles.body14,
    color: SEMANTIC.text.primary,
  },
  sessionInfo: {
    ...textStyles.body14,
    color: SEMANTIC.text.primary,
  },
  date: {
    ...textStyles.body14,
    color: SEMANTIC.text.primary,
  },
  reviewButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#9C9C9C',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  reviewButtonText: {
    ...textStyles.label14,
    color: SEMANTIC.text.primary,
  },
});

export default TrainingInfoCard;
