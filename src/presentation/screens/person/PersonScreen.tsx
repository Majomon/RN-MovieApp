import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {IonIcon} from '../../components';
import {RootsStackParams} from '../../navigation/StackNavigator';
import {globalColors} from '../../theme/theme';

const {width, height} = Dimensions.get('window');

export const PersonScreen = ({}) => {
  const navigation = useNavigation<NavigationProp<RootsStackParams>>();
  const [isFavorite, setIsFavorite] = useState(false);

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
      <View
        style={{
          marginTop: 18,
          flexDirection: 'row',
          justifyContent: 'center',
          shadowColor: 'gray',
          shadowRadius: 40,
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 1,
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  buttonBack: {
    zIndex: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 4,
    paddingTop: 10,
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
