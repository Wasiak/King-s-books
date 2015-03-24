var Book = function(id, title, pl, year, pages, link, nolink,favorities){		//creating new Prototype function
	var tr = document.createElement('tr');			// creating new row in table
	tr.id = id;										// give new row id
	var pic = document.createElement('td');			// creating new column in our row 
	tr.appendChild(pic);							// appendin pic to our row for cover
	pic.classList.add('year');
	pic.classList.add('picRes');						
	var t = document.createElement('td');			// creating new column  in our row  for title
	tr.appendChild(t);
	t.classList.add('title');
	t.classList.add('titRes');
	if (nolink){									// if nolink === true -> full row with every book property	
		var img = document.createElement('img');	// creating new el img	
		img.src = 'pics/' + id + '.jpg';			//img is picture of cover with  name same as id of our row
		img.classList.add('thumb');
		img.id = id;
		pic.appendChild(img);
		img.onclick = function(event){				// give img onclick event
			var clicked = event.target;
			var clickedId = clicked.id;
			showBig(clickedId);						// run function showBig with id of clicked element
		}
		var tl = document.createElement('a');		// creating link for title
		t.appendChild(tl);							// appending link to title column
		tl.href = link;								// giving link complete adress of html site
		tl.innerHTML = title;						// link on screen show title of book
		var p = document.createElement('td');		// creating new column for polish title
		tr.appendChild(p);
		p.classList.add('title');
		p.classList.add('pltitRes');
		var pli = document.createElement('a');		// link for book site for polish title
		p.appendChild(pli);
		pli.href = link;							// same link as in title
		pli.innerHTML = pl;
	} else {										// row without book f.e. category
		pic.innerHTML = 'Cover';					// string 'Cover' and no picture 
		t.innerHTML = title;						// just title without link
		var p = document.createElement('td');
		tr.appendChild(p);
		p.classList.add('title');
		p.classList.add('pltitRes');
		p.innerHTML = pl;							// just polish title without link
	}
	var y = document.createElement('td');			// creating new column for year
	tr.appendChild(y);
	y.classList.add('year');
	y.classList.add('yearRes');
	y.innerHTML = year;								// innerHTML === year from collection.js
	var pa = document.createElement('td');			// creating new column for number of pages
	tr.appendChild(pa);
	pa.classList.add('year');
	pa.classList.add('yearRes');
	pa.innerHTML = pages;							// number of pages from collection.js
	if (favorities){								// if any elemento of array collection has property favorities
		tr.classList.add('favorities');				// give him class favorities
	}

	return tr;										// function Book returning new created row
}

var mainTable =  document.createElement('table');		// creating table
list.appendChild(mainTable);
var category = new Book('category', 'Title', 'Polish title', 'Year', 'Pages');		//creating first row with names of every column
mainTable.appendChild(category);
category.classList.add('category');

for (i = 0; i < collection.length; i++){				// loop for making row for every element from collection array
	// new attribute is added to the collection list, where the DOM node will be stored
	collection[i].element = mainTable.appendChild(new Book(collection[i].id, collection[i].title, collection[i].pl, collection[i].year, collection[i].pages, collection[i].link, true, collection[i].favorities));
}
	var lightbox = document.createElement('div');		// creating lightbox 
	lightbox.classList.add('lightbox');					// lightbox class make lightbox invisible
	document.body.appendChild(lightbox);
	var picture = document.createElement('img');		
	picture.classList.add('picture');
	lightbox.appendChild(picture);						// appending new el for lightbox

var showBig = function(id){								// function get id of clicked element
	picture.src = 'pics/' + id + '.jpg';				// give picture in lightbox id === name of clicked cover 
	picture.classList.add('visible');					
	lightbox.classList.add('visible');					// making lightbox and picture visible
	lightbox.onclick = function(event){					
		event.preventDefault();							// clicking on visible lightbox prevent functions onclick on every element
		lightbox.classList.remove('visible');			
		picture.classList.remove('visible');			// making lightbox and picture invisible again
	}
}

//search bar
var searchBar = document.createElement('input');		// creating input for searchbar
searchBar.type = 'textbox';
searchBar.classList.add('searchBar');
searchBar.placeholder = 'Put Title here';				
document.body.appendChild(searchBar);

var search = function(){								//function for searching title in table
	//console.log('odpalam search');
	var all = document.getElementsByTagName('tr');		// taking every row in table
	for (i = 1; i < all.length; i++) {					// loop for every row
		all[i].classList.remove('dontShow');			// remove class 'dontShow' which hiding element
		var tl = all[i].getElementsByTagName('a')[0];	// take first finded link in row -> title
		var pli = all[i].getElementsByTagName('a')[1];	// take second finded link in row -> polish title
		if (searchBar.value){							// if in search bar is anything	
			//console.log(tl.innerHTML.toLowerCase(), searchBar.value.toLowerCase(), tl.innerHTML.toLowerCase().indexOf(searchBar.value.toLowerCase()));
			if(tl.innerHTML.toLowerCase().indexOf(searchBar.value.toLowerCase()) === -1 &&		// if  value in searchbar is not same as in title
				pli.innerHTML.toLowerCase().indexOf(searchBar.value.toLowerCase()) === -1){		// and if value in searchbar is not same as in polish title
				all[i].classList.add('dontShow');												//  give roe class dontShow
			}
		}
	}
}


searchBar.onkeyup = search;			// run search function every time when in searchbar something add or remove 

// sort filter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FArray%2Fsort
var sortByPageFilter = function(a, b) {		// function to sorting pages given as strings
	return a.pages - b.pages;
};

var rebuildTable = function() {				// function rebuilding our table when sorted
	// clear the main table. all the dom nodes will be removed
	mainTable.innerHTML = '';
	// add the header again, it's not part of the 'collection' so it was removed.
	// this code is duplicated, and it shouldn't
	var category = new Book('category', 'Title', 'Polish title', 'Year', 'Pages');		// create first category row with no changes
	mainTable.appendChild(category);
	category.classList.add('category');

	// now add all the nodes again
	for (var book in collection) {
		mainTable.appendChild(collection[book].element);		// appending to table every rows in new sorted order
	}
	getPageSorter();		// run function giving button for sprting by page
	getYearSorter();		// run function giving button for sprting by year
	getTitleSorter();		// run function giving button for sprting by title
	getPlTitleSorter();		// run function giving button for sprting by polish title
};
var pagesDesc = false; //malejaco = fałsz
// When button is clicked
var row;			
var categoryRow;
var cols;
var pageCol;

var getPageSorter = function(){						// function giving button to sorting by page
//console.log('odpalam funkcje getPageSorter');
row = document.getElementsByTagName('tr');			//every row
categoryRow = row[0];								// first row (category)
cols = categoryRow.getElementsByTagName('td')		//every td in first row
pageCol = cols[4];									// 5th column in category row (paGE COL)
pageCol.addEventListener('click', function(){		// click on element run function
	// sort the collection array
	collection = collection.sort(sortByPageFilter);
	if (pagesDesc){									// if pageDesc 'flag' is true reverse collection
		collection = collection.reverse();
	}
	// and rebuild table
	rebuildTable();
	pagesDesc = !pagesDesc;			// changing value of pageDesc flag
});
}
getPageSorter();		// run function at beggining

searchBar.onkeyup = search;
// sorting
var sortByYearFilter = function(a, b) {
	return a.year - b.year;
} 
var yearDesc = false;
var yearCol;
var getYearSorter = function(){
	row = document.getElementsByTagName('tr');			//every row
	categoryRow = row[0];								// first row (category)
	cols = categoryRow.getElementsByTagName('td')		//every td in first row
	yearCol = cols[3];									// 4th column in  category row
	yearCol.addEventListener('click', function(){
		collection = collection.sort(sortByYearFilter);
	if (yearDesc){
		collection = collection.reverse();
	}
	rebuildTable();
	yearDesc = !yearDesc;
});
}
getYearSorter();
var sortByTitleFilter = function(a, b){
	var a = a.title.toLowerCase();
	var b = b.title.toLowerCase();
	if (a < b){ return -1}
	if (a > b){ return 1}	
}
var titleDesc = false;
var titleCol;
var getTitleSorter = function(){
	row = document.getElementsByTagName('tr');			//every row
	categoryRow = row[0];								// first row (category)
	cols = categoryRow.getElementsByTagName('td')		//every td in first row
	titleCol = cols[1];									// second column in category row	
	titleCol.addEventListener('click', function(){
	collection = collection.sort(sortByTitleFilter);
	if (titleDesc){
		collection = collection.reverse();
	}
	rebuildTable();
	titleDesc = !titleDesc;			
});
}
getTitleSorter();
var sortByPlTitleFilter = function(a, b){
	var a = a.pl.toLowerCase();
	var b = b.pl.toLowerCase();
	if (a < b){ return -1}
	if (a > b){ return 1}	
}
var plTitleDesc = false;
var plTitleCol;
var getPlTitleSorter = function(){
	row = document.getElementsByTagName('tr');			//every row
	categoryRow = row[0];								// first row (category)
	cols = categoryRow.getElementsByTagName('td')		//every td in first row
	plTitleCol = cols[2];									// third column in category row	
	plTitleCol.addEventListener('click', function(){
	collection = collection.sort(sortByPlTitleFilter);
	if (plTitleDesc){
		collection = collection.reverse();
	}
	rebuildTable();
	plTitleDesc = !plTitleDesc;			
});
}
getPlTitleSorter();

var header = document.getElementById('header');
header.innerHTML = collection.length + ' King\'s books I read';