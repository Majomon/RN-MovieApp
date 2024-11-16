import {NavigationProp, useNavigation} from '@react-navigation/native';
import {debounce} from 'lodash';
import React, {useCallback, useState} from 'react';
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
import {fetchSearch} from '../../../actions/search/get-search';
import {Movie} from '../../../core/entities/movie.entity';
import {IonIcon} from '../../components';
import {LoadingScreen} from '../../components/LoadingScreen';
import {RootsStackParams} from '../../navigation/StackNavigator';

const {width, height} = Dimensions.get('window');

export const SearchScreen = () => {
  const navigation = useNavigation<NavigationProp<RootsStackParams>>();
  const [results, setResults] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (value: string) => {
    if (value && value.length > 3) {
      setLoading(true);
      try {
        const data = await fetchSearch(value);
        setResults(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching search results:', error);
        setResults([]);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
      setResults([]);
    }
  };

  //Bounce, espera unos segundos y luego hace la peticion. El array vacio es para que se active solo una vez
  const handleTextDebounce = useCallback(debounce(handleSearch, 400), []);

  return (
    <View style={{flex: 1, backgroundColor: '#191919'}}>
      <View style={styles.containerSearch}>
        <TextInput
          onChangeText={handleTextDebounce}
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
                  onPress={() =>
                    navigation.navigate('Movie', {movieId: item.id})
                  }>
                  <View style={{marginTop: 8}}>
                    <Image
                      style={{
                        borderRadius: 30,
                        width: width * 0.44,
                        height: height * 0.3,
                      }}
                      source={{uri: item.poster}}
                    />
                    <Text style={{color: '#74746f', marginLeft: 4}}>
                      {results.length > 14
                        ? item.title.slice(0, 14) + '...'
                        : item.title}
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
