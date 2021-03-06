const TIMEOUT = 500;

const products = [
  {
    id: 1394855,
    title: 'Apple iPhone 11 Pro Max 512 ГБ зеленый',
    desc: 'Смартфон Apple iPhone 11 Pro Max в корпусе из стекла и металла зеленого цвета начинен набором решений и технологий, которые делают его желанным приобретением для самых требовательных пользователей. Устройство оснащено 6.5-дюймовым в диагонали экраном с разрешением до 2688x1242 пикселей и безрамочной конструкцией. Это наделяет изображение высоким качеством и детализацией, а в сочетании с безрамочной конструкцией – безграничностью. Шестиядерный процессор от Apple в сочетании с 4 ГБ оперативной памяти и графическим ускорителем Apple GPU обеспечивают владельцу возможность проходить самые ресурсоемкие мобильные игры. Еще один параметр, заслуживающий особого внимания, – это встроенная память устройства объемом 512 ГБ. По этой характеристике смартфон Apple iPhone 11 Pro Max может конкурировать со многими планшетами и ноутбуками, даже самыми «продвинутыми». Для владельца это означает, что ему никогда не придется пользоваться накопителями и флеш-картами, чтобы уместить в телефоне всю коллекцию фото и видео.',
    price: 116799,
    stock: 20,
    image: 'https://c.dns-shop.ru/thumb/st1/fit/320/250/8e7b48e943a6d43aad3a56fdf0b03d0a/cbf1c3c834c314a0319927e41237d5bf264df3eb369412896ae9f55bbf740e85.jpg',
  },
  {
    id: 102,
    title: 'Apple iPhone 11 64 ГБ фиолетовый',
    desc: 'Производитель позиционирует смартфон Apple iPhone 11 как классическую модель с оптимальным набором функций. Он стал прочнее своих предшественников, получив более устойчивые к повреждениям стекла, высокую ремонтопригодность и защиту от пыли и влаги. Соответствие стандарту IP68 гарантирует сохранение работоспособности устройства даже после получасового погружения в воду на глубину до 2 м. Экран Apple iPhone 11 обладает разрешением 1792x828– не самый большой показатель, но благодаря качеству матрицы заметить какие-то недостатки изображения сложно. Оно яркое, насыщенное и необычайно реалистично. Два динамика Dolby Atmos сопровождают его живым, объемным звуком, превращая игры и просмотр фильмов в истинное удовольствие. Благодаря продвинутому процессору A13 Bionic производительность смартфона выше всяких похвал. Она позволяет проходить самые ресурсоемкие игры на максимальных настройках. Основная камера состоит из двух модулей по 12 Мп и делает отличные снимки при любом освещении.',
    price: 54999,
    stock: 0,
    image: 'https://c.dns-shop.ru/thumb/st4/fit/320/250/79365a63d90ffea2d59404306e6cff54/e896bc09568aa1458edfa640919f60c0e2d4590925ceb07045664135ae03d069.jpg',
  },
  {
    id: 103,
    title: 'Huawei P30 Pro 256 ГБ розовый',
    desc: 'Смартфон Huawei P30 Pro в розовом корпусе из металла и стекла – просто находка для всех, кто связан с производством контента. Благодаря колоссальному показателю памяти – 256 ГБ – в устройстве можно хранить тонны файлов, аудио, видео и фото! Делать снимки, конкурирующие по качеству с выполненными профессионалом, получится на 3-модульную камеру с разрешением до 40 Мп. За безукоризненные селфи и эфиры отвечает вторая камера, на 32 Мп. А смотреть отснятый материал можно на 6.47-дюймовом безрамочном OLED-дисплее с разрешением 2340x1080 пикселей. Еще одно неоспоримое достоинство смартфона Huawei P30 Pro – с ним невозможно остаться без связи и интернета даже в джунглях, что особенно актуально для путешественников. Устройство работает сразу с 2 SIM-камерами в диапазоне сетей 2–4G (LTE). Также стоит отметить, что смартфон с емким несъемным аккумулятором (4200 мАч) поддерживает технологию беспроводной зарядки.',
    price: 44999,
    stock: 2,
    image: 'https://c.dns-shop.ru/thumb/st4/fit/320/250/5aced36afdc9bce8817e9d2003a68c09/234078cd4a1fa2beece4e008cd1578e7094da553ccfd3fba57de76a5d058bbed.jpg',
  },
  {
    id: 104,
    title: 'DEXP AL240 8 ГБ красный',
    desc: 'Смартфон DEXP AL240 собран в корпусе, дизайн которого оформлен с помощью эффектного сочетания красного и черного цветов. Перед вами – универсальная модель от известного производителя. Благодаря поддержке стандарта 3G вы сможете использовать мобильное интернет-подключение. Дома и в общественных местах будет полезно подключение к сетям Wi-Fi. Модуль Bluetooth обеспечит вас возможностью коммутации с большим количеством портативных устройств. Смартфон DEXP AL240 оснащен 4-дюймовым экраном с разрешением 800x480. Можно использовать две SIM-карты. Важным элементом конструкции устройства для многих пользователей станет модуль GPS, обеспечивающий возможность использования навигационных приложений и функции геопозиционирования. Смартфон может работать автономно в течение времени, достигающего 560 ч. Максимальное время автономной работы в режиме разговора – 12 ч. Емкость аккумулятора смартфона равна 2800 мА·ч. Ширина, высота и толщина корпуса портативного устройства равны 63, 126.6 и 12 мм соответственно.',
    price: 2199,
    stock: 125,
    image: 'https://c.dns-shop.ru/thumb/st4/fit/320/250/bce7948f2f538ad521583bdb472c184f/80bea1823b9d9f682eccdd5277fc7df51e9077f7f705e8cb1a96731e033d53e4.jpg',
  },
];

const getAll = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(products);
  }, TIMEOUT);
});

const getOne = (id) => new Promise((resolve, reject) => {
  const result = products.find(item => item.id.toString() === id.toString());
  if (result) {
    setTimeout(() => {
      resolve(result);
    }, TIMEOUT);
  } else {
    reject(null);
  }
});

const getItemsInfoForCart = (cartItemsArray) => new Promise((resolve, reject) => {
  const result = cartItemsArray.map(cartItem => {
    const productInfo = products.find(item => item.id === cartItem.id);
    if (productInfo) {
      return {
        id: productInfo.id,
        title: productInfo.title,
        price: productInfo.price,
        image: productInfo.image,
        count: cartItem.count
      };
    }
  });
  if (result.length >= 1) {
    setTimeout(() => {
      resolve(result);
    }, TIMEOUT);
  } else {
    setTimeout(() => {
      reject(null);
    }, TIMEOUT);
  }
});

export default {
  getAll,
  getOne,
  getItemsInfoForCart,
};