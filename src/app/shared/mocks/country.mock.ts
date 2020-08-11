import { Country } from '@shared/interfaces/country.interface';

export const getCountries = (): Country[] => [syria, ukraine, austria];

export const syria: Country = {
  name: 'Syria',
  topLevelDomain: ['.sy'],
  alpha2Code: 'SY',
  alpha3Code: 'SYR',
  callingCodes: ['963'],
  capital: 'Damascus',
  altSpellings: [
    'SY',
    'Syrian Arab Replublic',
    'Al-Jumhūrīyah Al-ʻArabīyah As-Sūrīyah'
  ],
  region: 'Asia',
  subregion: 'Western Asia',
  population: 18_564_000,
  latlng: [35, 38],
  demonym: 'Syrian',
  area: 185180,
  gini: 35.8,
  timezones: ['UTC+02:00'],
  borders: ['IRQ', 'ISR', 'JOR', 'LBN', 'TUR'],
  nativeName: 'سوريا',
  numericCode: '760',
  currencies: [{
    code: 'SYP',
    name: 'Syrian pound',
    symbol: '£'
  }],
  languages: [{
    iso639_1: 'ar',
    iso639_2: 'ara',
    name: 'Arabic',
    nativeName: 'العربية'
  }],
  translations: {
    br: 'Síria',
    de: 'Syrien',
    es: 'Siria',
    fr: 'Syrie',
    it: 'Siria',
    ja: 'シリア・アラブ共和国',
    pt: 'Síria'
  },
  flag: 'https://restcountries.eu/data/syr.svg',
  regionalBlocs: [{
    acronym: 'AL',
    name: 'Arab League',
    otherAcronyms: [],
    otherNames: [
      'جامعة الدول العربية',
      'Jāmiʻat ad-Duwal al-ʻArabīyah',
      'League of Arab States'
    ]
  }],
  cioc: 'SYR'
};

const ukraine: Country = {
  name: 'Ukraine',
  topLevelDomain: undefined,
  alpha2Code: undefined,
  alpha3Code: undefined,
  callingCodes: undefined,
  capital: undefined,
  altSpellings: undefined,
  region: 'Europe',
  subregion: undefined,
  population: undefined,
  latlng: undefined,
  demonym: undefined,
  area: undefined,
  gini: undefined,
  timezones: undefined,
  borders: undefined,
  nativeName: undefined,
  numericCode: undefined,
  currencies: undefined,
  languages: undefined,
  translations: undefined,
  flag: undefined,
  regionalBlocs: undefined,
  cioc: undefined
};

const austria: Country = {
  name: 'Austria',
  topLevelDomain: undefined,
  alpha2Code: undefined,
  alpha3Code: undefined,
  callingCodes: undefined,
  capital: undefined,
  altSpellings: undefined,
  region: 'Europe',
  subregion: undefined,
  population: undefined,
  latlng: undefined,
  demonym: undefined,
  area: undefined,
  gini: undefined,
  timezones: undefined,
  borders: undefined,
  nativeName: undefined,
  numericCode: undefined,
  currencies: undefined,
  languages: undefined,
  translations: undefined,
  flag: undefined,
  regionalBlocs: undefined,
  cioc: undefined
};
