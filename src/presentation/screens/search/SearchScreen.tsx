import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {IonIcon} from '../../components';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootsStackParams} from '../../navigation/StackNavigator';
import {LoadingScreen} from '../../components/LoadingScreen';

const {width, height} = Dimensions.get('window');

export const SearchScreen = () => {
  const navigation = useNavigation<NavigationProp<RootsStackParams>>();
  const [results, setResults] = useState([1,2,3,5]);
  const [loading, setLoading] = useState(false);

  let movieName = 'Algo algo algo Algo algo algo Algo algo algo';
  return (
    <View style={{flex: 1, backgroundColor: '#191919'}}>
      <View style={styles.containerSearch}>
        <TextInput
          placeholder="Search Movie "
          placeholderTextColor={'lightgray'}
          style={styles.textInput}
        />
        <Pressable
          onPress={() => navigation.navigate('Home')}
          style={{
            backgroundColor: '#766f6f',
            borderRadius: 50,
            padding: 12,
            margin: 4,
          }}>
          <IonIcon name="close" size={28} color="white" />
        </Pressable>
      </View>

      {/* Results */}
      {loading ? (
        <LoadingScreen />
      ) : results.length > 0 ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 15}}
          style={{gap: 12}}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'semibold',
              marginLeft: 4,
            }}>
            Results: {results.length}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }}>
            {results.map((item, index) => {
              return (
                <Pressable
                  key={index}
                  onPress={() => navigation.navigate('Movie', {movieId: item})}>
                  <View style={{marginTop: 8}}>
                    <Image
                      style={{
                        borderRadius: 30,
                        width: width * 0.44,
                        height: height * 0.3,
                      }}
                      source={require('../../../assets/starwars.webp')}
                    />
                    <Text style={{color: '#74746f', marginLeft: 4}}>
                      {movieName.length > 22
                        ? movieName.slice(0, 22) + '...'
                        : movieName}
                    </Text>
                  </View>
                </Pressable>
              );
            })}
          </View>
        </ScrollView>
      ) : (
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../../assets/cinema.png')}
            style={{width: 384, height: 384}}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerSearch: {
    marginHorizontal: 16,
    marginBottom: 12,
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#676363',
    borderRadius: 50,
  },
  textInput: {
    paddingBottom: 4,
    paddingLeft: 24,
    fontSize: 16,
    fontWeight: 'semibold',
    color: 'white',
    letterSpacing: 0.4,
  },
});
