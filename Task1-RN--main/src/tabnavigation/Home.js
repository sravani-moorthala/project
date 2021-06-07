import React, {hooks, useState} from 'react';
import {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Button,
} from 'react-native';

const Home = ({navigation}) => {
  const imageClicked = () => {
    navigation.navigate('IMAGEPICKER', {name: 'sravani', company: 'Automate'});
  };
  const [movieList, setmovieList] = useState([]);

  useEffect(() => {
    getMoviesListFromServer();
  }, []);
  //------------POST method-----------
  /* const obj = {
    username: 'sravani',
    password: '1234567890',
  };
  fetch('https://mywebsite.com/endpoint/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  })
    .then(response => response.json())
    .then(json => {
      console.log('json', json);
    })
    .catch(error => {
      console.error('error:', error);
    });
*/
  //  ------------get method-------------
  const getMoviesListFromServer = async () => {
    await fetch('https://reactnative.dev/movies.json')
      .then(response => response.json())
      .then(json => {
        console.log('json', json);
        const movieList = json.movies;
        setmovieList(movieList);
      })
      .catch(error => {
        console.error('error:', error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{width: '100%'}}>
        <FlatList
          data={movieList}
          keyExtractor={(item, index) => item.id}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  width: '100%',
                  height: 60,
                  marginTop: 5,
                  marginLeft: 5,

                  marginBottom: 5,
                  backgroundColor: 'grey',
                  paddingLeft: 20,
                }}>
                <Text
                  style={{color: 'white', fontSize: 14, fontWeight: 'bold'}}>
                  {item.title}
                </Text>
                <Text
                  style={{color: 'white', fontSize: 14, fontWeight: 'bold'}}>
                  {item.releaseYear}
                </Text>
              </View>
            );
          }}
        />
      </View>
      <Button title={'Go To ImagePicker'} onPress={imageClicked} />
    </SafeAreaView>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});
