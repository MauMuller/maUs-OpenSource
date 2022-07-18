{
    const search_contact_fullwindow = document.querySelector('section.search_contact_fullwindow');
    const search_container = search_contact_fullwindow.children[0];
    const contact_container = search_contact_fullwindow.children[1];

    const searchMenus = [ 
        document.querySelectorAll('a.box_icon')[2],
        document.querySelectorAll('ul.list_buttons li')[2],
    ];

    const contactMeMenus = [
        document.querySelectorAll('ul.list_buttons li')[0],
        document.querySelectorAll('a.box_icon')[1],
    ];

    const openSearch = ()=>{

    };

    const closeSearch = ()=>{
        
    };

    const openContact = ()=>{

    };

    const closeContact = ()=>{
        
    };

    searchMenus.forEach(btnSearch=>{
        btnSearch.addEventListener('click', ()=>{
            
        });
    });
}