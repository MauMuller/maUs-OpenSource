{
    const search_input = document.querySelector('input.search_input'),
          close_icon = document.querySelector('i.close_icon');

    search_input.addEventListener('input',() => {
        search_input.value.length >= 1 ? close_icon.classList.remove('hidden_element') : close_icon.classList.add('hidden_element');
    });

    close_icon.addEventListener('click',() => {
        search_input.value = "";
        close_icon.classList.add('hidden_element')
    });
}