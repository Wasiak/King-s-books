var Book = function(id, title, pl, year, pages){
	var tr = document.createElement('tr');
	tr.id = id;
	var t = document.createElement('td');
	tr.appendChild(t);
	t.classList.add('title');
	t.innerHTML = title;
	var p = document.createElement('td');
	tr.appendChild(p);
	p.classList.add('title');
	p.innerHTML = pl;
	var y = document.createElement('td');
	tr.appendChild(y);
	y.classList.add('year');
	y.innerHTML = year;
	var pa = document.createElement('td');
	tr.appendChild(pa);
	pa.classList.add('year');
	pa.innerHTML = pages;

	return tr;
}

var mainTable =  document.createElement('table');
list.appendChild(mainTable);
var category = new Book('category', 'Title', 'Polish title', 'Year', 'Pages');
mainTable.appendChild(category);
category.classList.add('category');


// var book_1 = new Book(1, 'book no.1', 'ksiazka nr 1', '2015', '666');
// var book_2 = new Book(2, 'second book', 'druga ksiazka', '2005', '888');

// mainTable.appendChild(book_1);
// mainTable.appendChild(book_2);

for (i = 0; i < collection.length; i++){
	mainTable.appendChild(new Book(collection[i].id, collection[i].title, collection[i].pl, collection[i].year, collection[i].pages));	
}