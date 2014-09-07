var houses = [
  {
    caregiver: 'Linköpings kommunala',
    address: 'Pionjärgatan 1, 587 34 Linköping',
    name: 'Berga äldreboende',
    link: 'http://www.leanlink.se/berga',
    coordinates: {
      latitude: 58.4053331,
      longitude: 15.6248227
    }
  },
  {
    caregiver: 'Linköpings kommunala',
    address: 'Kvinnebyvägen 2C, 589 33 Linköping',
    name: 'Ekbackens äldreboende',
    link: 'http://www.leanlink.se/ekbackenvardboende',
    coordinates: {
      latitude: 58.3829,
      longitude: 15.6841148
    }
  },
  {
    caregiver: 'Linköpings kommunala',
    address: 'Skattegården 7A, 586 48 Linköping',
    name: 'Gåsens vårdboende',
    link: 'http://www.leanlink.se/gasen',
    coordinates: {
      latitude: 58.428332,
      longitude: 15.5812987
    }
  },
  {
    caregiver: 'Linköpings kommunala',
    address: 'Kärna centrum 1, 586 65 Linköping',
    name: 'Kärna vårdboende',
    link: 'http://www.leanlink.se/karnavardboende',
    coordinates: {
      latitude: 58.4205957,
      longitude: 15.5074097
    }
  },
  {
    caregiver: 'Linköpings kommunala',
    address: 'Evastigen 21, 590 71 Ljungsbro',
    name: 'Vretaliden äldreboende',
    link: 'http://www.leanlink.se/vretaliden',
    coordinates: {
      latitude: 58.5083364,
      longitude: 15.5078677
    }
  },
  {
    caregiver: 'Linköpings kommunala',
    address: 'Sparvsångsvägen 65, 585 65 Linghem',
    name: 'Linghems vårdboende',
    link: 'http://www.leanlink.se/linghemsvardboende',
    coordinates: {
      latitude: 58.4274015,
      longitude: 15.7885336
    }
  },
  {
    caregiver: 'Linköpings kommunala',
    address: 'Ekholmsvägen 100, 589 25 Linköping',
    name: 'Solstickan',
    link: 'http://www.leanlink.se/solstickan',
    coordinates: {
      latitude: 58.3782766,
      longitude: 15.6677974
    }
  },
  {
    caregiver: 'Linköpings kommunala',
    address: 'Tröskaregatan 7, 583 33 Linköping',
    name: 'Violen/Kaprifolen',
    link: 'http://',
    coordinates: {
      latitude: 58.3886126,
      longitude: 15.565936
    }
  },
  {
    caregiver: 'Linköpings kommunala',
    address: 'Valthornsgatan 1, 589 51 Linköping',
    name: 'Valthornsgatan',
    link: 'http://www.leanlink.se/valthornsgatan',
    coordinates: {
      latitude: 58.3665437,
      longitude: 15.6792246
    }
  },
  {
    caregiver: 'Linköpings kommunala',
    address: 'Konsistoriegatan 4C, 582 22 Linköping',
    name: 'Trollflöjten',
    link: 'http://www.leanlink.se/trollflojten',
    coordinates: {
      latitude: 58.4127465,
      longitude: 15.6139405
    }
  },
  {
    caregiver: 'Attendo Care',
    address: 'Sparregatan 2, 582 21 Linköping',
    name: 'Bantorget äldreboende',
    link: 'http://www.attendo.se/Bantorget-%C3%A4ldreboende',
    coordinates: {
      latitude: 58.4176359,
      longitude: 15.6212576
    }
  },
  {
    caregiver: 'Attendo Care',
    address: 'Snickargatan 34 A, 582 26 Linköping',
    name: 'Duvan',
    link: 'http://www.attendo.se/Duvan',
    coordinates: {
      latitude: 58.4099663,
      longitude: 15.6291062
    }
  },
  {
    caregiver: 'Attendo Care',
    address: 'Ekholmsvägen 100, 589 25 Linköping',
    name: 'Ekholmen',
    link: 'http://www.attendo.se/Ekholmen-servicehus',
    coordinates: {
      latitude: 58.3782766,
      longitude: 15.6677974
    }
  },
  {
    caregiver: 'Attendo Care',
    address: 'Ålerydsvägen 7, 589 23 Linköping',
    name: 'Åleryds vårdboende',
    link: 'http://www.attendo.se/%C3%85leryd-v%C3%A5rdboende',
    coordinates: {
      latitude: 58.382077,
      longitude: 15.6628993
    }
  },
  {
    caregiver: 'Attendo Care',
    address: 'Storhagsgatan 85 590 49 Vikingstad',
    name: 'Vikingstad',
    link: 'http://www.attendo.se/Vikingstad',
    coordinates: {
      latitude: 58.388017,
      longitude: 15.4300725
    }
  },
  {
    caregiver: 'Attendo Care',
    address: 'Järdalavägen 52 D, 589 21 Linköping',
    name: 'Järdalavägen',
    link: 'http://attendo.se/J%C3%A4rdalsv%C3%A4gen-v%C3%A5rdbost%C3%A4der',
    coordinates: {
      latitude: 58.3833585,
      longitude: 15.6769323
    }
  },
  {
    caregiver: 'Attendo Care',
    address: 'Kärnabrunnsgatan 12, 586 62 Linköping',
    name: 'Kärna vårdboende',
    link: 'http://attendo.se/k%C3%A4rna-servicehus',
    coordinates: {
      latitude: 58.4200901,
      longitude: 15.5090638
    }
  },
  {
    caregiver: 'Attendo Care',
    address: 'Vallavägen 12, 582 15 Linköping',
    name: 'Valla park',
    link: 'http://attendo.se/valla-park',
    coordinates: {
      latitude: 58.402485,
      longitude: 15.5971525
    }
  },
  {
    caregiver: 'Attendo Care',
    address: 'Tegelbruksgatan 18, 582 53 Linköping',
    name: 'Tannefors servicehus',
    link: 'http://attendo.se/tannefors-servicehus',
    coordinates: {
      latitude: 58.4059185,
      longitude: 15.6432394
    }
  },
  {
    caregiver: 'Attendo Care',
    address: 'Skäggetorp Centrum 4 C, 586 44 Linköping',
    name: 'Skäggetorp servicehus',
    link: 'http://attendo.se/sk%C3%A4ggetorp-servicehus',
    coordinates: {
      latitude: 58.4274934,
      longitude: 15.5837092
    }
  },
  {
    caregiver: 'Attendo Care',
    address: 'Visättersvägen‎ 8, 59052 Nykil',
    name: 'Nykil',
    link: 'http://attendo.se/Nykil',
    coordinates: {
      latitude: 58.2869645,
      longitude: 15.4524484
    }
  },
  {
    caregiver: 'Vardaga',
    address: 'Torkelbergsgatan 14B, 582 25 Linköping',
    name: 'Gröna Gården',
    link: 'http://www.vardaga.se/sv/Search/Linkoping/Grona-Garden/',
    coordinates: {
      latitude: 58.4053331,
      longitude: 15.6248227
    }
  },
  {
    caregiver: 'Vardaga',
    address: 'Skogslyckegatan 11F, 587 27 Linköping',
    name: 'Kastanjen',
    link: 'http://www.vardaga.se/sv/Search/Linkoping/Kastanjen/',
    coordinates: {
      latitude: 58.3948244,
      longitude: 15.664456
    }
  },
  {
    caregiver: 'Vardaga',
    address: 'Stationsgatan 3, 582 42 Linköping',
    name: 'Kvarnbacken',
    link: 'http://www.vardaga.se/sv/Search/Linkoping/Kvarnbacken/',
    coordinates: {
      latitude: 58.4019872,
      longitude: 15.648953
    }
  },
  {
    caregiver: 'Vardaga',
    address: 'Tallholmsvägen 119, 589 37 Linköping',
    name: 'Möjetorp',
    link: 'http://www.vardaga.se/sv/Search/Linkoping/Mojetorp/',
    coordinates: {
      latitude: 58.4019872,
      longitude: 15.648953
    }
  },
  {
    caregiver: 'Vardaga',
    address: 'Stenåldersgatan 8, 589 51 Linköping',
    name: 'Ullstämma',
    link: 'http://www.vardaga.se/sv/Search/Linkoping/Ullstamma/',
    coordinates: {
      latitude: 58.3707509,
      longitude: 15.6723198
    }
  },
  {
    caregiver: 'Vardaga',
    address: 'Ridhusgatan 2A-C, 587 35 Linköping',
    name: 'Ånestad',
    link: 'http://www.vardaga.se/sv/Search/Linkoping/Anestad/',
    coordinates: {
      latitude: 58.3851526,
      longitude: 15.6498503
    }
  },
  {
    caregiver: 'Bräcke Diakoni',
    address: 'Klostergatan 39, 582 23 Linköping',
    name: 'Bastuplan',
    link: 'http://www.brackediakoni.se/vad-vi-gor/ldre/vara-verksamheter-i-linkoping/ldreboendet-bastuplan',
    coordinates: {
      latitude: 58.4090238,
      longitude: 15.6238461
    }
  },
  {
    caregiver: 'Bräcke Diakoni',
    address: 'Repslagaregatan 2, 582 22 Linköping',
    name: 'Servicehuset Blandaren',
    link: 'http://www.brackediakoni.se/vad-vi-gor/ldre/vara-verksamheter-i-linkoping/servicehuset-blandaren',
    coordinates: {
      latitude: 58.4148252,
      longitude: 15.6253127
    }
  },
  {
    caregiver: 'Bräcke Diakoni',
    address: 'Fanjunkaregatan 5, 582 16 Linköping',
    name: 'Gläntan Spinnrocken',
    link: 'http://www.brackediakoni.se/vad-vi-gor/ldre/vara-verksamheter-i-linkoping/ldreboendet-glantan-spinnrocken',
    coordinates: {
      latitude: 58.4016079,
      longitude: 15.6026763
    }
  },
  {
    caregiver: 'Bräcke Diakoni',
    address: 'Hunnebergsgatan 34, 582 34 Linköping',
    name: 'Gottfridsbergs gård',
    link: 'http://www.brackediakoni.se/vad-vi-gor/ldre/vara-verksamheter-i-linkoping/ldreboendet-gottfridsbergs-gard',
    coordinates: {
      latitude: 58.4138449,
      longitude: 15.6069781
    }
  },
  {
    caregiver: 'Kosmo',
    address: 'Barrskogsvägen 16, 590 49 Vikingstad',
    name: 'Gammelgården',
    link: 'http://www.kosmo.se/aeldreboende/kosmo-gammelgarden',
    coordinates: {
      latitude: 58.3860147,
      longitude: 15.4290811
    }
  },
  {
    caregiver: 'Kosmo',
    address: 'Kompanigatan 7–9, 587 58 Linköping',
    name: 'Garnisonen',
    link: 'http://www.kosmo.se/aeldreboende/kosmo-garnisonen',
    coordinates: {
      latitude: 58.3950687,
      longitude: 15.6147781
    }
  },
  {
    caregiver: 'Kosmo',
    address: 'Kärnavägen 3, 586 62 Linköping',
    name: 'Kärna Vårdby',
    link: 'http://www.kosmo.se/aeldreboende/kosmo-kaerna-vardby',
    coordinates: {
      latitude: 58.4134327,
      longitude: 15.5215959
    }
  },
  {
    caregiver: 'Kosmo',
    address: 'Korpralsgatan 8, 582 14 Linköping',
    name: 'Hagalund',
    link: 'http://www.kosmo.se/aeldreboende/kosmo-hagalund',
    coordinates: {
      latitude: 58.4004258,
      longitude: 15.606985
    }
  },
  {
    caregiver: 'Kosmo',
    address: 'Skräddaregatan 2, 582 40 Linköping',
    name: 'Skräddaregården',
    link: 'http://www.kosmo.se/aeldreboende/kosmo-skraddaregarden',
    coordinates: {
      latitude: 58.4164251,
      longitude: 15.5974443
    }
  },
  {
    caregiver: 'Kosmo',
    address: 'Platensgatan 24 582 20 Linköping',
    name: 'Vasastaden',
    link: 'http://www.kosmo.se/aeldreboende/kosmo-vasastaden',
    coordinates: {
      latitude: 58.4173185,
      longitude: 15.6171863
    }
  },
  {
    caregiver: 'Aleris äldreomsorg',
    address: 'S:t Larsgatan 8 A-B, 582 24 Linköping',
    name: 'Brushanens Äldreboende',
    link: 'http://www.aleris.se/har-finns-vi/linkoping/brushanens-aldreboende/',
    coordinates: {
      latitude: 58.4159761,
      longitude: 15.622545
    }
  },
  {
    caregiver: 'Aleris äldreomsorg',
    address: 'Slatteforsvägen 2, 589 43 Linköping',
    name: 'Landeryds',
    link: 'http://www.aleris.se/har-finns-vi/linkoping/landeryd-vardbostader/',
    coordinates: {
      latitude: 58.3763989,
      longitude: 15.7203023
    }
  },
  {
    caregiver: 'Aleris äldreomsorg',
    address: 'Trossvägen 1, 590 77 Vreta Kloster',
    name: 'Kanalgården',
    link: 'http://www.aleris.se/har-finns-vi/linkoping/kanalgarden/',
    coordinates: {
      latitude: 58.4869008,
      longitude: 15.5342382
    }
  },
  {
    caregiver: 'Aleris äldreomsorg',
    address: 'Stiglötsgatan 34, 586 46 Linköping',
    name: 'Stiglötsgatans äldreboende',
    link: 'http://www.aleris.se/har-finns-vi/linkoping/stiglotsgatan/',
    coordinates: {
      latitude: 58.4257346,
      longitude: 15.5746003
    }
  },
  {
    caregiver: 'Aleris äldreomsorg',
    address: 'Rydsvägen 9C, 584 39 Linköping',
    name: 'Villa Ryd (demensboende)',
    link: 'http://www.aleris.se/har-finns-vi/linkoping/villa-ryd-demensboende/',
    coordinates: {
      latitude: 58.4152075,
      longitude: 15.5685828
    }
  },
  {
    caregiver: 'Berzelii vård och omsorg',
    address: 'Ekollongatan 20, 587 25 Linköping',
    name: 'Tandkronan',
    link: 'http://www.bvomsorg.se',
    coordinates: {
      latitude: 58.389193,
      longitude: 15.676003
    }
  }
];

houses = _(houses).map(function(house, index) {
  house.id = "house-" + index;
  return house;
});
