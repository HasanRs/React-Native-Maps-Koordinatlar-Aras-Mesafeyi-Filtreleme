import { StyleSheet, Image } from 'react-native';

import { View } from '../../components/Themed';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';


export default function TabOneScreen() {
	const [location, setLocation] = useState(null);
	const [errorMsg, setErrorMsg] = useState(null);
	const [userLocation, setUserLocation] = useState(null);
	const [nearbyLocations, setNearbyLocations] = useState([]);

	useEffect(() => {
		(async () => {
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== 'granted') {
				setErrorMsg('Permission to access location was denied');
				return;
			}
		})();
	}, []);

	useEffect(() => {
		// Kullanıcının şu anki konumunu alıyoruz
		Location.requestForegroundPermissionsAsync().then((status) => {
		  if (status.granted) {
			Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High }).then((position) => {
			  var latitude = position.coords.latitude;
			  var longitude = position.coords.longitude;
			  setUserLocation({latitude, longitude});
			}).catch((error) => {
			  console.log(error);
			});
		  } else {
			console.log('Location permission not granted');
		  }
		});
	  }, []);

	//konum bilgilerini çekiyoruz
	useEffect(() => {
		var requestOptions = {
			method: 'GET',
			redirect: 'follow'
		  };
		  
		  fetch("https://mocki.io/v1/6247d5ee-8fd3-4d54-9a98-0793cad71760", requestOptions)
			.then(response => response.json())
			.then(result => setLocation(result))
			.catch(error => console.log('error', error));
	}, []);

	useEffect(() => {
		if (userLocation) {
			// 1km içindeki lokasyonları filtreliyoruz
			const nearby = location.filter((item) => {
				const distance = getDistance(userLocation.latitude, userLocation.longitude, item.latitude, item.longitude);
				return distance < 1000;
			});
			setNearbyLocations(nearby);
		}
	}, [userLocation]);

	// Konum bilgilerini kullanarak iki nokta arasındaki mesafeyi hesaplıyoruz
	function getDistance(lat1, lon1, lat2, lon2) {
		const R = 6371; // Dünya yarıçapı (km)
		const dLat = deg2rad(lat2 - lat1); // Radyan cinsinden fark
		const dLon = deg2rad(lon2 - lon1);
		const a = // Haversine formülü (iki nokta arasındaki açıyı hesaplamak için)
			Math.sin(dLat / 2) * Math.sin(dLat / 2) +
			Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
			Math.sin(dLon / 2) * Math.sin(dLon / 2)
		;
		const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); // Açı (radyan)
		const d = R * c; // Mesafe (km)
		return d * 1000; // Mesafe çevir (m)
	}

	function deg2rad(deg) {
		return deg * (Math.PI / 180) // Radyan cinsine çevir
	}
	
	let text = 'Waiting..';
	if (errorMsg) {
		text = errorMsg;
	} else if (location) {
		text = JSON.stringify(location);
	}

	// Konum bilgilerini kullanarak haritada markerları gösteriyoruz
	const renderMarkers = () => {
		return nearbyLocations.map((item, index) => {
			return (
				<Marker
					key={index}
					coordinate={{
						latitude: item.latitude,
						longitude: item.longitude
					}}
					title={item.name}
					description={item.address}
					//image={item.picture}
				/>
			)
		})
	}

	return (
		<View style={styles.container}>
			{userLocation && (
				<MapView 
					showsUserLocation={true}
					provider={PROVIDER_GOOGLE}
					initialRegion={{
						latitude: userLocation.latitude,
						longitude: userLocation.longitude,
						latitudeDelta: 0.0922,
						longitudeDelta: 0.0421
					}}
					style={{height: '100%', width: '100%'}}>
					{location && renderMarkers()}
				</MapView>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: '80%',
	},
});
