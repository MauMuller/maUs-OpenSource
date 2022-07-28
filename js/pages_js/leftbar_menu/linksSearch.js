{
    const input_search = document.querySelector('input.search_input'),
          close_icon = document.querySelector('i.close_icon');

    const searchingAnchors = ()=>{
        let anchor_list = document.querySelectorAll('a.anchor_list');

        anchor_list.forEach(anchor=>{
            console.log(anchor.innerText.toUpperCase());
            anchor.style.display = anchor.innerText.toUpperCase().includes(input_search.value.toUpperCase()) ? "flex" : "none";
        });
    };

    close_icon.addEventListener('click',searchingAnchors);
    input_search.addEventListener('input',searchingAnchors);
}