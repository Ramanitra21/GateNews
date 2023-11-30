import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

const MyImageCarousel = () => {
  return (
    <Swiper
      autoplay={true}
      autoplayTimeout={2}
      style={styles.wrapper}
    >
      <View style={styles.slide}>
        <Image
          source={require('./images/banniere1.jpg')} // Remplacez le chemin par le chemin réel de votre image
          style={styles.image}
        />
      </View>
      <View style={styles.slide}>
        <Image
          source={require('./images/banniere2.jpg')}
          style={styles.image}
        />
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginRight: 20,
  },
  image: {
    width: '100%',
    resizeMode:'contain'
  },
});

export default MyImageCarousel;
