{
    const backgroundColor = JSON.parse(localStorage.getItem('subjectObj')).background,
          painel_ilustration = document.querySelector('div.painel_ilustration'),
          tech_actived = document.querySelector('li.btn_actived'),
          class_name = document.querySelectorAll('span.className'),
          tagsNameHTML = document.querySelectorAll('span.tagsNameHTML');

    [painel_ilustration, tech_actived].forEach((element, indElement)=>{
        switch(indElement){
            case 0:
                element.style.background = `${backgroundColor}99`;
                break;
            case 1:
                element.style.background = backgroundColor;
                element.style.boxShadow = `4px 4px 2px ${backgroundColor}66`;
                break;

        }
    });

    class_name.forEach(span=>{span.style.color = backgroundColor});
    tagsNameHTML.forEach(span=>{span.style.color = backgroundColor});
}