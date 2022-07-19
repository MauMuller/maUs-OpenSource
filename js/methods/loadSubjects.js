const logoType = document.querySelector('img.logo_type');
const navegationList = document.querySelector('nav.nav_links ul');
const img_search = document.querySelector('img.img_search');
const box_search_list = document.querySelector('section.list_anchors_search_container');
const subjectObj = JSON.parse(localStorage.getItem('subjectObj'));

loadingInformations(subjectObj.title);

function loadingInformations(type){
    switch(type){
        case 0:
            settingLogotype(assuntos.objSubjects[type].logo);
            settingAnchorList(assuntos.objSubjects[type].links);
            settingSearchProperties(assuntos.objSubjects[type].logo, subjectObj.background);
            break;
        case 1:
            settingLogotype(assuntos.objSubjects[type].logo);
            settingAnchorList(assuntos.objSubjects[type].links);
            settingSearchProperties(assuntos.objSubjects[type].logo,  subjectObj.background);
            break;
    }
}

function settingSearchProperties(srcLogo, color){
    const insertingUrlLogo = () => {
        img_search.setAttribute('src', srcLogo);
    };

    const insertingColorIntoBox = () => {
        box_search_list.style.boxShadow = `2px 2px 2px ${color}`;
    };

    insertingUrlLogo();
    insertingColorIntoBox();
}

function settingLogotype(srcLogo){
    let logo = srcLogo;
    logoType.setAttribute('src', logo);
}

function settingAnchorList(arrAnchor){
    arrAnchor.forEach(objLink=>{
        navegationList.innerHTML += `<li><a href="${objLink.href}" class="anchorsSubject" title="${objLink.text}">${objLink.icon} ${objLink.text}</a></li>`;
    });
}