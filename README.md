
# React Native Maps Koordinatlar Arası Mesafeyi Filtreleme

Bu proje, React Native Maps kütüphanesi kullanılarak koordinat aralıkları içindeki lokasyonları filtrelemek için tasarlanmıştır.
## Ekran Görüntüleri

![Uygulama Ekran Görüntüsü](https://i.hizliresim.com/li2c00g.png)

  ## Kullanılan Teknolojiler
* React Native
* React Native Maps
* Expo
## Bilgisayarınızda Çalıştırın

Projeyi klonlayın

```bash
  git clone https://github.com/HasanRs/React-Native-Maps-Koordinatlar-Aras-Mesafeyi-Filtreleme.git
```

Proje dizinine gidin

```bash
  cd my-project
```

Gerekli paketleri yükleyin

```bash
  npm install
```

Sunucuyu çalıştırın

```bash
  npm run ios
```
ya da
```bash
  npm run android
```

## Haversine Formülü

Haversine formülü, iki nokta arasındaki doğrudan (kuş uçuşu) mesafeyi hesaplamak için kullanılan bir formüldür. Bu formül, iki noktanın enlem ve boylamlarını kullanır.

Formül şöyledir:
```javascript
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
```
Radyan hesabını yapmak için:
```javascript
function deg2rad(deg) {
	return deg * (Math.PI / 180) // Radyan cinsine çevir
}
```
## Çıkarılan Dersler

React Native Maps, React Native üzerinde harita uygulamaları geliştirmek için kullanılan bir kütüphanedir. Bu kütüphane sayesinde, harita üzerinde işaretlemeler yapabilir, kullanıcının konumunu gösterebilir, yol tarifi gibi özellikleri uygulamanıza ekleyebilirsiniz.

Bunun yanı sıra, Expo-Location modülü de React Native uygulamalarında konum tabanlı işlemler yapmak için kullanılan bir modüldür. Bu modül sayesinde, kullanıcının konumunu tespit edebilir, konumla ilgili verileri elde edebilir ve bu verileri kullanarak uygulamanızda farklı işlemler yapabilirsiniz.

Projemizde ise, Expo-Location modülünü kullanarak kendi konumumuzu tespit ediyoruz. Daha sonra, bir API'den aldığımız koordinat verileriyle kendi konumumuzun koordinatları arasındaki mesafeyi hesaplayarak, bu mesafenin 1 kilometrelik bir alan içerisinde olup olmadığını kontrol ediyoruz.

Eğer mesafe 1 kilometrelik alan içerisindeyse, API'den aldığımız koordinat verilerini filtreliyoruz ve sadece bu alan içerisindeki verileri gösteriyoruz. Bu sayede, kullanıcının konumuna yakın olan ve onu ilgilendirebilecek verileri gösteriyoruz.

Bu yöntem sayesinde, kullanıcının bulunduğu konuma yakın olan verileri daha hızlı ve kolay bir şekilde bulabilmesini sağlıyoruz. Ayrıca, konum tabanlı bir uygulama geliştirmek için kullanabileceğiniz birçok farklı yöntem bulunuyor. Bu yöntemler arasında, mesafe hesaplaması yapmak, harita üzerinde işaretlemeler yapmak, konum bazlı arama yapmak gibi işlemler yer alıyor.

Sonuç olarak, Expo-Location modülü sayesinde kendi konumumuzu tespit edip, React Native Maps kütüphanesiyle harita üzerinde işaretlemeler yaparak, konum tabanlı bir uygulama geliştirebilirsiniz. Bu sayede, kullanıcının bulunduğu konuma yakın olan verileri daha hızlı ve kolay bir şekilde bulabilirsiniz.

  
## Destek

Destek için hasanbaygul@protonmail.com adresine e-posta gönderin veya Slack kanalımıza katılın.

  
## Lisans

[MIT](https://github.com/HasanRs/React-Native-Maps-Koordinatlar-Aras-Mesafeyi-Filtreleme/blob/main/LICENSE)

  
