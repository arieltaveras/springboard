const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple 🍎', 'Apricot', 'Avocado 🥑', 'Banana 🍌', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry 🫐', 'Boysenberry', 'Currant', 'Cherry 🍒', 'Coconut 🥥', 'Cranberry', 'Cucumber 🥒', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape 🍇', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon 🍋', 'Lime ', 'Loquat', 'Longan', 'Lychee', 'Mango 🥭', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon 🍉', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive 🫒', 'Orange 🍊', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach 🍑', 'Pear 🍐', 'Persimmon', 'Plantain', 'Plum', 'Pineapple 🍍', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry 🍓', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	// TODO

	for (let i of fruit){
		if((i.toLowerCase().includes(str.toLowerCase())) && (str !== '')){
			results.push(i);
		} 
	}
	showSuggestions(results, str)
	return results;
}

function searchHandler(e) {
	showSuggestions(search(e.target.value.toLowerCase()))
	// TODO
}

function showSuggestions(results, inputVal) {
	// TODO
	suggestions.innerHTML='';
	
	for (let result of results){
		const list = document.createElement('li');
		const set = new Set(inputVal, '');
		const searchResult= result.replace(set, function(match){
			return `${match}`
		});
		list.innerHTML = searchResult;
		suggestions.appendChild(list);
	}
}

function useSuggestion(e) {
	//TODO
	input.value = e.target.innerHTML;
	suggestions.innerHTML ='';
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
