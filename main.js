var Book = function(id, title, pl, year, pages, link, nolink){
	var tr = document.createElement('tr');
	tr.id = id;
	var pic = document.createElement('td');			// dodane 3 linijki  a komentarz na testy branchingu
	tr.appendChild(pic);
	pic.classList.add('year');
	if (nolink){
		var img = document.createElement('img');
		img.src = 'pics/' + id + '.jpg';
		img.classList.add('thumb');
		pic.appendChild(img);
	}	
	var t = document.createElement('td');
	tr.appendChild(t);
	t.classList.add('title');
	if (nolink){
		var tl = document.createElement('a');
		t.appendChild(tl);
		tl.href = link;
		tl.innerHTML = title;
		var p = document.createElement('td');
		tr.appendChild(p);
		p.classList.add('title');
		var pli = document.createElement('a');
		p.appendChild(pli);
		pli.href = link;
		pli.innerHTML = pl;
	} else {
		t.innerHTML = title;
		var p = document.createElement('td');
		tr.appendChild(p);
		p.classList.add('title');
		p.innerHTML = pl;
	}
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

for (i = 0; i < collection.length; i++){
	mainTable.appendChild(new Book(collection[i].id, collection[i].title, collection[i].pl, collection[i].year, collection[i].pages, collection[i].link, true));	
}
