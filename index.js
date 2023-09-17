const apartment = {
  type: 'rent',
  disposition: '3+1',
  area: {
    floorage: 100,
    balcony: 2,
    units: 'sqm',
  },
  city: 'Prague',
  district: 'Old Town',
  price: {
    rent: 28000,
    fees: {
      water: 1000,
      energy: 2500,
      services: 560,
    },
    currency: 'czk',
  },
  ownership: 'personal',
  condition: 'renovated',
  status: 'free',
  floor: 3,
};

// Vytvořte webovou stránku s JavaScriptem, zkopírujte si tento kód do vašeho programu a vyřešte následující úkoly.

// Pomocí tečkové notace vypište do stránky dispozici bytu.
let apartment__info = document.getElementsByClassName('apartment__info');

apartment__info[0].innerHTML +=
  '<p>Disposition of the apartment are ' +
  apartment.disposition +
  '.</p>' +
  '<p>Price of the apartment is ' +
  apartment.price.rent +
  ' without fees.' +
  'With fees are ' +
  apartment.price.fees.water +
  ' crowns' +
  ' for a water, ' +
  apartment.price.fees.energy +
  ' crowns for energy, ' +
  apartment.price.fees.services +
  ' crowns for services.</p> ' +
  '<p>Acreage of apartment is ' +
  apartment.area.floorage +
  'm2' +
  '. </p>';

// Vypište do stránky čistý nájem bez poplatků.

// Vypište do stránky celý objekt představující výměru bytu.

// Do separátních proměnných uložte město a městskou část. Vypište je do stránky.

const city = apartment.city;
const discrit = apartment.district;
document.body.innerHTML += '<p>' + city + ', ' + cityDiscrit;

// Změnte stav inzerátu z 'free' na 'taken'.
apartment.status = 'taken';
document.body.innerHTML +=
  '<p>Status of apartment: ' + apartment.status + '.</p>';
