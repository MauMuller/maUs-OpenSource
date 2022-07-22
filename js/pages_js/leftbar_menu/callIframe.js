{
    const anchorLogoType = document.querySelector('section.first_section_leftbar a'),
          iframe = document.querySelector('iframe.iframe_menubar'),
          anchorsSubject = document.querySelectorAll('a.anchorsSubject'),
          anchorSeachList = document.querySelectorAll('a.anchor_list'),
          search_container = document.querySelector('section.search_container');

    anchorLogoType.addEventListener('click', (evt)=>{
        evt.preventDefault();
        addLogoHref();
    });

    anchorsSubject.forEach(link=>{
        link.addEventListener('click', (evt)=>{
            evt.preventDefault();
            addAnchorsHref(link);
        });
    });

    anchorSeachList.forEach(anchor=>{
        anchor.addEventListener('click',(evt)=>{
            evt.preventDefault();

            addAnchorsHref(anchor);
            closeSearchModal();
        });
    });

    function closeSearchModal(){
        search_container.classList.add('hidden_element');
    }

    function addLogoHref(){
        return iframe.src = anchorLogoType.href;
    }

    function addAnchorsHref(link){
        return iframe.src = link.href;
    }
}