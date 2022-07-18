{
    const objAssunto = localStorage.getItem('subjectObj');

    if(objAssunto===null){ 
        let link_web = window.location.href;
        window.location.href = link_web.substring(0, link_web.indexOf('pages/'));
    }
}