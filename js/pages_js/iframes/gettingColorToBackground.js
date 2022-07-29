{
    const subject = JSON.parse(localStorage.getItem('subjectObj')).title,
          body = document.querySelector('body');

    switch(parseInt(subject)){
        case 0:
            body.style.background = "#FFF1F1";
            break;
        case 1:
            body.style.background = "#F2F1FF";
            break;
    }

}