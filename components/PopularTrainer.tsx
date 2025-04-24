import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {SEMANTIC} from '../styles/colors';
import {textStyles} from '../styles/typography';

const PopularTrainer = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: 'https://picsum.photos/200/200?random=1'}}
        style={styles.image}
      />
      <Text style={styles.name}>김훈련사</Text>
      <Text style={styles.description} numberOfLines={2}>
        설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
        설명 설명 설명 설명
      </Text>
      <View style={styles.skillsContainer}>
        <Text style={styles.skill}>기본 훈련</Text>
        <Text style={styles.skill}>문제 행동 교정</Text>
      </View>
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>☆</Text>
        <Text style={styles.ratingText}>4/5 (100)</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 136,
    height: 200,
    marginRight: 15,
    backgroundColor: SEMANTIC.background.primary,
  },
  image: {
    width: '100%',
    height: 86,
    borderRadius: 5,
    marginBottom: 5,
  },
  name: {
    ...textStyles.subtitle14,
    color: SEMANTIC.text.primary,
    marginBottom: 5,
  },
  description: {
    ...textStyles.label13,
    color: SEMANTIC.text.tertiary,
    marginBottom: 5,
  },
  skillsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  skill: {
    ...textStyles.overline10,
    color: SEMANTIC.text.tertiary,
    marginRight: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    ...textStyles.subtitle16,
    color: '#9C9C9C',
    marginRight: 5,
  },
  ratingText: {
    ...textStyles.overline10,
    color: '#9C9C9C',
  },
});

export default PopularTrainer;
