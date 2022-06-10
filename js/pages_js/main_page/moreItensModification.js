{
    const items = document.querySelectorAll('li.items');
    const list_of_items = document.querySelector('ul.list_of_items');

    items.length > 4 ? list_of_items.classList.add('moreItens') : list_of_items.classList.remove('moreItens');
}