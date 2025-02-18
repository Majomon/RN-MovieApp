import {useFocusEffect} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import React, {useCallback, useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {fetchMovieCast} from '../../../actions/movie/get-cast';
import {fetchMovieDetails} from '../../../actions/movie/get-movie-by-id';
import {fetchMovieSimilar} from '../../../actions/similarMovies/get-movies-similar';
import {Cast} from '../../../core/entities/cast.entity';
import {FullMovie, Movie} from '../../../core/entities/movie.entity';
import {formatDate} from '../../../utils/formatDate';
import {IonIcon} from '../../components';
import {LoadingScreen} from '../../components/LoadingScreen';
import {MovieCast} from '../../components/MovieCast';
import {MovieList} from '../../components/MovieList';
import {RootsStackParams} from '../../navigation/StackNavigator';
import {globalColors} from '../../theme/theme';

interface Props extends StackScreenProps<RootsStackParams, 'Movie'> {}

export const MovieScreen = ({route, navigation}: Props) => {
  /*   const params = useRoute<RouteProp<RootsStackParams, 'Product'>>().params; */
  const [cast, setCast] = useState<Cast[]>([]);
  const [fullMovie, setFullMovie] = useState<FullMovie>();
  const [isFavorite, setIsFavorite] = useState(false);
  const [similar, setSimilar] = useState<Movie[]>([]);

  const [loading, setLoading] = useState(true);

  const {width, height} = Dimensions.get('window');

  useEffect(() => {
    loadMovie();
  }, []);

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      loadMovie();
    }, [route.params.movieId]),
  );

  const loadMovie = async () => {
    const movieDetailPromise = fetchMovieDetails(route.params.movieId);
    const movieCastPromise = fetchMovieCast(route.params.movieId);
    const movieSimilarPromise = fetchMovieSimilar(route.params.movieId);

    const [fullMovie, castMovie, similarMovie] = await Promise.all([
      movieDetailPromise,
      movieCastPromise,
      movieSimilarPromise,
    ]);

    if (fullMovie) {
      setFullMovie(fullMovie);
    }
    if (castMovie) {
      setCast(castMovie);
    }
    if (similarMovie) {
      setSimilar(similarMovie);
    }

    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <LoadingScreen />
        </View>
      ) : (
        <ScrollView
          contentContainerStyle={{paddingBottom: 20}}
          style={{flex: 1, backgroundColor: '#191919'}}>
          {/* Boton regresar */}
          <View style={{width: '100%'}}>
            <View style={styles.buttonBack}>
              <Pressable
                style={{
                  backgroundColor: globalColors.background,
                  borderRadius: 10,
                }}
                onPress={() => navigation.goBack()}>
                <IonIcon name="chevron-back-outline" color="white" size={30} />
              </Pressable>
              <Pressable
                style={{borderRadius: 10}}
                onPress={() => setIsFavorite(!isFavorite)}>
                <IonIcon
                  name="heart"
                  color={isFavorite ? 'red' : 'white'}
                  size={30}
                />
              </Pressable>
            </View>

            <View>
              <Image
                source={{uri: fullMovie?.poster || fullMovie?.backdrop}}
                style={{width, height: height * 0.5}}
                resizeMode="stretch"
              />
              <LinearGradient
                colors={['transparent', 'rgba(23,23,23,0.8)', '#191919']}
                style={{
                  width,
                  height: height * 0.4,
                  position: 'absolute',
                  bottom: 0,
                }}
                start={{x: 0.5, y: 0}}
                end={{x: 0.5, y: 1}}
              />
            </View>
          </View>
          {/* Details */}
          <View style={{marginTop: -(height * 0.09)}}>
            {/* Título */}
            <Text style={styles.title}>{fullMovie?.title}</Text>
            {/* Status, release, runtime */}
            <Text style={styles.subTitle}>
              {fullMovie?.status} • {formatDate(fullMovie?.releaseDate)} •{' '}
              {fullMovie?.runtime} min
            </Text>
            {/* Genres */}
            <View style={styles.genres}>
              {fullMovie?.genres.map((genr, index) => {
                const isLastGenre = index === fullMovie.genres.length - 1;

                return (
                  <Text style={styles.subTitle} key={index}>
                    {genr} {isLastGenre ? null : ' • '}
                  </Text>
                );
              })}
            </View>
            {/* Description */}
            <Text style={styles.description}>{fullMovie?.description}</Text>
            {/* Cast */}
            {cast.length > 0 && <MovieCast cast={cast} />}
            {/* Similar movies */}
            {similar.length > 0 && (
              <MovieList title="Similar" movies={similar} hideSeeAll />
            )}
          </View>
        </ScrollView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  buttonBack: {
    position: 'absolute',
    zIndex: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
  },
  subTitle: {
    color: '#766f6f',
    fontSize: 16,
    fontWeight: 'semibold',
    textAlign: 'center',
    marginVertical: 4,
  },
  genres: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 4,
    gap: 2,
  },
  description: {
    color: '#766f6f',
    marginHorizontal: 10,
    letterSpacing: -0.4,
  },
});
