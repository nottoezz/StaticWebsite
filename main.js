const groceryItems = ['Milk', 'Bread', 'Eggs', 'Cheese'];

// display all grocery items
function displayItems() {
  const itemList = document.getElementById('itemList');
  itemList.innerHTML = '';

  groceryItems.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = item;
    li.id = `item-${index}`;

    // create delete span on far right
    const closeSpan = document.createElement('span');
    closeSpan.className = 'close';
    closeSpan.textContent = '\u00D7';
    closeSpan.addEventListener('click', () => deleteItem(index));
    li.appendChild(closeSpan);

    itemList.appendChild(li);
  });
}

// add new item from input
function addItem() {
  const input = document.getElementById('input');
  const newItem = input.value.trim();

  if (!newItem) {
    alert('Please enter an item.');
  } else {
    groceryItems.push(newItem);
    displayItems();
  }

  input.value = '';
}

// remove item by index
function deleteItem(index) {
  groceryItems.splice(index, 1);
  displayItems();
}

// toggle checked items
document.getElementById('itemList').addEventListener('click', function (e) {
  if (e.target.tagName === 'LI' && !e.target.classList.contains('close')) {
    e.target.classList.toggle('checked');
  }
});

// add item on Enter key
document.getElementById('input').addEventListener('keyup', function (e) {
  if (e.key === 'Enter') {
    document.getElementById('addButton').click();
  }
});

// display on page load
window.onload = displayItems;
