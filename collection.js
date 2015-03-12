// based on stephenking.pl
// pages in polish version

var collection = [
	{
		'id' : 'carrie',
		'title' : 'Carrie',
		'pl' : 'Carrie',
		'year' : '1974',
		'pages' : '208',
		'link' : 'http://stephenking.pl/ksiazki_carrie_01.html'
	},
	{
		'id' : 'shine',
		'title' : 'Shining',
		'pl' : 'Lśnienie',
		'year' : '1977',
		'pages' : '520',
		'link' : 'http://stephenking.pl/ksiazki_lsnienie_01.html'
	},
	{
		'id' : 'stand',
		'title' : 'The Stand',
		'pl' : 'Bastion',
		'year' : '1978',
		'pages' : '1166',
		'link' : 'http://stephenking.pl/ksiazki_bastion2_01.html'
	},
	{
		'id' : 'marsz',
		'title' : 'Long Walk',
		'pl' : 'Wielki marsz',
		'year' : '1979',
		'pages' :  '264',
		'link' : 'http://stephenking.pl/ksiazki_wielkimarsz_01.html'
	},
	{
		'id' : 'martwa',
		'title' : 'Dead Zone',
		'pl' : 'Martwa strefa',
		'year' : '1979',
		'pages' : '480',
		'link' : 'http://stephenking.pl/ksiazki_martwastrefa_01.html'
	},
	{
		'id' : 'run',
		'title' : 'Running Man',
		'pl' : 'Uciekinier',
		'year' : '1982',
		'pages' : '336',
		'link' : 'http://stephenking.pl/ksiazki_uciekinier_01.html'
	},
	{
		'id' : 'tow1',
		'title' : 'The Dark Tower I: Gunslinger',
		'pl' : 'Mroczna Wieża I: Roland',
		'year' : '1982',
		'pages' : '255',
		'link' : 'http://stephenking.pl/ksiazki_roland1_01.html'
	},
	{
		'id' : '4pory',
		'title' : 'Different Seasons',
		'pl' : 'Cztery pory roku',
		'year' : '1982',
		'pages' : '512',
		'link' : 'http://stephenking.pl/ksiazki_czterypory_01.html'
	},
	{
		'id' : 'chris',
		'title' : 'Christine',
		'pl' : 'Christine',
		'year' : '1983',
		'pages' : '528'	,
		'link' : 'http://stephenking.pl/ksiazki_christine_01.html'
	},
	{
		'id' : 'crew',
		'title' : 'Skeleton Crew',
		'pl' : 'Szkieletowa załoga',
		'year' : '1985',
		'pages' : '648',
		'link' : 'http://stephenking.pl/ksiazki_szkieletowazaloga_01.html'
	},
	{
		'id' : 'to',
		'title' : 'It',
		'pl' : 'To',
		'year' : '1986',
		'pages' : '1104',
		'link' : 'http://stephenking.pl/ksiazki_to_01.html',
		'favorities' :'true'
	},
	{
		'id' : 'tow2',
		'title' : 'The Dark Tower II: The Drawing Of The Three',
		'pl' :'Mroczna Wieża II: Powołanie trójki',
		'year' : '1987',
		'pages' : '448',
		'link' : 'http://stephenking.pl/ksiazki_powolanie_01.html'
	},
	{
		'id' : 'misery',
		'title' : 'Misery',
		'pl' : 'Misery',
		'year' : '1987',
		'pages' : '400',
		'link' : 'http://stephenking.pl/ksiazki_misery_01.html'
	},
	{
		'id' : 'stuk',
		'title' : 'Tommyknockers',
		'pl' : 'Stukostrachy',
		'year' : '1987',
		'pages' : '640',
		'link' : 'http://stephenking.pl/ksiazki_stukostrachy_01.html'
	},
	{
		'id' : 'polowa',
		'title' : 'The Dark Half',
		'pl' : 'Mroczna połowa',
		'year' : '1989', 
		'pages' : '528',
		'link' : 'http://stephenking.pl/ksiazki_mroczna_polowa_01.html'
	},
	{
		'id' : 'tow3',
		'title' : 'The Dark Tower III: The Wastelands',
		'pl' : 'Mroczna Wieża III: Ziemie jałowe',
		'year' : '1991',
		'pages' : '560',
		'link' : 'http://stephenking.pl/ksiazki_ziemie_01.html'
	},
	{
		'id' : 'sklep',
		'title' : 'Needful Things',
		'pl' : 'Sklepik z marzeniami',
		'year' : '1991',
		'pages' : '672',
		'link' : 'http://stephenking.pl/ksiazki_sklepikzmarzeniami_01.html'
	},
	{
		'id' : 'dolores',
		'title' : 'Dolores Claiborne',
		'pl' : 'Dolores Claiborne',
		'year' : '1992',
		'pages' : '256',
		'link' : 'http://stephenking.pl/ksiazki_dolores_01.html'
	},
	{
		'id' : 'marzenia',
		'title' : 'Nightmares And Dreamscapes',
		'pl' : 'Marzenia i koszmary',
		'year' : '1993',
		'pages' : '752',
		'link' : 'http://stephenking.pl/ksiazki_marzenia_01.html'
	},
	{
		'id' : 'inso',
		'title' : 'Insomnia',
		'pl' : 'Bezsenność',
		'year' : '1994',
		'pages' : '656',
		'link' : 'http://stephenking.pl/ksiazki_bezsennosc_01.html'
	},
	{
		'id' : 'tow4',
		'title' : 'The Dark Tower IV: Wizard and Glass',
		'pl' : 'Mroczna Wieża IV: Czarnoksiężnik i kryształ',
		'year' : '1997',
		'pages' : '816',
		'link' : 'http://stephenking.pl/ksiazki_czarnoksieznik_01.html'
	},
	{
		'id' : 'storm',
		'title' : 'Storm Of The Century',
		'pl' : 'Sztorm stulecia',
		'year' : '1999',
		'pages' : '360',
		'link' : 'http://stephenking.pl/ksiazki_sztorm_01.html'
	},
	{
		'id' : 'atlan',
		'title' : 'Hearts in Atlantis',
		'pl' : 'Serca Atlantydów',
		'year' : '1999',
		'pages' : '512',
		'link' : 'http://stephenking.pl/ksiazki_sercaatlantydow_01.html'
	},
	{
		'id' : 'pamietnik',
		'title' : 'On writing: a memoir of the craft',
		'pl' : 'Jak pisać: Pamiętnik rzemieślnika',
		'year' : '2000',
		'pages' : '254',
		'link' : 'http://stephenking.pl/ksiazki_jakpisac_01.html'
	},
	{
		'id' : 'lowca',
		'title' : 'Dreamcatcher',
		'pl' : 'Łowca snów',
		'year' : '2001',
		'pages' : '768',
		'link' : 'http://stephenking.pl/ksiazki_lowcasnow_01.html',
		'favorities' :'true'
	},
	{
		'id' : 'czarny',
		'title' : 'Black House',
		'pl': 'Czarny Dom',
		'year' : '2001',
		'pages' : '648',
		'link' : 'http://stephenking.pl/ksiazki_czarnydom_01.html'
	},
	{
		'id' : 'wzgledne',
		'title' : 'Everything\'s Eventual',
		'pl' : 'Wszystko jest względne',
		'year' : '2002',
		'pages' : '432',
		'link' : 'http://stephenking.pl/ksiazki_wszystkojest_01.html'
	},
	{
		'id' : 'buick',
		'title' : 'From a Buick 8',
		'pl' : 'Buick 8',
		'year' : '2002',
		'pages' : '360',
		'link' : 'http://stephenking.pl/ksiazki_buick_01.html'
	},
	{
		'id' : 'tow5',
		'title' : 'The Dark Tower V: Wolves of the Calla',
		'pl' : 'Mroczna Wieża V: Wilki z Calla',
		'year' : '2003',
		'pages' : '624',
		'link' : 'http://stephenking.pl/ksiazki_wilki_01.html'
	},
	{
		'id' : 'tow6',
		'title' : 'The Dark Tower VI: Song Of Susannah',
		'pl' : 'Mroczna Wieża VI: Pieśń Susannah',
		'year' : '2004',
		'pages' : '464',
		'link' : 'http://stephenking.pl/ksiazki_piesn_01.html'
	},
	{
		'id' : 'cell',
		'title' : 'Cell',
		'pl' : 'Komórka',
		'year' : '2006',
		'pages' : '432',
		'link' : 'http://stephenking.pl/ksiazki_komorka_01.html'
	},
	{
		'id' : 'lisey',
		'title' : 'Lisey\'s Story',
		'pl' : 'Historia Lisey',
		'year' : '2006',
		'pages' : '528',
		'link' : 'http://stephenking.pl/ksiazki_lisey_01.html'
	},
	{
		'id' : 'reka',
		'title' : 'Duma Key',
		'pl' : 'Ręka mistrza',
		'year' : '2008',
		'pages' : '640',
		'link' : 'http://stephenking.pl/ksiazki_reka_01.html',
		'favorities' :'true'		
	},
	{
		'id' : 'zachod',
		'title' : 'Just After Sunset',
		'pl' : 'Po zachodzie słońca',
		'year' : '2008',
		'pages' : '480',
		'link' : 'http://stephenking.pl/ksiazki_po_zachodzie_01.html'
	},
	{
		'id' : 'ekran',
		'title' : 'Stephen King Goes To The Movies',
		'pl' : 'Stephen King Na wielkim ekranie',
		'year' : '2009',
		'pages' : '490',
		'link' : 'http://stephenking.pl/ksiazki_na_ekranie_01.html'
	},
	{
		'id' : 'dome',
		'title' : 'Under The Dome',
		'pl' : 'Pod kopułą',
		'year' : '2009',
		'pages' : '928',
		'link' : 'http://stephenking.pl/ksiazki_pod_kopula_01.html'
	},
	{
		'id' : 'dallas',
		'title' : '11/22/63',
		'pl' : 'Dallas \'63',
		'year' : '2011',
		'pages' : '857',
		'link' : 'http://stephenking.pl/ksiazki_dallas63_01.html'
	},
	{
		'id' : 'joy',
		'title' : 'Joyland',
		'pl' : 'Joyland',
		'year' : '2013',
		'pages' : '336',
		'link' : 'http://stephenking.pl/ksiazki_joyland_01.html'
	},
	{
		'id' : 'sen',
		'title' : 'Doctor Sleep',
		'pl' : 'Doktor Sen',
		'year' : '2013',
		'pages' : '653',
		'link' : 'http://stephenking.pl/ksiazki_sen_01.html'
	},
	{
		'id' : 'merc',
		'title' : 'Mr. Mercedes',
		'pl'  : 'Pan  Mercedes',
		'year' : '2014',
		'pages' : '576',
		'link' : 'http://stephenking.pl/ksiazki_mercedes_01.html'
	},
	{
		'id' : 'przebudz',
		'title' : 'Revival',
		'pl' : 'Przebudzenie',
		'year' : '2014',
		'pages' : '536',
		'link' : 'http://stephenking.pl/ksiazki_przebudzenie_01.html'
	}
];