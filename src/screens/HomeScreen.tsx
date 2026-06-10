import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = () => {
  const [city, setCity] = React.useState('');
  const [weather, setWeather] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(false);

  const handleSearch = async () => {
    if (!city.trim()) {
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=65ce43146e4b6a1d679f11380bea28ce&units=metric`,
      );

      const data = await response.json();

      console.log(data);

      if (data.cod === 200) {
        setWeather(data);
        setCity('');
      } else {
        console.log('City not found');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getWeatherImage = () => {
    if (!weather) {
      return require('../assets/images/weather/cloud.png');
    }

    const condition = weather.weather[0].main;

    switch (condition) {
      case 'Clear':
        return require('../assets/images/weather/sun.png');

      case 'Rain':
        return require('../assets/images/weather/rain.png');

      case 'Thunderstorm':
        return require('../assets/images/weather/thunder.png');

      case 'Clouds':
        return require('../assets/images/weather/cloud.png');

      default:
        return require('../assets/images/weather/cloud.png');
    }
  };

  return (
    <LinearGradient
      colors={['#08203E', '#1B4F9C', '#5B8FD9']}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
        >
          {/* <View style={styles.header}>
            <Text style={styles.location}>Amsterdem</Text>
            <Text style={styles.menu}>☰</Text>
          </View> */}
          <View style={styles.searchContainer}>
            <TextInput
              placeholder="Search City..."
              placeholderTextColor="#D6E3F5"
              value={city}
              onChangeText={setCity}
              style={styles.searchInput}
            />
            <Text style={styles.SearchButton} onPress={handleSearch}>
              {loading ? 'Loading...' : 'Search'}
            </Text>
          </View>
          <View style={styles.tempratureContainer}>
            <Text style={styles.temprature}>
              {weather ? Math.round(weather.main.temp) : 25}°C
            </Text>
          </View>
          <View style={styles.imageContainer}>
            <Image
              source={getWeatherImage()}
              style={styles.weatherImager}
              resizeMode="contain"
            />
          </View>
          <View style={styles.weatherInfo}>
            <Text style={styles.cityName}>
              {weather ? weather.name : 'Amsterdam'}
            </Text>
            <Text style={styles.minMax}>
              {weather
                ? `${Math.round(weather.main.temp_min)}° - ${Math.round(
                    weather.main.temp_max,
                  )}°`
                : '16° - 26°'}
            </Text>
            <Text style={styles.condition}>
              {weather ? weather.weather[0].main : 'Partly Cloudy'}
            </Text>
          </View>
          <View style={styles.detailsContainer}>
            <View style={styles.detailItem}>
              <Text style={styles.derailTitle}>Humidity</Text>
              <Text style={styles.detailValue}>
                {weather ? weather.main.humidity : 94}%
              </Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.derailTitle}>Wind</Text>
              <Text style={styles.detailValue}>
                {weather ? weather.wind.speed : 7} km/h
              </Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.derailTitle}>Precipitation</Text>
              <Text style={styles.detailValue}>30%</Text>
            </View>
          </View>
          <View style={styles.forecastCard}>
            <Text style={styles.CardTitle}>Additional Details</Text>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Latitude</Text>
              <Text style={styles.infoValue}>
                {weather?.coord?.lat ?? '__'}
              </Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Longitude</Text>
              <Text style={styles.infoValue}>
                {weather?.coord?.lon ?? '__'}
              </Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Feels Like</Text>
              <Text style={styles.infoValue}>
                {weather ? `${Math.round(weather.main.feels_like)}°C` : '__'}
              </Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Pressure</Text>
              <Text style={styles.infoValue}>
                {weather?.main?.pressure ?? '--'}
              </Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Visibility</Text>
              <Text style={styles.infoValue}>
                {weather?.visibility ?? '__'}
              </Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Country</Text>
              <Text style={styles.infoValue}>
                {weather?.sys?.country ?? '__'}
              </Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>TimeZone</Text>
              <Text style={styles.infoValue}>
                {weather ? weather.timezone / 3600 : '__'}
              </Text>
            </View>
          </View>
        </ScrollView>
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
    flex: 1,
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  location: {
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
    alignItems: 'center',
  },
  temprature: {
    fontSize: 96,
    fontWeight: '300',
    color: '#FFFFFF',
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: -20,
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
    color: '#FFFFFF',
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
    marginTop: 8,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    paddingHorizontal: 10,
  },
  detailItem: {
    alignItems: 'center',
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
    backgroundColor: 'rgba(255,255,255,0.10)',
    marginTop: 20,
    borderRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  forecastItem: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 40,
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
  },
  forecastIcon: {
    width: 28,
    height: 28,
    marginVertical: 8,
  },
  searchContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    backgroundColor: 'rgba(225,225,225,0.15)',
    borderRadius: 20,
    paddingHorizontal: 15,
    height: 50,
    color: '#FFFFFF',
    fontSize: 16,
  },
  SearchButton: {
    marginLeft: 10,
    backgroundColor: 'rgba(225,225,225,0.20)',
    color: '#FFFFFF',
    paddingHorizontal: 15,
    paddingVertical: 14,
    borderRadius: 15,
    fontWeight: '600',
  },
  CardTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  infoLabel: {
    color: '#D6E3F5',
    fontSize: 16,
  },
  infoValue: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
