// based on stephenking.pl
// pages in polish version

var collection = [
	{
		'id' : 'carrie',
		'title' : 'Carrie',
		'pl' : 'Carrie',
		'year' : '1974',
		'pages' : '208'
	},
	{
		'id' : 'shine',
		'title' : 'Shining',
		'pl' : 'Lśnienie',
		'year' : '1977',
		'pages' : '520'
	},
	{
		'id' : 'stand',
		'title' : 'The Stand',
		'pl' : 'Bastion',
		'year' : '1978',
		'pages' : '1166'
	},
	{
		'id' : 'marsz',
		'title' : 'Long Walk',
		'pl' : 'Wielki marsz',
		'year' : '1979',
		'pages' :  '264'
	},
	{
		'id' : 'martwa',
		'title' : 'Dead Zone',
		'pl' : 'Martwa strefa',
		'year' : '1979',
		'pages' : '480'
	},
	{
		'id' : 'run',
		'title' : 'Running Man',
		'pl' : 'Uciekinier',
		'year' : '1982',
		'pages' : '336'
	},
	{
		'id' : 'tow1',
		'title' : 'The Dark Tower I: Gunslinger',
		'pl' : 'Mroczna Wieża I: Roland',
		'year' : '1982',
		'pages' : '255'
	},
	{
		'id' : '4pory',
		'title' : 'Different Seasons',
		'pl' : 'Cztery pory roku',
		'year' : '1982',
		'pages' : '512'
	},
	{
		'id' : 'chris',
		'title' : 'Christine',
		'pl' : 'Christine',
		'year' : '1983',
		'pages' : '528'	
	},
	{
		'id' : 'crew',
		'title' : 'Skeleton Crew',
		'pl' : 'Szkieletowa załoga',
		'year' : '1985',
		'pages' : '648'
	},
	{
		'id' : 'to',
		'title' : 'It',
		'pl' : 'To',
		'year' : '1986',
		'pages' : '1104'
	},
	{
		'id' : 'tow2',
		'title' : 'The Dark Tower II: The Drawing Of The Three',
		'pl' :'Mroczna Wieża II: Powołanie trójki',
		'year' : '1987',
		'pages' : '448'
	},
	{
		'id' : 'misery',
		'title' : 'Misery',
		'pl' : 'Misery',
		'year' : '1987',
		'pages' : '400'
	},
	{
		'id' : 'stuk',
		'title' : 'Tommyknockers',
		'pl' : 'Stukostrachy',
		'year' : '1987',
		'pages' : '640'
	},
	{
		'id' : 'polowa',
		'title' : 'The Dark Half',
		'pl' : 'Mroczna połowa',
		'year' : '1989', 
		'pages' : '528'
	},
	{
		'id' : 'tow3',
		'title' : 'The Dark Tower III: The Wastelands',
		'pl' : 'Mroczna Wieża III: Ziemie jałowe',
		'year' : '1991',
		'pages' : '560'
	},
	{
		'id' : 'sklep',
		'title' : 'Needful Things',
		'pl' : 'Sklepik z marzeniami',
		'year' : '1991',
		'pages' : '672'
	},
	{
		'id' : 'dolores',
		'title' : 'Dolores Claiborne',
		'pl' : 'Dolores Claiborne',
		'year' : '1992',
		'pages' : '256'
	},
	{
		'id' : 'marzenia',
		'title' : 'Nightmares And Dreamscapes',
		'pl' : 'Marzenia i koszmary',
		'year' : '1993',
		'pages' : '752'
	},
	{
		'id' : 'inso',
		'title' : 'Insomnia',
		'pl' : 'bezsenność',
		'year' : '1994',
		'pages' : '656'
	},
	{
		'id' : 'tow4',
		'title' : 'The Dark Tower IV: Wizard and Glass',
		'pl' : 'Mroczna Wieża IV: Czarnoksiężnik i kryształ',
		'year' : '1997',
		'pages' : '816'
	},
	{
		'id' : 'storm',
		'title' : 'Storm Of The Century',
		'pl' : 'Sztorm stulecia',
		'year' : '1999',
		'pages' : '360'
	},
	{
		'id' : 'atlan',
		'title' : 'Hearts in Atlantis',
		'pl' : 'Serca Atlantydów',
		'year' : '1999',
		'pages' : '512'
	},
	{
		'id' : 'pamietnik',
		'title' : 'On writing: a memoir of the craft',
		'pl' : 'Jak pisać: Pamiętnik rzemieślnika',
		'year' : '2000',
		'pages' : '254'
	},
	{
		'id' : 'lowca',
		'title' : 'Dreamcatcher',
		'pl' : 'Łowca snów',
		'year' : '2001',
		'pages' : '768'
	},
	{
		'id' : 'czarny',
		'title' : 'Black House',
		'pl': 'Czarny Dom',
		'year' : '2001',
		'pages' : '648'
	},
	{
		'id' : 'wzgledne',
		'title' : 'Everything\'s Eventual',
		'pl' : 'Wszystko jest względne',
		'year' : '2002',
		'pages' : '432'
	},
	{
		'id' : 'buick',
		'title' : 'From a Buick 8',
		'pl' : 'Buick 8',
		'year' : '2002',
		'pages' : '360'
	},
	{
		'id' : 'tow5',
		'title' : 'The Dark Tower V: Wolves of the Calla',
		'pl' : 'Mroczna Wieża V: Wilki z Calla',
		'year' : '2003',
		'pages' : '624'
	},
	{
		'id' : 'tow6',
		'title' : 'The Dark Tower VI: Song Of Susannah',
		'pl' : 'Mroczna Wieża VI: Pieśń Susannah',
		'year' : '2004',
		'pages' : '464'
	},
	{
		'id' : 'cell',
		'title' : 'Cell',
		'pl' : 'Komórka',
		'year' : '2006',
		'pages' : '432'
	},
	{
		'id' : 'lisey',
		'title' : 'Lisey\'s Story',
		'pl' : 'Historia Lisey',
		'year' : '2006',
		'pages' : '528'
	},
	{
		'id' : 'reka',
		'title' : 'Duma Key',
		'pl' : 'Ręka mistrza',
		'year' : '2008',
		'pages' : '640'
	},
	{
		'id' : 'zachod',
		'title' : 'Just After Sunset',
		'pl' : 'Po zachodzie słońca',
		'year' : '2008',
		'pages' : '480'
	},
	{
		'id' : 'ekran',
		'title' : 'Stephen King Goes To The Movies',
		'pl' : 'Stephen King Na wielkim ekranie',
		'year' : '2009',
		'pages' : '490'
	},
	{
		'id' : 'dome',
		'title' : 'Under The Dome',
		'pl' : 'Pod kopułą',
		'year' : '2009',
		'pages' : '928'
	},
	{
		'id' : 'dallas',
		'title' : '11/22/63',
		'pl' : 'Dallas \'63',
		'year' : '2011',
		'pages' : '857'
	},
	{
		'id' : 'joy',
		'title' : 'Joyland',
		'pl' : 'Joyland',
		'year' : '2013',
		'pages' : '336'
	},
	{
		'id' : 'sen',
		'title' : 'Doctor Sleep',
		'pl' : 'Doktor Sen',
		'year' : '2013',
		'pages' : '653'
	},
	{
		'id' : 'merc',
		'title' : 'Mr. Mercedes',
		'pl'  : 'Pan  Mercedes',
		'year' : '2014',
		'pages' : '576'
	},
	{
		'id' : 'przebudz',
		'title' : 'Revival',
		'pl' : 'Przebudzenie',
		'year' : '2014',
		'pages' : '536'
	}
];