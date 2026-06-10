import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = () => {
    
  return (
    <LinearGradient
      colors={['#08203E', '#1B4F9C', '#5B8FD9']}
      style={styles.container}
    >
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.location}>Amsterdem</Text>
                    <Text style={styles.menu}>☰</Text>
                </View>
                <View style={styles.tempratureContainer}>
                    <Text style={styles.temprature}>25°C</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../assets/images/weather/cloud.png')}
                        style={styles.weatherImager}
                        resizeMode='contain'
                    />
                </View>
                <View style={styles.weatherInfo}>
                    <Text style={styles.cityName}>Amsterdem</Text>
                    <Text style={styles.minMax}>16° - 26°</Text>
                    <Text style={styles.condition}>Partly Cloudy</Text>
                </View>
                <View style={styles.detailsContainer}>
                    <View style={styles.detailItem}>
                        <Text style={styles.derailTitle}>Humidity</Text>
                        <Text style={styles.detailValue}>94%</Text>
                    </View>
                    <View style={styles.detailItem}>
                        <Text style={styles.derailTitle}>Wind</Text>
                        <Text style={styles.detailValue}>7 km/h</Text>
                    </View>
                    <View style={styles.detailItem}>
                        <Text style={styles.derailTitle}>Precipitation</Text>
                        <Text style={styles.detailValue}>30%</Text>
                    </View>
                </View>
                <View style={styles.forecastCard}>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
                        <View style={styles.forecastItem}>
                            <Text style={styles.forecastTime}>Now</Text>
                            <Text style={styles.forecastTemp}>25°</Text>
                        </View>
                        <View style={styles.forecastItem}>
                            <Text style={styles.forecastTime}>10am</Text>
                            <Text style={styles.forecastTemp}>22°</Text>
                        </View>
                        <View style={styles.forecastItem}>
                            <Text style={styles.forecastTime}>11am</Text>
                            <Text style={styles.forecastTemp}>23°</Text>
                        </View>
                        <View style={styles.forecastItem}>
                            <Text style={styles.forecastTime}>12pm</Text>
                            <Text style={styles.forecastTemp}>24°</Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  location:{
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  menu: {
    color: '#FFFFFF',
    fontSize: 24,
  },
  tempratureContainer: {
    marginTop: 50,
    alignItems: 'center'
  },
  temprature: {
    fontSize: 96,
    fontWeight: '300',
    color: '#FFFFFF'
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: -20
  },
  weatherImager: {
    width: 320,
    height: 320,
  },
  weatherInfo: {
    alignItems: 'center',
    marginTop: 10,
  },
  cityName: {
    fontSize: 32,
    fontWeight: '700',
    color: '#FFFFFF'
  },
  minMax: {
    fontSize: 26,
    fontWeight: '600',
    color: '#FFFFFF',
    marginTop: 8,
  },
  condition: {
    fontSize: 18,
    color: '#D6E3F5',
    marginTop: 8
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    paddingHorizontal: 10,
  },
  detailItem: {
    alignItems: 'center'
  },
  derailTitle: {
    color: '#D6E3F5',
    fontSize: 14,
  },
  detailValue: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 8,
  },
  forecastCard: {
    backgroundColor: '(rgba(225,225,225,0.15)',
    marginTop: 20,
    borderRadius: 30,
    padding: 20,
  },
  forecastItem: {
    alignItems: 'center',
    marginRight: 25,
  },
  forecastTime: {
    color: '#D6E3F5',
    fontSize: 14,
  },
  forecastTemp: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 8,
  }
});
