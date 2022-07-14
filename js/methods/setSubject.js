const subjectsNavegation = document.querySelectorAll('a.links_navegation');

subjectsNavegation.forEach((subject, ind_subject)=>{
    let jsonObj = { text: subject.innerText };

    subject.addEventListener('click',()=>{
        switch(ind_subject){
            case 0:
                jsonObj.background = '#BD4444';
                jsonObj.title = 0;
                localStorage.setItem('subjectObj', JSON.stringify(jsonObj));
                break;
            case 1:
                jsonObj.background = '#4644BD';
                jsonObj.title = 1;
                localStorage.setItem('subjectObj', JSON.stringify(jsonObj));
                break;
        }
    });
});