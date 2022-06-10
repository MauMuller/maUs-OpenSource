const subjectsNavegation = document.querySelectorAll('a.links_navegation');

subjectsNavegation.forEach((subject, ind_subject)=>{
    let jsonObj = { text: subject.innerText };

    subject.addEventListener('click',()=>{
        switch(ind_subject){
            case 0:
                jsonObj.background = '$primary-red-color';
                jsonObj.title = 0;
                localStorage.setItem('subjectObj', JSON.stringify(jsonObj));
                break;
            case 1:
                jsonObj.background = '$primary-blue-color';
                jsonObj.title = 1;
                localStorage.setItem('subjectObj', JSON.stringify(jsonObj));
                break;
        }
    });
});