var Book = function(id, title, pl, year, pages, link, nolink){
	var tr = document.createElement('tr');
	tr.id = id;
	var pic = document.createElement('td');
	tr.appendChild(pic);
	pic.classList.add('year');
	var t = document.createElement('td');
	tr.appendChild(t);
	t.classList.add('title');
	if (nolink){
		var img = document.createElement('img');
		img.src = 'pics/' + id + '.jpg';
		img.classList.add('thumb');
		img.id = id;
		pic.appendChild(img);
		img.onclick = function(event){
			var clicked = event.target;
			var clickedId = clicked.id;
			showBig(clickedId);
		}
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
		pic.innerHTML = 'Cover';
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
	var lightbox = document.createElement('div');
	lightbox.classList.add('lightbox');
	document.body.appendChild(lightbox);
	var picture = document.createElement('img');
	picture.classList.add('picture');
	lightbox.appendChild(picture);
var showBig = function(id){
	picture.src = 'pics/' + id + '.jpg';
	picture.classList.add('visible');
	lightbox.classList.add('visible');
	lightbox.onclick = function(event){
		event.preventDefault();
		lightbox.classList.remove('visible');
		picture.classList.remove('visible');
	}
}
