const links_goBack = document.querySelectorAll('a.links_goback');

links_goBack.forEach(link =>{
    link.addEventListener('click', (evt)=>{
        evt.preventDefault();

        setTimeout(()=>{
            window.location.href = link.href;
        }, 250);

        localStorage.setItem('transitionPages', false);
        flexbox_container.classList.add('goBackAnimation');
    });
});