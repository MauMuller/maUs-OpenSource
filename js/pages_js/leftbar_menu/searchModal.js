{
    const searchMenus = [ 
        document.querySelectorAll('a.box_icon')[2],
        document.querySelectorAll('ul.list_buttons li')[2],
    ];
    const container_search = document.querySelector('section.search_container'),
          close_btn = document.querySelector('span.close_btn');

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
        if(window.innerWidth >= 800){
            if(boolCtrlP===true){
                if(evt.keyCode===75){ openSearch(); } //ABRIR
                boolCtrlP=false;
            } 
    
            if(evt.keyCode===17){ boolCtrlP=true }
            if(evt.keyCode===27) { closeSearch(); } //FECHAR
        }
    });
}