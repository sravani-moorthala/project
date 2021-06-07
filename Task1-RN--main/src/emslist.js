import React, {useState, useLayoutEffect} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Image,
} from 'react-native';

const datalist = [
  {
    id: 1,
    name: 'Mr. Sunil Prakash',
    role: 'Digital Marketing',
    Date: '19 May 2020',
    vechicle: 'Aura',
    type: 'HOT',
    imageUrl: './assets/phone.png',
  },
  {
    id: 2,
    name: 'Mr. Sunil Prakash',
    role: 'Digital Marketing',
    Date: '19 May 2020',
    vechicle: 'Creta',
    type: 'WARM',
    imageUrl: './assets/phone.png',
  },
  {
    id: 3,
    name: 'Mr. Sunil Prakash',
    role: 'Digital Marketing',
    Date: '19 May 2020',
    vechicle: 'Elentra',
    type: 'COLD',
    imageUrl: './assets/phone.png',
  },
  {
    id: 4,
    name: 'Mr. Sunil Prakash',
    role: 'Digital Marketing',
    Date: '19 May 2020',
    vechicle: 'Elite i20',
    type: 'HOT',
    imageUrl: './assets/phone.png',
  },
  {
    id: 5,
    name: 'Mr. Sunil Prakash',
    role: 'Digital Marketing',
    Date: '19 May 2020',
    vechicle: 'Grandi10NIOS',
    type: 'HOT',
    imageUrl: './assets/phone.png',
  },
  {
    id: 6,
    name: 'Mr. Sunil Prakash',
    role: 'Digital Marketing',
    Date: '19 May 2020',
    vechicle: 'Grand i10',
    type: 'WARM',
    imageUrl: './assets/phone.png',
  },
  {
    id: 7,
    name: 'Mr. Sunil Prakash',
    role: 'Digital Marketing',
    Date: '19 May 2020',
    vechicle: 'Santro',
    type: 'COLD',
    imageUrl: './assets/phone.png',
  },
  {
    id: 8,
    name: 'Mr. Sunil Prakash',
    role: 'Digital Marketing',
    Date: '19 May 2020',
    vechicle: 'KonaElectric',
    type: 'HOT',
    imageUrl: './assets/phone.png',
  },
  {
    id: 9,
    name: 'Mr. Sunil Prakash',
    role: 'Digital Marketing',
    Date: '19 May 2020',
    vechicle: 'Tucson',
    type: 'COLD',
    imageUrl: './assets/phone.png',
  },
  {
    id: 10,
    name: 'Mr. Sunil Prakash',
    role: 'Digital Marketing',
    Date: '19 May 2020',
    vechicle: 'Venue',
    type: 'HOT',
    imageUrl: './assets/phone.png',
  },
  {
    id: 11,
    name: 'Mr. Sunil Prakash',
    role: 'Digital Marketing',
    Date: '19 May 2020',
    vechicle: 'Verna',
    type: 'COLD',
    imageUrl: './assets/phone.png',
  },
];

const emslist = ({navigation}) => {
  const descriptionClicked = () => {
    navigation.navigate('DESCRIPTION');
  };
  const menu = () => {
    navigation.navigate('EMSSTACKNAVIGATOR');
  };

  const buttonClicked = () => {
    navigation.navigate('ADDCONTACT');
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Image
            style={{width: 20, height: 20, margin: 10}}
            source={require('./assets/menu.png')}
          />
        </Pressable>
      ),
      headerRight: () => (
        <Image
          style={{width: 20, height: 20, margin: 20}}
          source={require('./assets/notification.png')}
        />
        /*<Image
          style={{width: 20, height: 20, margin: 20}}
          source={require('./assets/search.png')}
        />
*/
      ),
    });
  });

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={datalist}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => {
          let color = '#eeeeee';
          if (index % 2 == 0) {
            color = 'white';
          }

          let typeColor = 'red';
          if (item.type == 'WARM') {
            typeColor = 'orange';
          } else if (item.type == 'COLD') {
            typeColor = 'green';
          }

          return (
            <View style={[styles.main, {backgroundColor: color}]}>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    height: 20,
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{fontSize: 14, fontWeight: '400', color: 'black'}}>
                    {item.name}
                  </Text>
                  <View
                    style={{
                      width: 15,
                      height: 15,
                      borderRadius: 10,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: typeColor,
                    }}>
                    <Text
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: 'white',
                      }}></Text>
                  </View>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: '400',
                      color: 'black',
                      paddingLeft: 5,
                      color: typeColor,
                      paddingTop: 3,
                    }}>
                    {item.type}
                  </Text>
                </View>
                <Text style={{fontSize: 14, fontWeight: '400', color: 'black'}}>
                  {item.role}
                </Text>
                <Text
                  style={{
                    color: 'grey',
                    fontWeight: '400',
                    fontSize: 12,
                    fontWeight: 'bold',
                  }}>
                  {item.Date}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  alignContent: 'flex-end',
                  flex: 1,
                  marginEnd: 5,
                }}>
                <View style={styles.vechicleView}>
                  <Pressable onPress={descriptionClicked}>
                    <Text style={styles.vechileView}>{item.vechicle}</Text>
                  </Pressable>
                </View>
                <View>
                  <Image
                    style={styles.ImageStyle}
                    source={require('./assets/phone.png')}
                  />
                </View>
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default emslist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    // marginTop: 30,
    padding: 10,
  },

  main: {
    width: '100%',
    height: 90,
    marginLeft: 10,
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-between',
  },
  item: {
    backgroundColor: 'white',
    fontSize: 15,
    marginTop: 10,
  },

  ImageStyle: {
    height: 12,
    width: 12,
    marginTop: 45,
    marginEnd: 10,
  },
  vechicleView: {
    color: '#b82e5d',
    borderColor: '#b82e5d',
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 6,
    backgroundColor: '#f7ebf3',
    height: 30,
    marginLeft: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
