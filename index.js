const baseCurrencies = [
  { id: 1, name: "TRY" },
  { id: 2, name: "BTC" },
  { id: 3, name: "ETH" },
  { id: 4, name: "USDT" },
  { id: 5, name: "BUSDT" },
];

const categories = [
  { id: 1, name: "Yapay Zeka" },
  { id: 2, name: "Veritabani" },
  { id: 3, name: "Spor" },
  { id: 4, name: "Defi" },
  { id: 5, name: "Metaverse" },
];

const currency_list = [
  {
    name: "Cardano",
    code: "ADA",
    price: 1.2,
    base_currency: "TRY",
    category: [1, 4, 5],
    isActiveResell: true,
    isNew: false,
    isDelist: false,
  },
  {
    name: "Solana",
    code: "SOL",
    price: 1.2,
    base_currency: "ETH",
    category: [1, 2, 5],
    isActiveResell: true,
    isNew: false,
    isDelist: false,
  },
  {
    name: "Polkadot",
    code: "DOT",
    price: 1.2,
    base_currency: "ETH",
    category: [1, 4, 5],
    isActiveResell: true,
    isNew: false,
    isDelist: true,
  },
  {
    name: "Marlin",
    code: "POND",
    price: 1.2,
    base_currency: "BTC",
    category: [1, 4, 5],
    isActiveResell: true,
    isNew: false,
    isDelist: false,
  },
  {
    name: "Ripple",
    code: "XRP",
    price: 1.2,
    base_currency: "TRY",
    category: [1, 2, 4],
    isActiveResell: true,
    isNew: false,
    isDelist: false,
  },
  {
    name: "Stellar",
    code: "XLM",
    price: 1.2,
    base_currency: "TRY",
    category: [2, 3, 5],
    isActiveResell: true,
    isNew: true,
    isDelist: false,
  },
  {
    name: "BinanceCoin",
    code: "BNB",
    price: 1.2,
    base_currency: "TRY",
    category: [1, 2, 3],
    isActiveResell: true,
    isNew: false,
    isDelist: false,
  },
  {
    name: "Fantom",
    code: "FTM",
    price: 1.2,
    base_currency: "ETH",
    category: [1, 4, 5],
    isActiveResell: true,
    isNew: true,
    isDelist: false,
  },
  {
    name: "Harmony",
    code: "ONE",
    price: 1.2,
    base_currency: "TRY",
    category: [1, 2, 5],
    isActiveResell: true,
    isNew: true,
    isDelist: true,
  },
  {
    name: "Verasity",
    code: "VRA",
    price: 1.2,
    base_currency: "TRY",
    category: [3, 4, 5],
    isActiveResell: true,
    isNew: false,
    isDelist: true,
  },
  {
    name: "Torum",
    code: "XTM",
    price: 1.2,
    base_currency: "TRY",
    category: [1, 4, 5],
    isActiveResell: true,
    isNew: false,
    isDelist: false,
  },
];

const currency = {
  name: "Cardano",
  code: "ADA",
  price: 1.2,
  base_currency: "TRY",
  category: [1, 4, 5],
  isActiveResell: true,
  isNew: false,
  isDelist: false,
};

// 1- Gonderilen base currency degerini iceren tum currencyleri donen method.
// 2- Yeni listelenen tum currencyleri donen bir method. (base currency ile beraber)
// 3- Delist tum currencyleri donen bir method. (base currency ile beraber)
// 4- Search methodu =>  name ile arama. (base currency ile beraber)
// 5- Gonderilen listeyi categorylerine gore filtre eden bir method.



////11111111111



currency_list.forEach((item) => {
  console.log(item);
});

const filterCurrencyListWithBaseCurrencyCode = (baseCurrency) => {
  return currency_list.filter(item => item.base_currency=baseCurrency);
};

console.log(1,filterCurrencyListWithBaseCurrencyCode("BTC"));
console.log(2,filterCurrencyListWithBaseCurrencyCode("ETH"));
console.log(3,filterCurrencyListWithBaseCurrencyCode("TRY"));



//////22222223333333

let delistArr = [];
currency_list.map((item) => {
 
 if(item.isNew && item.isDelist) {
   delistArr.push(item);
 }
  console.log(delistArr);
  
  
});



////444444444

var searchCoin =  currency_list.filter(
  
  function(currency_list) {
  return currency_list.name.includes("To");
});

console.log(4,searchCoin);





//555555555555555 


var searchCat =  currency_list.filter(
  
  function(currency_list) {
  return currency_list.category.includes(1);
});

console.log(5,searchCat);
