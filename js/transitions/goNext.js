const links_navegation = document.querySelectorAll('a.links_navegation');
const flexbox_container = document.querySelector('.flexbox_container');

links_navegation.forEach(link =>{
    link.addEventListener('click', (evt)=>{
        evt.preventDefault();

        setTimeout(()=>{
            window.location.href = link.href;
        }, 250);

        localStorage.setItem('transitionPages', true);
        flexbox_container.classList.add('goNextAnimation');
    });
});