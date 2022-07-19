{
    const box_icons = document.querySelectorAll('a.box_icon');
    const menu_links = document.querySelector('div.default_menu');
    const iframeMenu = document.querySelector('iframe.iframe_menubar');
    const anchors_menu_functions = document.querySelectorAll('a.anchorsSubject');
    const logo = document.querySelector('section.first_section_leftbar a');

    const addingIframe = ()=>{ iframeMenu.classList.remove('disabled_element'); };
    const removingIframe = ()=>{ iframeMenu.classList.add('disabled_element'); };

    const addingMenuLink = ()=>{ menu_links.classList.remove('disabled_element');};
    const removingMenuLink = ()=>{ menu_links.classList.add('disabled_element'); };

    box_icons.forEach((box, boxInd)=>{
        box.addEventListener('click', ()=>{
            switch(boxInd){
                case 0: //MENU DE LINKS PARA AS FUNCIONALIDADES
                    addingMenuLink();
                    removingIframe();
                    break;
                case 1: case 2: //FALE COMIGO
                    addingIframe();
                    removingMenuLink(); 
                    break;
            }
        });
    });

    logo.addEventListener('click',()=>{ //MOSTRAR PÁGINA PRINCIPAL
        addingIframe();
        removingMenuLink();
    });

    anchors_menu_functions.forEach(anchor=>{
        anchor.addEventListener('click', ()=>{
            addingIframe();
            removingMenuLink();
        });
    });
}