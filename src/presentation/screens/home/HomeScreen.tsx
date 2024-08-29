import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import {IonIcon} from '../../components';
import {MovieCarousel} from '../../components/MovieCarousel';
import {MovieList} from '../../components/MovieList';
import {PropData} from '../../interfaces/Interfaces';
import {RootsStackParams} from '../../navigation/StackNavigator';
import {globalColors} from '../../theme/theme';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootsStackParams>>();

  const [trending, setTrending] = useState<PropData[]>([
    {
      id: 1,
      title: 'Title1',
      description: 'Algo-1',
      img: require('../../../assets/casafantasmas.webp'),
    },
    {
      id: 2,
      title: 'Title2',
      description: 'Algo-2',
      img: require('../../../assets/chivas-marvel.webp'),
    },
    {
      id: 3,
      title: 'Title3',
      description: 'Algo-3',
      img: require('../../../assets/deadpool.webp'),
    },
  ]);

  const [upcoming, setUpcoming] = useState<PropData[]>([
    {
      id: 1,
      title: 'Title1asdasdasdasd',
      description: 'Algo-1',
      img: require('../../../assets/casafantasmas.webp'),
    },
    {
      id: 2,
      title: 'Title2',
      description: 'Algo-2',
      img: require('../../../assets/chivas-marvel.webp'),
    },
    {
      id: 3,
      title: 'Title3',
      description: 'Algo-3',
      img: require('../../../assets/deadpool.webp'),
    },
    {
      id: 4,
      title: 'Title4',
      description: 'Algo-4',
      img: require('../../../assets/starwars.webp'),
    },
  ]);

  const [topRated, setTopRated] = useState<PropData[]>([
    {
      id: 1,
      title: 'Title1',
      description: 'Algo-1',
      img: require('../../../assets/casafantasmas.webp'),
    },
    {
      id: 2,
      title: 'Title2',
      description: 'Algo-2',
      img: require('../../../assets/chivas-marvel.webp'),
    },
    {
      id: 3,
      title: 'Title3',
      description: 'Algo-3',
      img: require('../../../assets/deadpool.webp'),
    },
  ]);

  return (
    <View style={styles.container}>
      {/* Search y Logo */}
      <View style={{marginVertical: 10}}>
        <View style={styles.menuTop}>
          <IonIcon name="menu-outline" size={30} color="white" />
          <Text style={styles.text}>
            <Text style={{color: globalColors.text}}>M</Text>ovies
          </Text>
          <Pressable onPress={() => navigation.navigate('Search')}>
            <IonIcon name="search-outline" size={30} color="white" />
          </Pressable>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 10}}>
        {/* Movies tendencia */}
        <MovieCarousel data={trending} />
        {/* Movies list */}
        <MovieList title="Upcoming" data={upcoming} />
        {/* Movie Ranking */}
        <MovieList title="Top Ranking" data={topRated} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
  },
  menuTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
