import React from 'react';
import { Text, Button, View, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window')

const SwiperHome = () => {
    return (
        <View style={styles.container}>
        <Swiper 
            style={styles.wrapper} 
            showsPagination 
            activeDot={
                <View style={{backgroundColor: '#ffff', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />
            }>
          <View style={styles.slide1}>
            <Text style={styles.text}>Hello Swiper</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
          </View>
        </Swiper>
        </View>
    )
}
const HomeScreen = () => {
    return(
        <SwiperHome />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
      },
    
      wrapper: {},
    
      slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
      },
    
      slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
      },
    
      slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
      },
    
      slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
      },
    
      text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
      }
});

export default HomeScreen;