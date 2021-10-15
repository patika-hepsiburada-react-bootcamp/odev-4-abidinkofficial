const cities = [
  {
    id: 1,
    city: "Adana",
    name: "adana"
  },
  {
    id: 2,
    city: "Adıyaman",
    name: "adiyaman"
  },
  {
    id: 3,
    city: "Afyonkarahisar",
    name: "afyonkarahisar"
  },
  {
    id: 4,
    city: "Ağrı",
    name: "agri"
  },
  {
    id: 5,
    city: "Amasya",
    name: "amasya"
  },
  {
    id: 6,
    city: "Ankara",
    name: "ankara"
  },
  {
    id: 7,
    city: "Antalya",
    name: "antalya"
  },
  {
    id: 8,
    city: "Artvin",
    name: "artvin"
  },
  {
    id: 9,
    city: "Aydın",
    name: "aydin"
  },
  {
    id: 10,
    city: "Balıkesir",
    name: "balikesir"
  },
  {
    id: 11,
    city: "Bilecik",
    name: "bilecik"
  },
  {
    id: 12,
    city: "Bingöl",
    name: "bingol"
  },
  {
    id: 13,
    city: "Bitlis",
    name: "bitlis"
  },
  {
    id: 14,
    city: "Bolu",
    name: "bolu"
  },
  {
    id: 15,
    city: "Burdur",
    name: "burdur"
  },
  {
    id: 16,
    city: "Bursa",
    name: "bursa"
  },
  {
    id: 17,
    city: "Çanakkale",
    name: "canakkale"
  },
  {
    id: 18,
    city: "Çankırı",
    name: "cankiri"
  },
  {
    id: 19,
    city: "Çorum",
    name: "corum"
  },
  {
    id: 20,
    city: "Denizli",
    name: "denizli"
  },
  {
    id: 21,
    city: "Diyarbakır",
    name: "diyarbakir"
  },
  {
    id: 22,
    city: "Edirne",
    name: "edirne"
  },
  {
    id: 23,
    city: "Elazığ",
    name: "elazig"
  },
  {
    id: 24,
    city: "Erzincan",
    name: "erzincan"
  },
  {
    id: 25,
    city: "Erzurum",
    name: "erzurum"
  },
  {
    id: 26,
    city: "Eskişehir",
    name: "eskisehir"
  },
  {
    id: 27,
    city: "Gaziantep",
    name: "gaziantep"
  },
  {
    id: 28,
    city: "Giresun",
    name: "giresun"
  },
  {
    id: 29,
    city: "Gümüşhane",
    name: "gumushkhane"
  },
  {
    id: 30,
    city: "Hakkari",
    name: "hakkari"
  },
  {
    id: 31,
    city: "Hatay",
    name: "hatay"
  },
  {
    id: 32,
    city: "Isparta",
    name: "isparta"
  },
  {
    id: 33,
    city: "Mersin",
    name: "mersin"
  },
  {
    id: 34,
    city: "İstanbul",
    name: "istanbul"
  },
  {
    id: 35,
    city: "İzmir",
    name: "izmir"
  },
  {
    id: 36,
    city: "Kars",
    name: "kars"
  },
  {
    id: 37,
    city: "Kastamonu",
    name: "kastamonu"
  },
  {
    id: 38,
    city: "Kayseri",
    name: "kayseri"
  },
  {
    id: 39,
    city: "Kırklareli",
    name: "kirklareli"
  },
  {
    id: 40,
    city: "Kırşehir",
    name: "kirsehir"
  },
  {
    id: 41,
    city: "Kocaeli",
    name: "kocaeli"
  },
  {
    id: 42,
    city: "Konya",
    name: "konya"
  },
  {
    id: 43,
    city: "Kütahya",
    name: "kutahya"
  },
  {
    id: 44,
    city: "Malatya",
    name: "malatya"
  },
  {
    id: 45,
    city: "Manisa",
    name: "manisa"
  },
  {
    id: 46,
    city: "Kahramanmaraş",
    name: "kahramanmaras"
  },
  {
    id: 47,
    city: "Mardin",
    name: "mardin"
  },
  {
    id: 48,
    city: "Muğla",
    name: "mugla"
  },
  {
    id: 49,
    city: "Muş",
    name: "mus"
  },
  {
    id: 50,
    city: "Nevşehir",
    name: "nevsehir"
  },
  {
    id: 51,
    city: "Niğde",
    name: "nigde"
  },
  {
    id: 52,
    city: "Ordu",
    name: "ordu"
  },
  {
    id: 53,
    city: "Rize",
    name: "rize"
  },
  {
    id: 54,
    city: "Sakarya",
    name: "sakarya"
  },
  {
    id: 55,
    city: "Samsun",
    name: "samsun"
  },
  {
    id: 56,
    city: "Siirt",
    name: "siirt"
  },
  {
    id: 57,
    city: "Sinop",
    name: "sinop"
  },
  {
    id: 58,
    city: "Sivas",
    name: "sivas"
  },
  {
    id: 59,
    city: "Tekirdağ",
    name: "tekirdag"
  },
  {
    id: 60,
    city: "Tokat",
    name: "tokat"
  },
  {
    id: 61,
    city: "Trabzon",
    name: "trabzon"
  },
  {
    id: 62,
    city: "Tunceli",
    name: "tunceli"
  },
  {
    id: 63,
    city: "Şanlıurfa",
    name: "sanliurfa"
  },
  {
    id: 64,
    city: "Uşak",
    name: "usak"
  },
  {
    id: 65,
    city: "Van",
    name: "van"
  },
  {
    id: 66,
    city: "Yozgat",
    name: "yozgat"
  },
  {
    id: 67,
    city: "Zonguldak",
    name: "zonguldak"
  },
  {
    id: 68,
    city: "Aksaray",
    name: "aksaray"
  },
  {
    id: 69,
    city: "Bayburt",
    name: "bayburt"
  },
  {
    id: 70,
    city: "Karaman",
    name: "karaman"
  },
  {
    id: 71,
    city: "Kırıkkale",
    name: "kirikkale"
  },
  {
    id: 72,
    city: "Batman",
    name: "batman"
  },
  {
    id: 73,
    city: "Şırnak",
    name: "sirnak"
  },
  {
    id: 74,
    city: "Bartın",
    name: "bartin"
  },
  {
    id: 75,
    city: "Ardahan",
    name: "ardahan"
  },
  {
    id: 76,
    city: "Iğdır",
    name: "igdir"
  },
  {
    id: 77,
    city: "Yalova",
    name: "yalova"
  },
  {
    id: 78,
    city: "Karabük",
    name: "karabuk"
  },
  {
    id: 79,
    city: "Kilis",
    name: "kilis"
  },
  {
    id: 80,
    city: "Osmaniye",
    name: "osmaniye"
  },
  {
    id: 81,
    city: "Düzce",
    name: "duzce"
  }
]

export default cities