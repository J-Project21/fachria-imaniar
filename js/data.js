/* =========================================================
   LaidBack Restaurant – data.js
   Menu data store
   ========================================================= */

const MENU_DATA = [
  {
    id: 1,
    name: 'Nasi Ayam Kare',
    category: 'Main Course',
    price: 45000,
    image: 'images/ayamkare.PNG',
    ingredients: ['Nasi', 'Ayam', 'Bumbu Kare', 'Daun Salam'],
    desc: 'Nasi Ayam Kare LaidBack dengan bumbu rempah pilihan yang kaya cita rasa, dipadukan dengan ayam kampung yang empuk dan nasi pulen.'
  },
  {
    id: 2,
    name: 'Mie Ayam Spesial',
    category: 'Main Course',
    price: 38000,
    image: 'images/mieayam.PNG',
    ingredients: ['Mie Telur', 'Ayam Cincang', 'Bakso', 'Pangsit'],
    desc: 'Mie ayam segar dengan topping ayam berbumbu gurih dan bakso pilihan, disajikan dengan kuah kaldu yang kaya rasa.'
  },
  {
    id: 3,
    name: 'Nasi Goreng Spesial',
    category: 'Main Course',
    price: 46000,
    image: 'images/nasigoreng.PNG',
    ingredients: ['Telur', 'Ayam Sausage', 'Edamame', 'Tobiko'],
    desc: 'Nasi goreng signature LaidBack dengan bahan premium. Setiap butir nasi terlumuri bumbu rahasia yang menghasilkan cita rasa unik.'
  },
  {
    id: 4,
    name: 'Sate Madura',
    category: 'Main Course',
    price: 40000,
    image: 'images/sate.PNG',
    ingredients: ['Daging Sapi', 'Bumbu Kacang', 'Lontong', 'Acar'],
    desc: 'Sate Madura otentik dengan daging pilihan yang dibakar sempurna, dilengkapi bumbu kacang kaya rasa dan lontong kenyal.'
  },
  {
    id: 5,
    name: 'Sop Buntut',
    category: 'Main Course',
    price: 55000,
    image: 'images/sopbuntut.PNG',
    ingredients: ['Buntut Sapi', 'Kentang', 'Wortel', 'Buncis'],
    desc: 'Sop buntut premium dengan kaldu bening yang gurih, dimasak perlahan hingga daging menjadi sangat empuk dan lezat.'
  },
  {
    id: 6,
    name: 'Tongseng Ayam',
    category: 'Main Course',
    price: 42000,
    image: 'images/tongsengayam.PNG',
    ingredients: ['Ayam', 'Kol', 'Tomat', 'Bumbu Tongseng'],
    desc: 'Tongseng ayam dengan bumbu rempah khas yang hangat. Perpaduan sempurna antara ayam lembut dan kuah tongseng gurih.'
  },
  {
    id: 7,
    name: 'Honolulu',
    category: 'Drinks Non Coffee',
    price: 35000,
    image: 'images/honolulu.PNG',
    ingredients: ['Served With Tiki Glass'],
    desc: 'Minuman tropis segar yang ikonik, disajikan dalam gelas tiki khas. Perpaduan rasa buah-buahan tropis yang menyegarkan.'
  },
  {
    id: 8,
    name: 'Cinema Latte',
    category: 'Drinks Coffee',
    price: 28000,
    image: 'images/cinamelatte.PNG',
    ingredients: ['Espresso', 'Susu Segar', 'Karamel', 'Vanilla'],
    desc: 'Latte spesial dengan espresso pilihan dan susu segar. Sentuhan karamel dan vanilla menciptakan cita rasa yang unik dan khas.'
  },
  {
    id: 9,
    name: 'Nahua',
    category: 'Drinks Non Coffee',
    price: 32000,
    image: 'images/nahua.PNG',
    ingredients: ['Tiki Style', 'Tropical Blend', 'Fresh Fruit'],
    desc: 'Minuman tiki eksotis dengan perpaduan buah-buahan tropis pilihan. Presentasi memukau dalam gelas tiki ikonik.'
  },
  {
    id: 10,
    name: 'LaidBack Latte',
    category: 'Drinks Coffee',
    price: 30000,
    image: 'images/latte.PNG',
    ingredients: ['Single Origin Espresso', 'Oat Milk', 'Vanilla'],
    desc: 'Latte khas LaidBack menggunakan biji kopi single origin dengan susu oat yang lembut. Rasa seimbang dan sempurna.'
  }
];

/* Category order for display */
const CATEGORY_ORDER = ['Main Course', 'Drinks Coffee', 'Drinks Non Coffee'];

/* Filter tab labels */
const FILTER_TABS = ['Semua', 'Main Course', 'Drinks Coffee', 'Drinks Non Coffee'];

/* Get item by id */
function getMenuItemById(id) {
  return MENU_DATA.find(item => item.id === parseInt(id)) || null;
}

/* Get items by category */
function getMenuByCategory(category) {
  return MENU_DATA.filter(item => item.category === category);
}
