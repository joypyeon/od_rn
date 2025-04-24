import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import PopularTrainer from '../components/PopularTrainer';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type RootStackParamList = {
  TrainerList: undefined;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const Home = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    'https://picsum.photos/400/100?random=1',
    'https://picsum.photos/400/100?random=2',
    'https://picsum.photos/400/100?random=3',
    'https://picsum.photos/400/100?random=4',
    'https://picsum.photos/400/100?random=5',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <ScrollView style={styles.container}>
        <View style={styles.slideshow}>
          <Image
            source={{uri: slides[currentSlide]}}
            style={styles.slideImage}
            resizeMode="cover"
          />
          <View style={styles.indicatorContainer}>
            <Text style={styles.indicatorText}>
              {currentSlide + 1}/{slides.length}
            </Text>
          </View>
        </View>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>지금 인기 있는 훈련사</Text>
            <TouchableOpacity
              style={styles.viewAllButton}
              onPress={() => navigation.navigate('TrainerList')}>
              <Text style={styles.viewAllText}>전체보기</Text>
              <Text style={styles.arrow}>›</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <PopularTrainer />
            <PopularTrainer />
            <PopularTrainer />
          </ScrollView>
        </View>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>지금 인기 있는 훈련사</Text>
            <TouchableOpacity
              style={styles.viewAllButton}
              onPress={() => navigation.navigate('TrainerList')}>
              <Text style={styles.viewAllText}>전체보기</Text>
              <Text style={styles.arrow}>›</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <PopularTrainer />
            <PopularTrainer />
            <PopularTrainer />
          </ScrollView>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slideshow: {
    height: 160,
    width: SCREEN_WIDTH,
  },
  slideImage: {
    width: '100%',
    height: '100%',
  },
  indicatorContainer: {
    position: 'absolute',
    bottom: 10,
    right: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    paddingHorizontal: 15,
    paddingVertical: 3,
    borderRadius: 20,
  },
  indicatorText: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
  },
  section: {
    paddingLeft: 20,
    paddingTop: 30,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    paddingRight: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewAllText: {
    fontSize: 13,
    color: '#4D4D4D',
    marginRight: 5,
    fontWeight: '500',
  },
  arrow: {
    fontSize: 30,
    color: '#4D4D4D',
    fontWeight: '200',
    lineHeight: 20,
  },
});

export default Home;
