{
    const button_menu = document.querySelector('div.menu_button');
    const list_buttons = document.querySelectorAll('ul.list_buttons li');

    let menuBool=true;

    function openMenu(){
        for(let i=list_buttons.length-1; i>=0; i--){
            setTimeout(()=>{
                list_buttons[i].classList.remove('animation_menu_hidden','hidden_element');
                list_buttons[i].classList.add('animation_menu_visible');
            }, i * 200);
        }
        menuBool=false;
    }

    function closeMenu(){
        for(let i=0; i<list_buttons.length; i++){
            setTimeout(()=>{
                list_buttons[i].classList.remove('animation_menu_visible');
                list_buttons[i].classList.add('animation_menu_hidden');
            }, i * 200);
        }
        menuBool=true;
    } 

    button_menu.addEventListener('click', (evt)=>{
        menuBool ? openMenu() : closeMenu(); 
    });

    window.addEventListener('click',(evt)=>{
        if(!button_menu.contains(evt.target)) closeMenu();
    });
}