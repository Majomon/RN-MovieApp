import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  fetchTopRatedMovies,
  fetchTrendingMovies,
  fetchUpcomingMovies,
} from '../../../actions/movies/movieDB';
import {Movie} from '../../../core/entities/movie.entity';
import {IonIcon} from '../../components';
import {LoadingScreen} from '../../components/LoadingScreen';
import {MovieCarousel} from '../../components/MovieCarousel';
import {MovieList} from '../../components/MovieList';
import {RootsStackParams} from '../../navigation/StackNavigator';
import {globalColors} from '../../theme/theme';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootsStackParams>>();

  const [trending, setTrending] = useState<Movie[]>([]);

  const [upcoming, setUpcoming] = useState<Movie[]>([]);

  const [topRated, setTopRated] = useState<Movie[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const movieTrendingPromise = fetchTrendingMovies();
    const movieUpcomingPromise = fetchUpcomingMovies();
    const movieTopRatedPromise = fetchTopRatedMovies();

    const [trendingMovies, upcomingMovies, topRatedMovies] = await Promise.all([
      movieTrendingPromise,
      movieUpcomingPromise,
      movieTopRatedPromise,
    ]);

    setTrending(trendingMovies);
    setUpcoming(upcomingMovies);
    setTopRated(topRatedMovies);

    setLoading(false);
  };

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
      {loading ? (
        <LoadingScreen />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 10}}>
          {/* Movies tendencia */}
          {trending && trending.length > 0 && (
            <MovieCarousel movies={trending} />
          )}
          {/* Movies list */}
          <MovieList title="Upcoming" movies={upcoming} />
          {/* Movie Ranking */}
          <MovieList title="Top Ranking" movies={topRated} />
        </ScrollView>
      )}
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
