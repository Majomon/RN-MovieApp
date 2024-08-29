import {StackScreenProps} from '@react-navigation/stack';
import React, {useState} from 'react';
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
import {IonIcon} from '../../components';
import {RootsStackParams} from '../../navigation/StackNavigator';
import {globalColors} from '../../theme/theme';
import {Cast} from '../../components/Cast';
import {Person, PropData} from '../../interfaces/Interfaces';
import {MovieList} from '../../components/MovieList';

interface Props extends StackScreenProps<RootsStackParams, 'Movie'> {}

export const MovieScreen = ({route, navigation}: Props) => {
  /*   const params = useRoute<RouteProp<RootsStackParams, 'Product'>>().params; */
  const [isFavorite, setIsFavorite] = useState(false);
  const [cast, setCast] = useState<Person[]>([
    {id: 1, name: 'Keanu Reeves', character: 'John Wick'},
    {id: 2, name: 'Laurence Fishburne', character: 'Bowery King'},
    {id: 3, name: 'Halle Berry', character: 'Sofia'},
    {id: 4, name: 'Ian McShane', character: 'Winston'},
    {id: 5, name: 'Ruby Rose', character: 'Ares'},
  ]);

  const [similarMovies, setSimilarMovies] = useState<PropData[]>([
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

  const {width, height} = Dimensions.get('window');
  return (
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
            source={require('../../../assets/casafantasmas.webp')}
            style={{width, height: height * 0.5}}
            resizeMode="cover"
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
        <Text style={styles.title}>
          Movie Movie Movie Movie Movie Movie Movie
        </Text>
        {/* Status, release, runtime */}
        <Text style={styles.subTitle}>Released . 2020 . 170min</Text>
        {/* Genres */}
        <View style={styles.genres}>
          <Text style={styles.subTitle}>Action .</Text>
          <Text style={styles.subTitle}>Comedy .</Text>
          <Text style={styles.subTitle}>Thrill .</Text>
        </View>
        {/* Description */}
        <Text style={styles.description}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
          temporibus est? A accusantium architecto est repellat nam sed,
          cupiditate quisquam consectetur! Earum harum possimus officiis quos!
          Doloribus eligendi amet quibusdam!
        </Text>
        {/* Cast */}
        <Cast cast={cast} />
        {/* Similar movies */}
        <MovieList
          title="Similar movies"
          data={similarMovies}
          hideSeeAll={true}
        />
      </View>
    </ScrollView>
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
    fontSize: 18,
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
