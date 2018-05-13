var vm = new Vue({
    el: '#body',
    data: {
        vinput: '',
       showMenu: true, 
        showCov: false,
        showMes:false,
        table: 0,
        chek1: '',
        chek2: '',
        chek3: '',
        chek4: '',
        chek5: '',
        chek6: '',
            item:  [ 
{id:0,
 name:'HP ProBook 440 G5',
 category:'Ноутбуки',
 price: 26699,
 rank: 5.5,
 desc:'Екран 14" (1920x1080) Full HD, матовий / Intel Core i5-8250U (1.6 - 3.4 ГГц) / RAM 8 ГБ / SSD 256 ГБ / Intel UHD Graphics 620 / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / Windows Pro 64bit / 1.63 кг / сріблястий',
 img:'p1',
 proprt: '<span>ДИСПЛЕЙ</span> Діагональ дисплея	14"<br> Покриття дисплея	матове<br> Роздільна здатність	1920 x 1080<br> <span>ПРОЦЕСОР</span> Тип процесора	Intel Core i7-8550U<br> Частота процесора	1.8 - 4.0 ГГц<br> Кількість ядер	4 <br>ОПЕРАТИВНА ПАМ\'ЯТЬ	8 Гб <br>ТИП ОПЕРАТИВНОЇ ПАМ\'ЯТІ	<br>DDR4 <span>ВІДЕО</span> Відеокарта	інтегрована Intel Graphics<br> Модель відеокарти	інтегрований Intel UHD Graphics 620 <span>ВІНЧЕСТЕР</span> Тип вбудованої пам’яті	HDD , SSD <br>Об\'єм HDD	1 Тб <br>Об’єм SSD	256 Гб <span>ОПЕРАЦІЙНА СИСТЕМА</span>	Windows 10 Pro <span>БЕЗПРОВІДНІ МОЖЛИВОСТІ</span>	Wi-Fi 802.11 ac, <br>Bluetooth 4.2r відеокарти	інтегрований Intel UHD Graphics 620 <span>ВІНЧЕСТЕР</span> Тип вбудованої пам’яті	HDD , SSD <br>Об\'єм HDD	1 Тб <br>Об’єм SSD	256 Гб <span>ОПЕРАЦІЙНА СИСТЕМА</span>	Windows 10 Pro <span>БЕЗПРОВІДНІ МОЖЛИВОСТІ</span>	Wi-Fi 802.11 ac, <br>Bluetooth 4.2r'
},
{id:1,
 name:'Lenovo Legion Y520-15IKBN',
 category:'Ноутбуки',
 price: 26488,
 rank: 6.7,
 desc:'Екран 15.6" IPS (1920x1080) Full HD, матовий / Intel Core i5-7300HQ (2.5 - 3.5 ГГц) / RAM 8 ГБ / HDD 1 ТБ / nVidia GeForce GTX 1050 Ti, 4 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / DOS / 2.4 кг / чорний',
 img:'p2',
 proprt: '<span>ДИСПЛЕЙ</span> Діагональ дисплея	14"<br> Покриття дисплея	матове<br> Роздільна здатність	1920 x 1080<br> <span>ПРОЦЕСОР</span> Тип процесора	Intel Core i5-7300HQ <br> Частота процесора	1.8 - 4.0 ГГц<br> Кількість ядер	4 <br>ОПЕРАТИВНА ПАМ\'ЯТЬ	8 Гб <br>ТИП ОПЕРАТИВНОЇ ПАМ\'ЯТІ	<br>DDR4 <span>ВІДЕО</span> Відеокарта	інтегрована Intel Graphics<br> Модель відеокарти	інтегрований Intel UHD Graphics 620 <span>ВІНЧЕСТЕР</span> Тип вбудованої пам’яті	HDD , SSD <br>Об\'єм HDD	1 Тб <br>Об’єм SSD	256 Гб <span>ОПЕРАЦІЙНА СИСТЕМА</span>	Windows 10 Pro <span>БЕЗПРОВІДНІ МОЖЛИВОСТІ</span>	Wi-Fi 802.11 ac, <br>Bluetooth 4.2r відеокарти	інтегрований Intel UHD Graphics 620 <span>ВІНЧЕСТЕР</span> Тип вбудованої пам’яті	HDD , SSD <br>Об\'єм HDD	1 Тб <br>Об’єм SSD	256 Гб <span>ОПЕРАЦІЙНА СИСТЕМА</span>	Windows 10 Pro <span>БЕЗПРОВІДНІ МОЖЛИВОСТІ</span>	Wi-Fi 802.11 ac, <br>Bluetooth 4.2r'
},
{id:2,
 name:'MSI GE72MVR-7RG Apache Pro',
 category:'Ноутбуки',
 price: 63299,
 rank: 8.0,
 desc:'Екран 17.3" (1920x1080) Full HD, матовий / Intel Core i7-7700HQ (2.8 - 3.8 ГГц) / RAM 32 ГБ / HDD 1 ТБ + SSD 256 ГБ / nVidia GeForce GTX 1070, 8 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / Windows 10 Home / 2.9 кг / чорний',
 img:'p3',
 proprt: '<span>ДИСПЛЕЙ</span> Діагональ дисплея	14"<br> Покриття дисплея	матове<br> Роздільна здатність	1920 x 1080<br> <span>ПРОЦЕСОР</span> Тип процесора	Intel Core i7-8550U<br> Частота процесора	1.8 - 4.0 ГГц<br> Кількість ядер	4 <br>ОПЕРАТИВНА ПАМ\'ЯТЬ	8 Гб <br>ТИП ОПЕРАТИВНОЇ ПАМ\'ЯТІ	<br>DDR4 <span>ВІДЕО</span> Відеокарта	інтегрована Intel Graphics<br> Модель відеокарти	інтегрований Intel UHD Graphics 620 <span>ВІНЧЕСТЕР</span> Тип вбудованої пам’яті	HDD , SSD <br>Об\'єм HDD	1 Тб <br>Об’єм SSD	256 Гб <span>ОПЕРАЦІЙНА СИСТЕМА</span>	Windows 10 Pro <span>БЕЗПРОВІДНІ МОЖЛИВОСТІ</span>	Wi-Fi 802.11 ac, <br>Bluetooth 4.2r відеокарти	інтегрований Intel UHD Graphics 620 <span>ВІНЧЕСТЕР</span> Тип вбудованої пам’яті	HDD , SSD <br>Об\'єм HDD	1 Тб <br>Об’єм SSD	256 Гб <span>ОПЕРАЦІЙНА СИСТЕМА</span>	Windows 10 Pro <span>БЕЗПРОВІДНІ МОЖЛИВОСТІ</span>	Wi-Fi 802.11 ac, <br>Bluetooth 4.2r'
},
{id:3,
 name:'Asus ZenBook 3 Deluxe',
 category:'Ноутбуки',
 price: 63999,
 rank: 8.1,
 desc:'Екран 14.0" (1920x1080) Full HD, глянсовий/Intel Core i7-8550U (1.8 - 4.0 ГГц)/RAM 16 ГБ/SSD 1 ТБ/Intel UHD Graphics 620/без ОД/Wi-Fi/Bluetooth/веб камера/Windows 10 Pro/1.1 кг/синій/Mini Dock + чохол',
 img:'p4',
 proprt: '<span>ДИСПЛЕЙ</span> Діагональ дисплея	14"<br> Покриття дисплея	матове<br> Роздільна здатність	1920 x 1080<br> <span>ПРОЦЕСОР</span> Тип процесора	Intel Core i7-8550U<br> Частота процесора	1.8 - 4.0 ГГц<br> Кількість ядер	4 <br>ОПЕРАТИВНА ПАМ\'ЯТЬ	8 Гб <br>ТИП ОПЕРАТИВНОЇ ПАМ\'ЯТІ	<br>DDR4 <span>ВІДЕО</span> Відеокарта	інтегрована Intel Graphics<br> Модель відеокарти	інтегрований Intel UHD Graphics 620 <span>ВІНЧЕСТЕР</span> Тип вбудованої пам’яті	HDD , SSD <br>Об\'єм HDD	1 Тб <br>Об’єм SSD	256 Гб <span>ОПЕРАЦІЙНА СИСТЕМА</span>	Windows 10 Pro <span>БЕЗПРОВІДНІ МОЖЛИВОСТІ</span>	Wi-Fi 802.11 ac, <br>Bluetooth 4.2r відеокарти	інтегрований Intel UHD Graphics 620 <span>ВІНЧЕСТЕР</span> Тип вбудованої пам’яті	HDD , SSD <br>Об\'єм HDD	1 Тб <br>Об’єм SSD	256 Гб <span>ОПЕРАЦІЙНА СИСТЕМА</span>	Windows 10 Pro <span>БЕЗПРОВІДНІ МОЖЛИВОСТІ</span>	Wi-Fi 802.11 ac, <br>Bluetooth 4.2r'
},
{id:4,
 name:'MSI GT75VR-7RE Titan SLI',
 category:'Ноутбуки',
 price: 137899,
 rank: 9.7,
 desc:'Екран 17.3" IPS (3840x2160) Ultra HD 4K, матовий / Intel Core i7-7820HK (2.9 - 3.9 ГГц) / RAM 64 ГБ / HDD 1 ТБ + 2 x SSD 256 ГБ / 2 х nVidia GeForce GTX 1070 SLI, 8 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / Windows 10 / 4.56 кг / чорний',
 img:'p5',
 proprt: '<span>ДИСПЛЕЙ</span> Діагональ дисплея	14"<br> Покриття дисплея	матове<br> Роздільна здатність	1920 x 1080<br> <span>ПРОЦЕСОР</span> Тип процесора	Intel Core i7-8550U<br> Частота процесора	1.8 - 4.0 ГГц<br> Кількість ядер	4 <br>ОПЕРАТИВНА ПАМ\'ЯТЬ	8 Гб <br>ТИП ОПЕРАТИВНОЇ ПАМ\'ЯТІ	<br>DDR4 <span>ВІДЕО</span> Відеокарта	nVidia GeForce GTX <br> Модель відеокарти	інтегрований Intel UHD Graphics 620 <span>ВІНЧЕСТЕР</span> Тип вбудованої пам’яті	HDD , SSD <br>Об\'єм HDD	1 Тб <br>Об’єм SSD	256 Гб <span>ОПЕРАЦІЙНА СИСТЕМА</span>	Windows 10 Pro <span>БЕЗПРОВІДНІ МОЖЛИВОСТІ</span>	Wi-Fi 802.11 ac, <br>Bluetooth 4.2r відеокарти	інтегрований Intel UHD Graphics 620 <span>ВІНЧЕСТЕР</span> Тип вбудованої пам’яті	HDD , SSD <br>Об\'єм HDD	1 Тб <br>Об’єм SSD	256 Гб <span>ОПЕРАЦІЙНА СИСТЕМА</span>	Windows 10 Pro <span>БЕЗПРОВІДНІ МОЖЛИВОСТІ</span>	Wi-Fi 802.11 ac, <br>Bluetooth 4.2r'
},              
{id:5,
 name:'Apple A1707 MacBook Pro ',
 category:'Ноутбуки',
 price: 96099,
 rank: 9.1,
 desc:'Екран 17.3" IPS (3840x2160) Ultra HD 4K, матовий / Intel Core i7-7820HK (2.9 - 3.9 ГГц) / RAM 64 ГБ / HDD 1 ТБ + 2 x SSD 256 ГБ / 2 х nVidia GeForce GTX 1070 SLI, 8 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / Windows 10 / 4.56 кг / чорний',
 img:'p6',
 proprt: '<span>ДИСПЛЕЙ</span> Діагональ дисплея	14"<br> Покриття дисплея	матове<br> Роздільна здатність	1920 x 1080<br> <span>ПРОЦЕСОР</span> Тип процесора	Intel Core i7-8550U<br> Частота процесора	1.8 - 4.0 ГГц<br> Кількість ядер	4 <br>ОПЕРАТИВНА ПАМ\'ЯТЬ	8 Гб <br>ТИП ОПЕРАТИВНОЇ ПАМ\'ЯТІ	<br>DDR4 <span>ВІДЕО</span> Відеокарта	nVidia GeForce GTX <br> Модель відеокарти	інтегрований Intel UHD Graphics 620 <span>ВІНЧЕСТЕР</span> Тип вбудованої пам’яті	HDD , SSD <br>Об\'єм HDD	1 Тб <br>Об’єм SSD	256 Гб <span>ОПЕРАЦІЙНА СИСТЕМА</span>	Windows 10 Pro <span>БЕЗПРОВІДНІ МОЖЛИВОСТІ</span>	Wi-Fi 802.11 ac, <br>Bluetooth 4.2r відеокарти	інтегрований Intel UHD Graphics 620 <span>ВІНЧЕСТЕР</span> Тип вбудованої пам’яті	HDD , SSD <br>Об\'єм HDD	1 Тб <br>Об’єм SSD	256 Гб <span>ОПЕРАЦІЙНА СИСТЕМА</span>	Windows 10 Pro <span>БЕЗПРОВІДНІ МОЖЛИВОСТІ</span>	Wi-Fi 802.11 ac, <br>Bluetooth 4.2r'
},
{id:6,
 name:'HP 250 G6',
 category:'Ноутбуки',
 price: 10499,
 rank: 7.7,
 desc:'Екран 15.6" (1366x768) HD, матовий / Intel Core i3-6006U (2.0 ГГц) / RAM 4 ГБ / HDD 500 ГБ / Intel HD Graphics 520 / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / Windows 10 Pro 64bit / 1.86 кг / чорний',
 img:'p7',
 proprt: '<span>ДИСПЛЕЙ</span> Діагональ дисплея	14"<br> Покриття дисплея	матове<br> Роздільна здатність	1920 x 1080<br> <span>ПРОЦЕСОР</span> Тип процесора	Intel Core i7-8550U<br> Частота процесора	1.8 - 4.0 ГГц<br> Кількість ядер	4 <br>ОПЕРАТИВНА ПАМ\'ЯТЬ	8 Гб <br>ТИП ОПЕРАТИВНОЇ ПАМ\'ЯТІ	<br>DDR4 <span>ВІДЕО</span> Відеокарта	nVidia GeForce GTX <br> Модель відеокарти	інтегрований Intel UHD Graphics 620 <span>ВІНЧЕСТЕР</span> Тип вбудованої пам’яті	HDD , SSD <br>Об\'єм HDD	1 Тб <br>Об’єм SSD	256 Гб <span>ОПЕРАЦІЙНА СИСТЕМА</span>	Windows 10 Pro <span>БЕЗПРОВІДНІ МОЖЛИВОСТІ</span>	Wi-Fi 802.11 ac, <br>Bluetooth 4.2r відеокарти	інтегрований Intel UHD Graphics 620 <span>ВІНЧЕСТЕР</span> Тип вбудованої пам’яті	HDD , SSD <br>Об\'єм HDD	1 Тб <br>Об’єм SSD	256 Гб <span>ОПЕРАЦІЙНА СИСТЕМА</span>	Windows 10 Pro <span>БЕЗПРОВІДНІ МОЖЛИВОСТІ</span>	Wi-Fi 802.11 ac, <br>Bluetooth 4.2r'
},
{id:7,
 name:'Apple iMac 27" Pro',
 category:'Моноблоки',
 price: 139999,
 rank: 7.9,
 desc:'Экран 27" IPS Retina (5120x2880) 5K LED / Intel Xeon W (3.2 - 4.2 ГГц) / RAM 32 ГБ / SSD 1 ТБ / AMD Radeon Pro Vega 56, 8 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / кардридер / веб-камера / macOS High Sierra / 9.7 кг / космический серый / клавиатура + мышь',
 img:'p8',
 proprt: '<span>ДИСПЛЕЙ</span> Діагональ дисплея	14"<br> Покриття дисплея	матове<br> Роздільна здатність	1920 x 1080<br> <span>ПРОЦЕСОР</span> Тип процесора	Intel Core i7-8550U<br> Частота процесора	1.8 - 4.0 ГГц<br> Кількість ядер	4 <br>ОПЕРАТИВНА ПАМ\'ЯТЬ	8 Гб <br>ТИП ОПЕРАТИВНОЇ ПАМ\'ЯТІ	<br>DDR4 <span>ВІДЕО</span> Відеокарта	nVidia GeForce GTX <br> Модель відеокарти	інтегрований Intel UHD Graphics 620 <span>ВІНЧЕСТЕР</span> Тип вбудованої пам’яті	HDD , SSD <br>Об\'єм HDD	1 Тб <br>Об’єм SSD	256 Гб <span>ОПЕРАЦІЙНА СИСТЕМА</span>	Windows 10 Pro <span>БЕЗПРОВІДНІ МОЖЛИВОСТІ</span>	Wi-Fi 802.11 ac, <br>Bluetooth 4.2r відеокарти	інтегрований Intel UHD Graphics 620 <span>ВІНЧЕСТЕР</span> Тип вбудованої пам’яті	HDD , SSD <br>Об\'єм HDD	1 Тб <br>Об’єм SSD	256 Гб <span>ОПЕРАЦІЙНА СИСТЕМА</span>	Windows 10 Pro <span>БЕЗПРОВІДНІ МОЖЛИВОСТІ</span>	Wi-Fi 802.11 ac, <br>Bluetooth 4.2r'
},
{id:8,
 name:'HP Envy',
 category:'Моноблоки',
 price: 63849,
 rank: 8.2,
 desc:'Екран 27" IPS (3840x2160) UHD, Multi-touch/ Intel Core i7-7700T (2.9 - 3.8 ГГц)/ RAM 8 ГБ/ HDD 1 ТБ + SSD 256 ГБ/ nVidia GeForce GTX 950M, 4 ГБ/ без ОД/ LAN/ Wi-Fi/ Bluetooth/ кардридер/ веб-камера/ Windows 10 Home 64bit/ 11 кг/ сірий/ клавіатура + миша',
 img:'p9',
 proprt: '<span>ДИСПЛЕЙ</span> Діагональ дисплея	14"<br> Покриття дисплея	матове<br> Роздільна здатність	1920 x 1080<br> <span>ПРОЦЕСОР</span> Тип процесора	Intel Core i7-8550U<br> Частота процесора	1.8 - 4.0 ГГц<br> Кількість ядер	4 <br>ОПЕРАТИВНА ПАМ\'ЯТЬ	8 Гб <br>ТИП ОПЕРАТИВНОЇ ПАМ\'ЯТІ	<br>DDR4 <span>ВІДЕО</span> Відеокарта	nVidia GeForce GTX <br> Модель відеокарти	інтегрований Intel UHD Graphics 620 <span>ВІНЧЕСТЕР</span> Тип вбудованої пам’яті	HDD , SSD <br>Об\'єм HDD	1 Тб <br>Об’єм SSD	256 Гб <span>ОПЕРАЦІЙНА СИСТЕМА</span>	Windows 10 Pro <span>БЕЗПРОВІДНІ МОЖЛИВОСТІ</span>	Wi-Fi 802.11 ac, <br>Bluetooth 4.2r відеокарти	інтегрований Intel UHD Graphics 620 <span>ВІНЧЕСТЕР</span> Тип вбудованої пам’яті	HDD , SSD <br>Об\'єм HDD	1 Тб <br>Об’єм SSD	256 Гб <span>ОПЕРАЦІЙНА СИСТЕМА</span>	Windows 10 Pro <span>БЕЗПРОВІДНІ МОЖЛИВОСТІ</span>	Wi-Fi 802.11 ac, <br>Bluetooth 4.2r'
},
{id:9,
 name:'Asus Zen AiO',
 category:'Моноблоки',
 price: 57999,
 rank: 7.7,
 desc:'Екран 23.8" (1920x1080) Full HD, Multi-touch / Intel Core i7-7700HQ (2.8 - 3.8 ГГц) / RAM 32 ГБ / HDD 1 ТБ + SSD 512 ГБ / nVidia GeForce GTX 1050, 4 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / кардридер / веб-камера / Windows 10 Pro 64bit / 5 кг / сріблястий / клавіатура + миша',
 img:'p10',
 proprt: '<span>ДИСПЛЕЙ</span> Діагональ дисплея	14"<br> Покриття дисплея	матове<br> Роздільна здатність	1920 x 1080<br> <span>ПРОЦЕСОР</span> Тип процесора	Intel Core i7-8550U<br> Частота процесора	1.8 - 4.0 ГГц<br> Кількість ядер	4 <br>ОПЕРАТИВНА ПАМ\'ЯТЬ	8 Гб <br>ТИП ОПЕРАТИВНОЇ ПАМ\'ЯТІ	<br>DDR4 <span>ВІДЕО</span> Відеокарта	nVidia GeForce GTX <br> Модель відеокарти	інтегрований Intel UHD Graphics 620 <span>ВІНЧЕСТЕР</span> Тип вбудованої пам’яті	HDD , SSD <br>Об\'єм HDD	1 Тб <br>Об’єм SSD	256 Гб <span>ОПЕРАЦІЙНА СИСТЕМА</span>	Windows 10 Pro <span>БЕЗПРОВІДНІ МОЖЛИВОСТІ</span>	Wi-Fi 802.11 ac, <br>Bluetooth 4.2r відеокарти	інтегрований Intel UHD Graphics 620 <span>ВІНЧЕСТЕР</span> Тип вбудованої пам’яті	HDD , SSD <br>Об\'єм HDD	1 Тб <br>Об’єм SSD	256 Гб <span>ОПЕРАЦІЙНА СИСТЕМА</span>	Windows 10 Pro <span>БЕЗПРОВІДНІ МОЖЛИВОСТІ</span>	Wi-Fi 802.11 ac, <br>Bluetooth 4.2r'
},
{id:10,
 name:'Lenovo IdeaCentre AIO',
 category:'Моноблоки',
 price: 53399,
 rank: 9.0,
 desc:'Екран 27" (3840x2160) Ultra HD, Multi-touch / Intel Core i5-7400T (2.4 - 3.0 ГГц) / RAM 16 ГБ / HDD 2 ТБ + SSD 128 ГБ / nVidia GeForce GTX 950A, 2 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / Windows 10 Home 64bit / 9.5 кг / чорний / клавіатура + миша',
 img:'p11',
 proprt: '<span>ДИСПЛЕЙ</span> Діагональ дисплея	14"<br> Покриття дисплея	матове<br> Роздільна здатність	1920 x 1080<br> <span>ПРОЦЕСОР</span> Тип процесора	Intel Core i7-8550U<br> Частота процесора	1.8 - 4.0 ГГц<br> Кількість ядер	4 <br>ОПЕРАТИВНА ПАМ\'ЯТЬ	8 Гб <br>ТИП ОПЕРАТИВНОЇ ПАМ\'ЯТІ	<br>DDR4 <span>ВІДЕО</span> Відеокарта	nVidia GeForce GTX <br> Модель відеокарти	інтегрований Intel UHD Graphics 620 <span>ВІНЧЕСТЕР</span> Тип вбудованої пам’яті	HDD , SSD <br>Об\'єм HDD	1 Тб <br>Об’єм SSD	256 Гб <span>ОПЕРАЦІЙНА СИСТЕМА</span>	Windows 10 Pro <span>БЕЗПРОВІДНІ МОЖЛИВОСТІ</span>	Wi-Fi 802.11 ac, <br>Bluetooth 4.2r відеокарти	інтегрований Intel UHD Graphics 620 <span>ВІНЧЕСТЕР</span> Тип вбудованої пам’яті	HDD , SSD <br>Об\'єм HDD	1 Тб <br>Об’єм SSD	256 Гб <span>ОПЕРАЦІЙНА СИСТЕМА</span>	Windows 10 Pro <span>БЕЗПРОВІДНІ МОЖЛИВОСТІ</span>	Wi-Fi 802.11 ac, <br>Bluetooth 4.2r'
},
{id:11,
 name:'Artline Gaming G79',
 category:'Моноблоки',
 price: 34980 ,
 rank: 6.8,
 desc:'Екран 27" (1920x1080) Full HD / Intel Core i5-7400 (3.0 - 3.5 ГГц) / RAM 16 ГБ / SSD 250 ГБ + HDD 1 ТБ / nVidia GeForce GTX 1050 Ti, 4 ГБ / без ОД / LAN / Wi-Fi / без ОС / 12 кг / білий',
 img:'p12',
 proprt: ' <span>ПРОЦЕСОР</span> Тип процесора	Intel Core i7-8550U<br> Частота процесора	1.8 - 4.0 ГГц<br> Кількість ядер	4 <br>ОПЕРАТИВНА ПАМ\'ЯТЬ	8 Гб <br>ТИП ОПЕРАТИВНОЇ ПАМ\'ЯТІ	<br>DDR4 <span>ВІДЕО</span> Відеокарта	nVidia GeForce GTX <br> Модель відеокарти	інтегрований Intel UHD Graphics 620 <span>ВІНЧЕСТЕР</span> Тип вбудованої пам’яті	HDD , SSD <br>Об\'єм HDD	1 Тб <br>Об’єм SSD	256 Гб <span>ОПЕРАЦІЙНА СИСТЕМА</span>	Windows 10 Pro <span>БЕЗПРОВІДНІ МОЖЛИВОСТІ</span>	Wi-Fi 802.11 ac, <br>Bluetooth 4.2r відеокарти	інтегрований Intel UHD Graphics 620 <span>ВІНЧЕСТЕР</span> Тип вбудованої пам’яті	HDD , SSD <br>Об\'єм HDD	1 Тб <br>Об’єм SSD	256 Гб <span>ОПЕРАЦІЙНА СИСТЕМА</span>	Windows 10 Pro <span>БЕЗПРОВІДНІ МОЖЛИВОСТІ</span>	Wi-Fi 802.11 ac, <br>Bluetooth 4.2r'
},
{id:12,
 name:'Everest 1040',
 category:'Системні блоки',
 price: 12960,
 rank: 7.7,
 desc:'Intel Core i5-7400 (3.0 - 3.5 ГГц) / RAM 8 ГБ / HDD 1 ТБ / Intel HD Graphics 630 / без ОД / LAN / кардридер / без ОС',
 img:'p13',
 proprt: '<span>ДИСПЛЕЙ</span> Діагональ дисплея	14"<br> Покриття дисплея	матове<br> Роздільна здатність	1920 x 1080<br> <span>ПРОЦЕСОР</span> Тип процесора	Intel Core i7-8550U<br> Частота процесора	1.8 - 4.0 ГГц<br> Кількість ядер	4 <br>ОПЕРАТИВНА ПАМ\'ЯТЬ	8 Гб <br>ТИП ОПЕРАТИВНОЇ ПАМ\'ЯТІ	<br>DDR4 <span>ВІДЕО</span> Відеокарта	nVidia GeForce GTX <br> Модель відеокарти	інтегрований Intel UHD Graphics 620 <span>ВІНЧЕСТЕР</span> Тип вбудованої пам’яті	HDD , SSD <br>Об\'єм HDD	1 Тб <br>Об’єм SSD	256 Гб <span>ОПЕРАЦІЙНА СИСТЕМА</span>	Windows 10 Pro <span>БЕЗПРОВІДНІ МОЖЛИВОСТІ</span>	Wi-Fi 802.11 ac, <br>Bluetooth 4.2r відеокарти	інтегрований Intel UHD Graphics 620 <span>ВІНЧЕСТЕР</span> Тип вбудованої пам’яті	HDD , SSD <br>Об\'єм HDD	1 Тб <br>Об’єм SSD	256 Гб <span>ОПЕРАЦІЙНА СИСТЕМА</span>	Windows 10 Pro <span>БЕЗПРОВІДНІ МОЖЛИВОСТІ</span>	Wi-Fi 802.11 ac, <br>Bluetooth 4.2r'
},
{id: 13,
 name:'Everest 4060',
 category:'Системні блоки',
 price: 12899,
 rank: 5.5,
 desc:'Intel Pentium G4600 (3.6 ГГц) / RAM 8 ГБ / HDD 1 ТБ / nVidia GeForce GT1030, 2 ГБ / DVD±RW / LAN / без ОС',
 img:'p14',
 proprt: '<span>ДИСПЛЕЙ</span> Діагональ дисплея	14"<br> Покриття дисплея	матове<br> Роздільна здатність	1920 x 1080<br> <span>ПРОЦЕСОР</span> Тип процесора	Intel Core i7-8550U<br> Частота процесора	1.8 - 4.0 ГГц<br> Кількість ядер	4 <br>ОПЕРАТИВНА ПАМ\'ЯТЬ	8 Гб <br>ТИП ОПЕРАТИВНОЇ ПАМ\'ЯТІ	<br>DDR4 <span>ВІДЕО</span> Відеокарта	nVidia GeForce GTX <br> Модель відеокарти	інтегрований Intel UHD Graphics 620 <span>ВІНЧЕСТЕР</span> Тип вбудованої пам’яті	HDD , SSD <br>Об\'єм HDD	1 Тб <br>Об’єм SSD	256 Гб <span>ОПЕРАЦІЙНА СИСТЕМА</span>	Windows 10 Pro <span>БЕЗПРОВІДНІ МОЖЛИВОСТІ</span>	Wi-Fi 802.11 ac, <br>Bluetooth 4.2r відеокарти	інтегрований Intel UHD Graphics 620 <span>ВІНЧЕСТЕР</span> Тип вбудованої пам’яті	HDD , SSD <br>Об\'єм HDD	1 Тб <br>Об’єм SSD	256 Гб <span>ОПЕРАЦІЙНА СИСТЕМА</span>	Windows 10 Pro <span>БЕЗПРОВІДНІ МОЖЛИВОСТІ</span>	Wi-Fi 802.11 ac, <br>Bluetooth 4.2r'
},
{id: 14,
 name:'IT-BlokRyzen 3',
 category:'Системні блоки',
 price: 12898,
 rank: 8.8,
 desc:'Ryzen 3 1200|4 ядра|3.1 ГГц|ОЗУ 8 Гб|HDD 1000 Гб|GeForce GT 1030 2 Гб',
 img:'p15',
 proprt: '<span>ДИСПЛЕЙ</span> Діагональ дисплея	14"<br> Покриття дисплея	матове<br> Роздільна здатність	1920 x 1080<br> <span>ПРОЦЕСОР</span> Тип процесора	Intel Core i7-8550U<br> Частота процесора	1.8 - 4.0 ГГц<br> Кількість ядер	4 <br>ОПЕРАТИВНА ПАМ\'ЯТЬ	8 Гб <br>ТИП ОПЕРАТИВНОЇ ПАМ\'ЯТІ	<br>DDR4 <span>ВІДЕО</span> Відеокарта	nVidia GeForce GTX <br> Модель відеокарти	інтегрований Intel UHD Graphics 620 <span>ВІНЧЕСТЕР</span> Тип вбудованої пам’яті	HDD , SSD <br>Об\'єм HDD	1 Тб <br>Об’єм SSD	256 Гб <span>ОПЕРАЦІЙНА СИСТЕМА</span>	Windows 10 Pro <span>БЕЗПРОВІДНІ МОЖЛИВОСТІ</span>	Wi-Fi 802.11 ac, <br>Bluetooth 4.2r відеокарти	інтегрований Intel UHD Graphics 620 <span>ВІНЧЕСТЕР</span> Тип вбудованої пам’яті	HDD , SSD <br>Об\'єм HDD	1 Тб <br>Об’єм SSD	256 Гб <span>ОПЕРАЦІЙНА СИСТЕМА</span>	Windows 10 Pro <span>БЕЗПРОВІДНІ МОЖЛИВОСТІ</span>	Wi-Fi 802.11 ac, <br>Bluetooth 4.2r'
},
{id:15,
 name:'ARTLINE Gaming X46v06',
 category:'Системні блоки',
 price: 12999,
 rank: 7.9,
 desc:'AMD Athlon II X4 860K (3.7 ГГц)/RAM 8 ГБ/HDD 1 ТБ/GeForce GTX1050, 2 ГБ/DVD +/- RW/LAN/без ОС',
 img:'p16',
 proprt: '<span>ДИСПЛЕЙ</span> Діагональ дисплея	14"<br> Покриття дисплея	матове<br> Роздільна здатність	1920 x 1080<br> <span>ПРОЦЕСОР</span> Тип процесора	Intel Core i7-8550U<br> Частота процесора	1.8 - 4.0 ГГц<br> Кількість ядер	4 <br>ОПЕРАТИВНА ПАМ\'ЯТЬ	8 Гб <br>ТИП ОПЕРАТИВНОЇ ПАМ\'ЯТІ	<br>DDR4 <span>ВІДЕО</span> Відеокарта	nVidia GeForce GTX <br> Модель відеокарти	інтегрований Intel UHD Graphics 620 <span>ВІНЧЕСТЕР</span> Тип вбудованої пам’яті	HDD , SSD <br>Об\'єм HDD	1 Тб <br>Об’єм SSD	256 Гб <span>ОПЕРАЦІЙНА СИСТЕМА</span>	Windows 10 Pro <span>БЕЗПРОВІДНІ МОЖЛИВОСТІ</span>	Wi-Fi 802.11 ac, <br>Bluetooth 4.2r відеокарти	інтегрований Intel UHD Graphics 620 <span>ВІНЧЕСТЕР</span> Тип вбудованої пам’яті	HDD , SSD <br>Об\'єм HDD	1 Тб <br>Об’єм SSD	256 Гб <span>ОПЕРАЦІЙНА СИСТЕМА</span>	Windows 10 Pro <span>БЕЗПРОВІДНІ МОЖЛИВОСТІ</span>	Wi-Fi 802.11 ac, <br>Bluetooth 4.2r'
},
{id:16,
 name:' Samsung Curved 23.5" ',
 category:'Монітори',
 price: 5099,
 rank: 9.9,
 desc:'Інтерфейси: VGA,  HDMI Тип матриці: VA Час реакції матриці: 4 мс, Яскравість дисплея: 250 кд/м² , Контрастність дисплея: 3000:1 , Особливості: Вигнутий екран',
 img:'p17',
 proprt: 'Діагональ дисплея 23.5"<br>Максимальна роздільна здатність дисплея  1920 x 1080<br>Тип матриці  VA<br>Час реакції матриці  4 мс<br>Вбудований тюнер Немає<br>Інтерфейси HDMI , VGA<br>Яскравість дисплея 250 кд/м²<br>Частота оновлення 60 Гц<br>Контрастність дисплея 3000:1<br>Особливості Вигнутий екран<br>Відношення сторін 16:9<br>Кут огляду горизонтальний 178°'
},
{id:17,
 name:' LG 27MP68VQ-P 27"',
 category:'Монітори',
 price: 6699,
 rank: 7.1,
 desc:'Інтерфейси: VGA,  HDMI Тип матриці: VA Час реакції матриці: 4 мс, Яскравість дисплея: 250 кд/м² , Контрастність дисплея: 3000:1 , Особливості: Вигнутий екран',
 img:'p18',
 proprt: 'Діагональ дисплея 23.5"<br>Максимальна роздільна здатність дисплея  1920 x 1080<br>Тип матриці  VA<br>Час реакції матриці  4 мс<br>Вбудований тюнер Немає<br>Інтерфейси HDMI , VGA<br>Яскравість дисплея 250 кд/м²<br>Частота оновлення 60 Гц<br>Контрастність дисплея 3000:1<br>Особливості Вигнутий екран<br>Відношення сторін 16:9<br>Кут огляду горизонтальний 178°'
},
{id:18,
 name:' Samsung Curved 34"',
 category:'Монітори',
 price: 22999,
 rank: 9.1,
 desc:'Інтерфейси: VGA,  HDMI Тип матриці: VA Час реакції матриці: 4 мс, Яскравість дисплея: 250 кд/м² , Контрастність дисплея: 3000:1 , Особливості: Вигнутий екран',
 img:'p19',
 proprt: 'Діагональ дисплея 23.5"<br>Максимальна роздільна здатність дисплея  1920 x 1080<br>Тип матриці  VA<br>Час реакції матриці  4 мс<br>Вбудований тюнер Немає<br>Інтерфейси HDMI , VGA<br>Яскравість дисплея 250 кд/м²<br>Частота оновлення 60 Гц<br>Контрастність дисплея 3000:1<br>Особливості Вигнутий екран<br>Відношення сторін 16:9<br>Кут огляду горизонтальний 178°'
},
{id:19,
 name:' Миша Razer Mamba ',
 category:'Клавіатури та миші',
 price: 3999,
 rank: 10,
 desc:'Тип датчика: Лазерний + Оптичний Інтерфейс: Wireless+USB Кількість кнопок: 9 Особливості: Вбудований акумулятор Сумісність з ОС: Microsoft Windows,  Mac OS',
 img:'p20',
 proprt: '<span>Джерело живлення</span>Пропрієтарний акумулятор<span>Додаткові функції</span>Оптичний сенсор: Roccat Owl-Eye з 12000dpi<br>Дротова/бездротова комбінована миша<br>1000 mA*h вбудований Li-Ion акумулятор<br>2.4 ГГц бездротовий передавач<br>Частота опитування: 1000 Гц<br>Прискорення: 50 G<br>Максимальна швидкість: 250 ips<br>72 МГц ARM Cortex-M0 (миша та зарядна станція)<br>Налаштовувана відстань старту<br>32-бітний процесор для швидкого виконання макросів<br>1.8 м кабель microUSB - USB<br>Тип датчика<br>Оптичний'
},
{id:20,
 name:' Миша Roccat Leadr Wireless',
 category:'Клавіатури та миші',
 price: 3999,
 rank: 9.3,
 desc:'Інтерфейси: VGA,  HDMI Тип матриці: VA Час реакції матриці: 4 мс, Яскравість дисплея: 250 кд/м² , Контрастність дисплея: 3000:1 , Особливості: Вигнутий екран',
 img:'p21',
 proprt: '<span>Джерело живлення</span>Пропрієтарний акумулятор<span>Додаткові функції</span>Оптичний сенсор: Roccat Owl-Eye з 12000dpi<br>Дротова/бездротова комбінована миша<br>1000 mA*h вбудований Li-Ion акумулятор<br>2.4 ГГц бездротовий передавач<br>Частота опитування: 1000 Гц<br>Прискорення: 50 G<br>Максимальна швидкість: 250 ips<br>72 МГц ARM Cortex-M0 (миша та зарядна станція)<br>Налаштовувана відстань старту<br>32-бітний процесор для швидкого виконання макросів<br>1.8 м кабель microUSB - USB<br>Тип датчика<br>Оптичний'
},
{id:21,
 name:' Клавіатура  Apex M750 QX2',
 category:'Клавіатури та миші',
 price: 4799,
 rank: 6.8,
 desc:'Кількість кнопок: 104<br>Інтерфейс: USB<br>Тип упаковки: Retail<br>Підсвітка клавіш: Є<br>Сумісність з ОС: <br>Microsoft Windows,  Mac OS',
 img:'p22',
 proprt: 'Кількість кнопок 104<br>Інтерфейс USB<br>Тип упаковки Retail<br>Тип клавіатури Механічні<br>Призначення Геймерські'
},
{id:22,
 name:' Apple Magic Keyboard Bluetooth',
 category:'Клавіатури та миші',
 price:4090,
 rank: 9.7,
 desc:'Кількість кнопок: 104<br>Інтерфейс: USB<br>Тип упаковки: Retail<br>Підсвітка клавіш: Є<br>Сумісність з ОС: <br>  Mac OS',
 img:'p23',
 proprt: 'Кількість кнопок 104<br>Інтерфейс USB<br>Тип упаковки Retail<br>Тип клавіатури Механічні<br>Призначення Стандарт'
},
{id:23,
 name:' MSI GeForce GTX 1080',
 category:'Комплектуючі',
 price:32999,
 rank: 9.5,
 desc:'Графічний чип: GeForce GTX 1080 Ti Обсяг пам\'яті: 11 ГБ Розрядність шини пам\'яті: 352 біт Тип пам\'яті: GDDR5X Тип системи охолодження: Активна',
 img:'p24',
 proprt: 'Графічний чип GeForce GTX 1080 Ti<br>Частота пам\'яті 11124 МГц<br>Обсяг пам\'яті 11 ГБ<br>Розрядність шини пам\'яті 352 біт<br>Тип пам\'яті GDDR5X<br>Роз\'єми DVI DisplayPort HDMI<br>Інтерфейс PCI-Express x16 3.0'
},
{id:24,
 name:' Intel Core i7-8700K',
 category:'Комплектуючі',
 price:11150,
 rank: 8.8,
 desc:'Покоління процесора Intel: Coffee Lake (восьме) Кількість ядер: 6 Інтегрована графіка: Intel UHD Graphics 630 Внутрішня тактова частота: 3700 МГц Обсяг кеш пам\'яті 3 рівня: 12 МБ',
 img:'p25',
 proprt: 'Покоління процесора Intel: Coffee Lake (восьме)<br> Кількість ядер: 6<br> Інтегрована графіка: Intel UHD Graphics 630<br> Внутрішня тактова частота: 3700 МГц<br> Обсяг кеш пам\'яті 3 рівня: 12 МБ'
},
{id:25,
 name:' Samsung 860 Evo-Series 4TB 2.5"',
 category:'Комплектуючі',
 price:42999,
 rank: 10,
 desc:'Обсяг/Об\'єм: 4 ТБ Формфактор: 2.5" Інтерфейс: SATAIII',
 img:'p26',
 proprt: 'Обсяг/Об\'єм 4 ТБ <br>Швидкість читання до 550 МБ/сек<br>Швидкість запису до 520 МБ/сек<br><span>Енергоспоживання</span>Середня споживана потужність: 3.0 Вт<br>Макс. значення: 4.0 Вт (режим Burst)<br>Формфактор 2.5"<br>Час напрацювання на відмову 1.5 млн годин<br>Стійкість до ударних навантажень 1500 G впродовж 0.5 мс<br>Тип елементів пам\'яті V-NAND (TLC)<br>Інтерфейс SATAIII'
},

{id:26,
 name:' Seasonic Prime Ultra Titanium',
 category:'Комплектуючі',
 price:10635,
 rank: 8.4,
 desc:'Потужність: 1000 Вт Особливі властивості: Модульні (з відстібними дротами) Тип роз\'єму підключення до материнської плати: ATX 20+4pin Охолодження: Вентилятор 135 мм',
 img:'p27',
 proprt: 'Потужність: 1000 Вт <br>Особливі властивості: Модульні (з відстібними дротами)<br> Тип роз\'єму підключення до материнської плати: ATX 20+4pin <br>Охолодження: Вентилятор 135 мм'
},
{id:27,
 name:'Asus Maximus IX Extreme ',
 category:'Комплектуючі',
 price:17999,
 rank: 8.9,
 desc:'Тип роз\'єму: Socket 1151 Формфактор: EATX Підтримка пам\'яті: 4 x DDR4 DIMM; Кількість каналів 2 Підтримка процесорів: Intel Core i7/Core i5/Core i3/Pentium/Celeron 6-го/7-го покоління під сокет LGA1151',
 img:'p28',
 proprt: 'Тип роз\'єму: Socket 1151 <br>Формфактор: EATX Підтримка пам\'яті: 4 x DDR4 DIMM;<br> Кількість каналів 2 Підтримка процесорів: Intel Core i7/Core i5/Core i3/Pentium/Celeron 6-го/7-го покоління під сокет LGA1151'
},
{id:28,
 name:' Oхолодження NZXT Kraken M22',
 category:'Комплектуючі',
 price:4999,
 rank: 9.2,
 desc:'Сумісність: Сокети Intel: 1151, 1150, 1155, 1156, 1366, 2011, 2011-3, 2066 Сокети AMD: FM2+, FM2, FM1, AM4, AM3+, AM3, AM2+, AM2 Розмір вентилятора: 140 мм Тип: Рідинне охолодження',
 img:'p29',
 proprt: 'Сумісність: Сокети Intel: 1151, 1150, 1155, 1156, 1366, 2011, 2011-3, 2066 <br>Сокети AMD: FM2+, FM2, FM1, AM4, AM3+, AM3, AM2+, AM2<br> Розмір вентилятора: 140 мм <br>Тип: Рідинне охолодження'
},
     {id:29,
 name:' Корпус QUBE Mirror Black ',
 category:'Комплектуючі',
 price:2385,
 rank: 7.9,
 desc:'Форм-фактор материнської плати: ATX,  microATX,  Mini-ITX Тип корпусу: Miditower',
 img:'p30',
 proprt: 'Форм-фактор материнської плати: ATX,  microATX,  Mini-ITX<br> Тип корпусу: Miditower<br>Розміри 450 x 210 x 520 мм <br>Вага 10.5 кг'
},
            
        
            
         {id:30,
 name:' Kingston DDR3-1600 4096MB ',
 category:'Комплектуючі',
 price:1190,
 rank: 9.4,
 desc:'Обсяг пам\'яті: 4 ГБ Тип пам\'яті: DDR3 SDRAM Частота пам\'яті: 1600 МГц Схема таймінгів пам\'яті: 10-10-10',
 img:'p31',
 proprt: 'Обсяг пам\'яті: 4 ГБ <br>Тип пам\'яті: DDR3 SDRAM <br>Частота пам\'яті: 1600 МГц <br>Схема таймінгів пам\'яті: 10-10-10'
},       
            
            
            
            
            
            
            ],
        vname:'',
        vcategory: '',
        vprice: 0,
        vrank: 0,
        vdesc: '',
        vchar: '',
        vcount: 1,
        vsum: 0,
        vimg: '',
        vproprt: ''
        
    },
   methods: {
     details: function(e) {
         
         t=this;
         t.vcount=1;
         t.showMes=false;
         t.showCov = true ;
         t.table = e;
         t.vname = t.item[e].name;
         t.vcategory = t.item[e].category;
         t.vprice = t.item[e].price;
         t.vrank = t.item[e].rank;
         t.vdesc = t.item[e].desc;
         t.vchar = t.item[e].char;
         t.vimg = t.item[e].img;
         t.vproprt = t.item[e].proprt;
     },
     pr: function() {
                 this.vsum=   this.vcount * this.vprice; 

        return   this.vcount * this.vprice;
        },
    show: function() {
        this.showMes=true;
        this.showCov=false;
    }   
    
   },
    computed: {
       
    }
})
