import {NavigationProp, useNavigation} from '@react-navigation/native';
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
import {IonIcon} from '../../components';
import {RootsStackParams} from '../../navigation/StackNavigator';
import {globalColors} from '../../theme/theme';

const {width, height} = Dimensions.get('window');

export const PersonScreen = ({}) => {
  const navigation = useNavigation<NavigationProp<RootsStackParams>>();
  const [isFavorite, setIsFavorite] = useState(false);
  const [personMovies, setPersonMovies] = useState([1, 2, 3, 4]);

  return (
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
              style={{
                borderRadius: 16,
                width: width * 0.74,
                height: height * 0.43,
              }}
              source={require('../../../assets/deadpool.webp')}
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
            Keanu Reevs
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: '#766f6f',
              textAlign: 'center',
            }}>
            London, United Kingdom
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
            <Text style={{color: 'white', fontWeight: 'semibold'}}>Gender</Text>
            <Text style={{color: '#c5c1c1', fontSize: 14}}>Male</Text>
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
            <Text style={{color: '#c5c1c1', fontSize: 14}}>1964-09-02</Text>
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
            <Text style={{color: '#c5c1c1', fontSize: 14}}>Acting</Text>
          </View>
          <View style={{paddingHorizontal: 8, alignItems: 'center'}}>
            <Text style={{color: 'white', fontWeight: 'semibold'}}>
              Popularity
            </Text>
            <Text style={{color: '#c5c1c1', fontSize: 14}}>64.23</Text>
          </View>
        </View>

        {/* Biografia */}
        <View style={{marginVertical: 24, marginHorizontal: 16, gap: 8}}>
          <Text style={{color: 'white', fontSize: 18}}>Biografia</Text>
          <Text style={{color: '#c5c1c1', letterSpacing: 0.4}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            voluptatum, molestias assumenda accusantium neque dignissimos, ea
            explicabo impedit et rem cumque id tenetur eligendi? Eius itaque
            exercitationem eos natus ipsa?
          </Text>
        </View>

        {/* Movies */}
        <View></View>
      </View>
    </ScrollView>
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
