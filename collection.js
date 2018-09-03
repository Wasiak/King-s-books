// based on stephenking.pl
// pages in polish version

var collection = [
  {
    'id' : 'carrie',
    'title' : 'Carrie',
    'pl' : 'Carrie',
    'year' : '1974',
    'pages' : '208',
    'link' : 'http://stephenking.pl/ksiazka/carrie/'
  },
  {
    'id' : 'shine',
    'title' : 'Shining',
    'pl' : 'Lśnienie',
    'year' : '1977',
    'pages' : '520',
    'link' : 'http://stephenking.pl/ksiazka/lsnienie/'
  },
  {
    'id' : 'stand',
    'title' : 'The Stand',
    'pl' : 'Bastion',
    'year' : '1978',
    'pages' : '1166',
    'link' : 'http://stephenking.pl/ksiazka/bastion/'
  },
  {
    'id' : 'marsz',
    'title' : 'Long Walk',
    'pl' : 'Wielki marsz',
    'year' : '1979',
    'pages' :  '264',
    'link' : 'http://stephenking.pl/ksiazka/wielki-marsz/'
  },
  {
    'id' : 'martwa',
    'title' : 'Dead Zone',
    'pl' : 'Martwa strefa',
    'year' : '1979',
    'pages' : '480',
    'link' : 'http://stephenking.pl/ksiazka/martwa-strefa/'
  },
  {
    'id' : 'run',
    'title' : 'Running Man',
    'pl' : 'Uciekinier',
    'year' : '1982',
    'pages' : '336',
    'link' : 'http://stephenking.pl/ksiazka/uciekinier/'
  },
  {
    'id' : 'tow1',
    'title' : 'The Dark Tower I: Gunslinger',
    'pl' : 'Mroczna Wieża I: Roland',
    'year' : '1982',
    'pages' : '255',
    'link' : 'http://stephenking.pl/ksiazka/mroczna-wieza-i-roland/'
  },
  {
    'id' : '4pory',
    'title' : 'Different Seasons',
    'pl' : 'Cztery pory roku',
    'year' : '1982',
    'pages' : '512',
    'link' : 'http://stephenking.pl/ksiazka/cztery-pory-roku/'
  },
  {
    'id' : 'chris',
    'title' : 'Christine',
    'pl' : 'Christine',
    'year' : '1983',
    'pages' : '528' ,
    'link' : 'http://stephenking.pl/ksiazka/christine/'
  },
  {
    'id' : 'crew',
    'title' : 'Skeleton Crew',
    'pl' : 'Szkieletowa załoga',
    'year' : '1985',
    'pages' : '648',
    'link' : 'http://stephenking.pl/ksiazka/szkieletowa-zaloga/'
  },
  {
    'id' : 'to',
    'title' : 'It',
    'pl' : 'To',
    'year' : '1986',
    'pages' : '1104',
    'link' : 'http://stephenking.pl/ksiazka/to/',
    'favorities' :'true'
  },
  {
    'id' : 'tow2',
    'title' : 'The Dark Tower II: The Drawing Of The Three',
    'pl' :'Mroczna Wieża II: Powołanie trójki',
    'year' : '1987',
    'pages' : '448',
    'link' : 'http://stephenking.pl/ksiazka/mroczna-wieza-ii-powolanie-trojki/'
  },
  {
    'id' : 'misery',
    'title' : 'Misery',
    'pl' : 'Misery',
    'year' : '1987',
    'pages' : '400',
    'link' : 'http://stephenking.pl/ksiazka/misery/'
  },
  {
    'id' : 'stuk',
    'title' : 'Tommyknockers',
    'pl' : 'Stukostrachy',
    'year' : '1987',
    'pages' : '640',
    'link' : 'http://stephenking.pl/ksiazka/stukostrachy/'
  },
  {
    'id' : 'polowa',
    'title' : 'The Dark Half',
    'pl' : 'Mroczna połowa',
    'year' : '1989', 
    'pages' : '528',
    'link' : 'http://stephenking.pl/ksiazka/mroczna-polowa/'
  },
  {
    'id' : 'tow3',
    'title' : 'The Dark Tower III: The Wastelands',
    'pl' : 'Mroczna Wieża III: Ziemie jałowe',
    'year' : '1991',
    'pages' : '560',
    'link' : 'http://stephenking.pl/ksiazka/mroczna-wieza-iii-ziemie-jalowe/'
  },
  {
    'id' : 'sklep',
    'title' : 'Needful Things',
    'pl' : 'Sklepik z marzeniami',
    'year' : '1991',
    'pages' : '672',
    'link' : 'http://stephenking.pl/ksiazka/sklepik-z-marzeniami/'
  },
  {
    'id' : 'dolores',
    'title' : 'Dolores Claiborne',
    'pl' : 'Dolores Claiborne',
    'year' : '1992',
    'pages' : '256',
    'link' : 'http://stephenking.pl/ksiazka/dolores-claiborne/'
  },
  {
    'id' : 'marzenia',
    'title' : 'Nightmares And Dreamscapes',
    'pl' : 'Marzenia i koszmary',
    'year' : '1993',
    'pages' : '752',
    'link' : 'http://stephenking.pl/ksiazka/marzenia-i-koszmary/'
  },
  {
    'id' : 'inso',
    'title' : 'Insomnia',
    'pl' : 'Bezsenność',
    'year' : '1994',
    'pages' : '656',
    'link' : 'http://stephenking.pl/ksiazka/bezsennosc/'
  },
  {
    'id' : 'tow4',
    'title' : 'The Dark Tower IV: Wizard and Glass',
    'pl' : 'Mroczna Wieża IV: Czarnoksiężnik i kryształ',
    'year' : '1997',
    'pages' : '816',
    'link' : 'http://stephenking.pl/ksiazka/mroczna-wieza-iv-czarnoksieznik-i-krysztal/'
  },
  {
    'id' : 'storm',
    'title' : 'Storm Of The Century',
    'pl' : 'Sztorm stulecia',
    'year' : '1999',
    'pages' : '360',
    'link' : 'http://stephenking.pl/ksiazka/sztorm-stulecia/'
  },
  {
    'id' : 'atlan',
    'title' : 'Hearts in Atlantis',
    'pl' : 'Serca Atlantydów',
    'year' : '1999',
    'pages' : '512',
    'link' : 'http://stephenking.pl/ksiazka/serca-atlantydow/'
  },
  {
    'id' : 'pamietnik',
    'title' : 'On writing: a memoir of the craft',
    'pl' : 'Jak pisać: Pamiętnik rzemieślnika',
    'year' : '2000',
    'pages' : '254',
    'link' : 'http://stephenking.pl/ksiazka/jak-pisac-pamietnik-rzemieslnika/'
  },
  {
    'id' : 'lowca',
    'title' : 'Dreamcatcher',
    'pl' : 'Łowca snów',
    'year' : '2001',
    'pages' : '768',
    'link' : 'http://stephenking.pl/ksiazka/lowca-snow/',
    'favorities' :'true'
  },
  {
    'id' : 'czarny',
    'title' : 'Black House',
    'pl': 'Czarny Dom',
    'year' : '2001',
    'pages' : '648',
    'link' : 'http://stephenking.pl/ksiazka/czarny-dom/'
  },
  {
    'id' : 'wzgledne',
    'title' : 'Everything\'s Eventual',
    'pl' : 'Wszystko jest względne',
    'year' : '2002',
    'pages' : '432',
    'link' : 'http://stephenking.pl/ksiazka/wszystko-jest-wzgledne/'
  },
  {
    'id' : 'buick',
    'title' : 'From a Buick 8',
    'pl' : 'Buick 8',
    'year' : '2002',
    'pages' : '360',
    'link' : 'http://stephenking.pl/ksiazka/buick-8/'
  },
  {
    'id' : 'tow5',
    'title' : 'The Dark Tower V: Wolves of the Calla',
    'pl' : 'Mroczna Wieża V: Wilki z Calla',
    'year' : '2003',
    'pages' : '624',
    'link' : 'http://stephenking.pl/ksiazka/mroczna-wieza-v-wilki-z-calla/'
  },
  {
    'id' : 'tow6',
    'title' : 'The Dark Tower VI: Song Of Susannah',
    'pl' : 'Mroczna Wieża VI: Pieśń Susannah',
    'year' : '2004',
    'pages' : '464',
    'link' : 'http://stephenking.pl/ksiazka/mroczna-wieza-vi-piesn-susannah/'
  },
  {
    'id' : 'cell',
    'title' : 'Cell',
    'pl' : 'Komórka',
    'year' : '2006',
    'pages' : '432',
    'link' : 'http://stephenking.pl/ksiazka/komorka/'
  },
  {
    'id' : 'lisey',
    'title' : 'Lisey\'s Story',
    'pl' : 'Historia Lisey',
    'year' : '2006',
    'pages' : '528',
    'link' : 'http://stephenking.pl/ksiazka/historia-lisey/'
  },
  {
    'id' : 'reka',
    'title' : 'Duma Key',
    'pl' : 'Ręka mistrza',
    'year' : '2008',
    'pages' : '640',
    'link' : 'http://stephenking.pl/ksiazka/reka-mistrza/',
    'favorities' :'true'    
  },
  {
    'id' : 'zachod',
    'title' : 'Just After Sunset',
    'pl' : 'Po zachodzie słońca',
    'year' : '2008',
    'pages' : '480',
    'link' : 'http://stephenking.pl/ksiazka/po-zachodzie-slonca/'
  },
  {
    'id' : 'ekran',
    'title' : 'Stephen King Goes To The Movies',
    'pl' : 'Stephen King Na wielkim ekranie',
    'year' : '2009',
    'pages' : '490',
    'link' : 'http://stephenking.pl/ksiazka/na-wielkim-ekranie/'
  },
  {
    'id' : 'dome',
    'title' : 'Under The Dome',
    'pl' : 'Pod kopułą',
    'year' : '2009',
    'pages' : '928',
    'link' : 'http://stephenking.pl/ksiazka/pod-kopula/'
  },
  {
    'id' : 'dallas',
    'title' : '11/22/63',
    'pl' : 'Dallas \'63',
    'year' : '2011',
    'pages' : '857',
    'link' : 'http://stephenking.pl/ksiazka/dallas-63/'
  },
  {
    'id' : 'joy',
    'title' : 'Joyland',
    'pl' : 'Joyland',
    'year' : '2013',
    'pages' : '336',
    'link' : 'http://stephenking.pl/ksiazka/joyland/'
  },
  {
    'id' : 'sen',
    'title' : 'Doctor Sleep',
    'pl' : 'Doktor Sen',
    'year' : '2013',
    'pages' : '653',
    'link' : 'http://stephenking.pl/ksiazka/doktor-sen/'
  },
  {
    'id' : 'merc',
    'title' : 'Mr. Mercedes',
    'pl'  : 'Pan  Mercedes',
    'year' : '2014',
    'pages' : '576',
    'link' : 'http://stephenking.pl/ksiazka/pan-mercedes/'
  },
  {
    'id' : 'przebudz',
    'title' : 'Revival',
    'pl' : 'Przebudzenie',
    'year' : '2014',
    'pages' : '536',
    'link' : 'http://stephenking.pl/ksiazka/przebudzenie/'
  },
  {
    'id' : 'znalezione',
    'title' : 'Finders Keepers',
    'pl' : 'Znalezione nie kradzione',
    'year' : '2015',
    'pages' : '544',
    'link' : 'http://stephenking.pl/ksiazka/znalezione-nie-kradzione/'
  },
  {
    'id' : 'bazar',
    'title' : ' The Bazaar Of Bad Dreams',
    'pl' : 'Bazar złych snów',
    'year' : '2015',
    'pages' : '672',
    'link' : 'http://stephenking.pl/ksiazka/bazar-zlych-snow/'
  },
  {
    'id' : 'salem',
    'title' : 'Salem’s Lot',
    'pl' : 'Miasteczko Salem',
    'year' : '1975',
    'pages' : '528',
    'link' : 'http://stephenking.pl/ksiazka/miasteczko-salem/'
  },
  {
    'id' : 'cmetarz',
    'title': 'Pet Sematary',
    'pl' : 'Cmętarz zwieżąt',
    'year' : '1983',
    'pages' : '424',
    'link' : 'http://stephenking.pl/ksiazka/cmetarz-zwiezat/'
  },
  {
    'id' : 'koniecwarty',
    'title': 'End of Watch',
    'pl' : 'Koniec warty',
    'year' : '2016',
    'pages' : '480',
    'link' : 'http://stephenking.pl/ksiazka/koniec-warty/'
  },
  {
    'id' : 'chudszy',
    'title': 'Thinner',
    'pl' : 'Chudszy',
    'year' : '1984',
    'pages' : '408',
    'link' : 'http://stephenking.pl/ksiazka/chudszy/'
  },
  {
    'id' : 'podpalaczka',
    'title': 'Firestarter',
    'pl' : 'Podpalaczka',
    'year' : '1980',
    'pages' : '512',
    'link' : 'http://stephenking.pl/ksiazka/podpalaczka/'
  },
  {
    'id' : 'czarnabezgwiezdnanoc',
    'title': 'Full Dark No Stars',
    'pl' : 'Czarna bezgwiezdna noc',
    'year' : '2010',
    'pages' : '512',
    'link' : 'http://stephenking.pl/ksiazka/czarna-bezgwiezdna-noc/'
  },
  {
    'id' : 'spiacekrolewny',
    'title': 'Sleeping Beauties',
    'pl' : 'Śpiące królewny',
    'year' : '2017',
    'pages' : '736',
    'link' : 'http://stephenking.pl/ksiazka/spiace-krolewny/'
  },
  {
    'id' : 'gwendy',
    'title': 'Gwendy’s Button Box',
    'pl' : 'Pudełko z guzikami Gwendy',
    'year' : '2017',
    'pages' : '176',
    'link' : 'http://stephenking.pl/ksiazka/pudelko-z-guzikami-gwendy/'
  },
  {
    'id' : 'outsider',
    'title': 'The Outsider',
    'pl' : 'Outsider',
    'year' : '2018',
    'pages' : '640',
    'link' : 'http://stephenking.pl/ksiazka/outsider/'
  }
];