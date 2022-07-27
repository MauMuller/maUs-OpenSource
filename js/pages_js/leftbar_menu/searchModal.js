{
    const searchMenus = [ 
        document.querySelectorAll('a.box_icon')[2],
        document.querySelectorAll('ul.list_buttons li')[2],
    ];
    const container_search = document.querySelector('section.search_container'),
          container_contact = document.querySelector('section.contact_container'),
          close_btn = document.querySelector('span.close_btn'),
          iframe = document.querySelector('iframe.iframe_menubar');

    let boolCtrlP=false;

    const openSearch = ()=>{
        if(container_search.classList.contains('hidden_element')){
            container_search.classList.remove('hidden_element');
        }
    };

    const closeSearch = ()=>{
        if(!container_search.classList.contains('hidden_element')){
            container_search.classList.add('hidden_element');
        }
    };

    const searchingModalKeyboard = (keyCode, innerWidth) => {
        if(innerWidth >= 800 && container_contact.classList.contains('hidden_element')){
            if(boolCtrlP===true){
                if(keyCode===75){ openSearch(); } //ABRIR
                boolCtrlP=false;
            }
    
            if(keyCode===16){ boolCtrlP=true }
            if(keyCode===27) { closeSearch(); } //FECHAR
        }
    };

    searchMenus.forEach(btnSearch=>{ 
        btnSearch.addEventListener('click', ()=>{ //ABRIR TELA;
            openSearch();
        });
    });

    close_btn.addEventListener('click', ()=>{ //FECHAR
        closeSearch();
    }); 

    //ATALHOS PARA PESQUISA - ABRIR | FECHAR
    window.addEventListener('keydown', (evt)=>{
        searchingModalKeyboard(evt.keyCode, window.innerWidth);
    });

    //TEMPLO ASSINCRONO PARA PEGAR A APLICAÇÃO NO IFRAME
    setTimeout(()=>{
        const documentIframe = iframe.contentWindow.document.body;

        documentIframe.addEventListener('keydown', (evt)=>{
            searchingModalKeyboard(evt.keyCode, window.innerWidth);
        });
    }, 100);
}