import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
} from 'react-native';

const dataAry = [
  {
    id: '1',
    name: 'My attendance',
    imageUrl: require('../assets/event.png'),
  },
  {
    id: '2',
    name: 'My Schedule',
    imageUrl: require('../assets/schedule.png'),
  },
  {
    id: '3',
    name: 'Monthly Target Planning',
    imageUrl: require('../assets/planning.png'),
  },
  {
    id: '4',
    name: 'Digital Payment',
    imageUrl: require('../assets/digital.png'),
  },
  {
    id: '5',
    name: 'Event Management',
    imageUrl: require('../assets/mgmt.png'),
  },
  {
    id: '6',
    name: 'Task Management',
    imageUrl: require('../assets/task.png'),
  },
  {
    id: '7',
    name: 'Customer Relationship',
    imageUrl: require('../assets/customer.png'),
  },
  {
    id: '8',
    name: 'Document Wallet',
    imageUrl: require('../assets/document.png'),
  },
  {
    id: '9',
    name: 'Helpdesk',
    imageUrl: require('../assets/helpdesk.png'),
  },
  {
    id: '10',
    name: 'Refer',
    imageUrl: require('../assets/refer.jpg'),
  },
];

const Sidemenu = ({navigation}) => {
  const backClicked = () => {
    navigation.goBack();
  };

  const signoutClicked = () => {
    navigation.navigate('HOME');
  };

  const itemselected = name => {
    console.log('item', name);

    if (name == 'home') {
      navigation.navigate('HOME');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{padding: 20, width: '100%', height: '100%'}}>
        <View style={{flexDirection: 'row'}}>
          <Pressable onPress={backClicked}>
            <Image
              style={{width: 15, height: 15}}
              source={require('../assets/left-arrow.png')}
            />
          </Pressable>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              marginLeft: 20,
            }}>
            Welcome Sarvesh,
          </Text>
        </View>
        <View>
          <Image
            style={{
              margin: 15,
              height: 100,
              width: 100,
              borderRadius: 50,
              marginLeft: 85,
            }}
            source={require('../assets/car.jpg')}
          />
        </View>
        <View
          style={{
            paddingLeft: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontWeight: 'bold'}}>Sarvesh Reddy</Text>
          <Text style={{fontSize: 12}}>Dealer Sales Exec, 36yrs</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'grey', fontSize: 12}}>Email:</Text>
            <Text style={{color: 'blue', fontSize: 12}}>
              s.reddy@bharathyundai.com
            </Text>
          </View>
          <Text style={{color: 'grey', fontSize: 12}}>
            Office location:HYD-Jubilee hills, devider
          </Text>
        </View>

        <FlatList
          data={dataAry}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => {
            return (
              <Pressable onPress={() => itemselected(item.name)}>
                <View
                  style={{
                    width: '120%',
                    height: 40,
                    justifyCenter: 'center',
                  }}>
                  <View
                    style={{
                      paddingleft: 30,
                      justifyContent: 'center',
                      height: 1,
                      marginTop: 20,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        marginTop: 20,
                        paddingLeft: 20,
                      }}>
                      <Image
                        style={{width: 20, height: 20, paddingLeft: 20}}
                        source={item.imageUrl}
                      />
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: 'bold',
                          paddingLeft: 20,
                        }}>
                        {item.name}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      width: '150%',
                      height: 0.5,
                      backgroundColor: 'grey',
                      marginTop: 30,
                    }}></View>
                </View>
              </Pressable>
            );
          }}
        />
        <Pressable onPress={signoutClicked}>
          <View
            style={{
              height: 30,
              width: 150,
              justifyContent: 'center',
              backgroundColor: 'red',
              marginBottom: 30,
              alignItems: 'center',
              borderRadius: 6,

              marginLeft: 40,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{
                  width: 20,
                  height: 20,
                }}
                source={require('../assets/logout.png')}
              />
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 'bold',
                  color: 'white',
                  paddingLeft: 5,
                  justifyContent: 'center',
                }}>
                Sign out
              </Text>
            </View>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
export default Sidemenu;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});
