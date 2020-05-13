const input = document.createElement('input');
input.setAttribute('type', 'hidden');

const input2 = document.createElement('input');
input2.setAttribute('type', 'search');
input2.setAttribute('name', 'searchText');
input2.setAttribute('placeholder', 'Search');
input2.setAttribute('required', '');
input2.setAttribute('id', 'input2');
input2.setAttribute('autofocus', '');

const input3 = document.createElement('input');
input3.setAttribute('type', 'image');
input3.setAttribute('src', './assets/icons/search.png');
input3.setAttribute('id', 'loop');


const form = document.createElement('div');
form.className = 'form-search';
form.append(input, input2, input3);

export default form;
