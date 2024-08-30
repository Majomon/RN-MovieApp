import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {fetchPersonMovie} from '../../../actions/people/get-person';
import {Person} from '../../../core/entities/person.entity';
import {IonIcon} from '../../components';
import {LoadingScreen} from '../../components/LoadingScreen';
import {RootsStackParams} from '../../navigation/StackNavigator';
import {globalColors} from '../../theme/theme';
import {formatDate} from '../../../utils/formatDate';

const {width, height} = Dimensions.get('window');
const defaultImage = require('../../../assets/fallbackPersonImage.png');

interface Props extends StackScreenProps<RootsStackParams, 'Person'> {}

export const PersonScreen = ({route, navigation}: Props) => {
  // const navigation = useNavigation<NavigationProp<RootsStackParams>>();
  const [isFavorite, setIsFavorite] = useState(false);
  const [loading, setLoading] = useState(false);
  const [personMovies, setPersonMovies] = useState<Person>();

  useEffect(() => {
    loadCast();
  }, []);

  const loadCast = async () => {
    const person = await fetchPersonMovie(route.params.person.id);
    setPersonMovies(person);
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <ScrollView
          style={{flex: 1, backgroundColor: '#191919'}}
          contentContainerStyle={{paddingBottom: 20}}>
          {/* Back button */}
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
                name="heart" /*  */
                color={isFavorite ? 'red' : 'white'}
                size={30}
              />
            </Pressable>
          </View>

          {/* Person detail */}
          {loading ? (
            <LoadingScreen />
          ) : (
            <View>
              <View
                style={{
                  marginTop: 18,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    overflow: 'hidden',
                    width: 280,
                    height: 280,
                    borderRadius: 140,
                    borderWidth: 2,
                    borderColor: '#a7a1a1',
                    alignItems: 'center',
                    shadowColor: 'white',
                    // Esto es para IOS
                    // shadowRadius: 10,
                    // shadowOffset: {
                    //   width: 0,
                    //   height: 5,
                    // },
                    // shadowOpacity: 1,
                    elevation: 20,
                  }}>
                  <Image
                    source={
                      personMovies?.avatar
                        ? {uri: personMovies?.avatar}
                        : defaultImage
                    }
                    style={{
                      borderRadius: 16,
                      width: width * 0.74,
                      height: height * 0.43,
                    }}
                    resizeMode="center"
                  />
                </View>
              </View>
              <View style={{marginTop: 24}}>
                <Text
                  style={{
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: 'white',
                    textAlign: 'center',
                  }}>
                  {personMovies?.name}
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#766f6f',
                    textAlign: 'center',
                  }}>
                  {personMovies?.place_of_birth}
                </Text>
              </View>

              {/* Info */}
              <View
                style={{
                  marginHorizontal: 12,
                  marginTop: 24,
                  padding: 16,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: '#6e6565',
                  borderRadius: 50,
                }}>
                <View
                  style={{
                    borderRightColor: '#c5c1c1',
                    borderRightWidth: 2,
                    paddingHorizontal: 8,
                    alignItems: 'center',
                  }}>
                  <Text style={{color: 'white', fontWeight: 'semibold'}}>
                    Gender
                  </Text>
                  <Text style={{color: '#c5c1c1', fontSize: 14}}>
                    {personMovies?.gender === 1 ? 'Female' : 'Male'}
                  </Text>
                </View>
                <View
                  style={{
                    borderRightColor: '#c5c1c1',
                    borderRightWidth: 2,
                    paddingHorizontal: 8,
                    alignItems: 'center',
                  }}>
                  <Text style={{color: 'white', fontWeight: 'semibold'}}>
                    Birthday
                  </Text>
                  <Text style={{color: '#c5c1c1', fontSize: 14}}>
                    {personMovies?.birthday
                      ? new Date(personMovies.birthday).toLocaleDateString()
                      : 'Fecha no disponible'}
                  </Text>
                </View>
                <View
                  style={{
                    borderRightColor: '#c5c1c1',
                    borderRightWidth: 2,
                    paddingHorizontal: 8,
                    alignItems: 'center',
                  }}>
                  <Text style={{color: 'white', fontWeight: 'semibold'}}>
                    Know for
                  </Text>
                  <Text style={{color: '#c5c1c1', fontSize: 14}}>
                    {personMovies?.know_for}
                  </Text>
                </View>
                <View style={{paddingHorizontal: 8, alignItems: 'center'}}>
                  <Text style={{color: 'white', fontWeight: 'semibold'}}>
                    Popularity
                  </Text>
                  <Text style={{color: '#c5c1c1', fontSize: 14}}>
                    {personMovies?.popularity}
                  </Text>
                </View>
              </View>

              {/* Biografia */}
              <View style={{marginVertical: 24, marginHorizontal: 16, gap: 8}}>
                <Text style={{color: 'white', fontSize: 18}}>Biografia</Text>
                <Text style={{color: '#c5c1c1', letterSpacing: 0.4}}>
                  {personMovies?.biography}
                </Text>
              </View>

              {/* Movies */}
              {/* <MovieList data={personMovies} title="Movies" hideSeeAll /> */}
            </View>
          )}
        </ScrollView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  buttonBack: {
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
