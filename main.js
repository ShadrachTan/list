const list = document.querySelector('#toDoList');


const addForm = document.querySelector('#add-form');


const addInput = addForm.querySelector('#add-input');


const searchForm = document.querySelector('#search-form');


const searchInput = searchForm.querySelector('#search-input');


list.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete')) {
    event.target.closest('li').remove();
  }
});


addForm.addEventListener('submit', (event) => {
  event.preventDefault();


  const value = addInput.value;


  const li = document.createElement('li');


  li.classList.add('list-group-item');
  li.textContent = value;


  const button = document.createElement('button');
  button.classList.add('btn', 'btn-danger', 'float-end', 'delete');
  button.textContent = 'Delete';
  li.appendChild(button);
  list.appendChild(li);

});

searchForm.addEventListener('input', (event) => {
  event.preventDefault();


  const query = searchInput.value.toLowerCase();


  const items = list.querySelectorAll('li');


  for (let i = 0; i < items.length; i++) {

    const item = items[i];


    const text = item.textContent.toLowerCase();

  
    if (text.includes(query)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  }
});