{
    const contactMeMenusOpen = [
        document.querySelectorAll('ul.list_buttons li')[0],
        document.querySelectorAll('a.box_icon')[1],
        ];

    const close_contact = document.querySelector('span.box_close i'),
          section_contact = document.querySelector('section.contact_container');

    const openContact = ()=>{
        section_contact.classList.remove('hidden_element');
    };

    const closeContact = ()=>{
        section_contact.classList.add('hidden_element');
    };

    contactMeMenusOpen.forEach(btnOpenContact=>{
        btnOpenContact.addEventListener('click', openContact);
    });
    close_contact.addEventListener('click', closeContact);
}