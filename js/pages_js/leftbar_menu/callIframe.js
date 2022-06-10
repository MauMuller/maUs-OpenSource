{
    const anchorLogoType = document.querySelector('section.first_section_leftbar a');
    const iframe = document.querySelector('iframe.iframe_menubar')
    const anchorsSubject = document.querySelectorAll('a.anchorsSubject');

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

    function addLogoHref(){
        return iframe.src = anchorLogoType.href;
    }

    function addAnchorsHref(link){
        return iframe.src = link.href;
    }
}