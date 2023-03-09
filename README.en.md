# Filtering Distance Between Coordinates in React Native Maps

This project is designed to filter locations within coordinate intervals using the React Native Maps library.
## Ekran Görüntüleri

![Application Screenshot](https://i.hizliresim.com/li2c00g.png)

## Technologies
* React Native
* React Native Maps
* Expo
## Bilgisayarınızda Çalıştırın

Clone project

```bash
  git clone https://github.com/HasanRs/React-Native-Maps-Koordinatlar-Aras-Mesafeyi-Filtreleme.git
```

Go to the project directory

```bash
  cd my-project
```

Install packages

```bash
  npm install
```

Run server

```bash
  npm run ios
```
or
```bash
  npm run android
```

## Haversine Formula

The Haversine formula is a formula used to calculate the direct (as-the-crow-flies) distance between two points. This formula utilizes the latitude and longitude of the two points.

The formula is:
```javascript
const R = 6371; // World Radius (km)
const dLat = deg2rad(lat2 - lat1); // Radyan cinsinden fark
const dLon = deg2rad(lon2 - lon1);
const a = // Haversine formula (to calculate the angle between two points)
	Math.sin(dLat / 2) * Math.sin(dLat / 2) +
	Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
	Math.sin(dLon / 2) * Math.sin(dLon / 2)
	;
const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); // Angle (radian)
const d = R * c; // Distance (km)
return d * 1000; // Distance (km to m)
```
To calculate radians:
```javascript
function deg2rad(deg) {
	return deg * (Math.PI / 180) // Convert to radian
}
```
## Lessons Learned

React Native Maps is a library used to develop map applications in React Native. With this library, you can add markers to the map, show the user's location, and add features like directions to your application.

In addition, the Expo-Location module is a module used for location-based operations in React Native applications. With this module, you can determine the user's location, obtain location-related data, and use this data to perform various operations in your application.

In our project, we use the Expo-Location module to determine our own location. Then, we calculate the distance between our own location coordinates and the coordinate data obtained from an API, and check whether this distance is within a 1-kilometer range.

If the distance is within the 1-kilometer range, we filter the coordinate data obtained from the API and only show the data within this range. This allows us to display data that may be of interest to the user and is located near their current location.

This method allows the user to quickly and easily find data that is near their current location. Additionally, there are many different methods you can use to develop a location-based application. These methods include calculating distances, adding markers to the map, and performing location-based searches.

In conclusion, by using the Expo-Location module to determine our own location and using the React Native Maps library to add markers to the map, you can develop a location-based application. This allows you to quickly and easily find data that is near the user's current location.

  
## Support

Send an email to hasanbaygul@protonmail.com for support or join our Slack channel.

  
## Licence

[MIT](https://github.com/HasanRs/React-Native-Maps-Koordinatlar-Aras-Mesafeyi-Filtreleme/blob/main/LICENSE)

  
