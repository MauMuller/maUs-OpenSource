const logoType = document.querySelector('img.logo_type');
const navegationList = document.querySelector('nav.nav_links ul');
const img_search = document.querySelector('img.img_search');
const box_search_list = document.querySelector('section.list_anchors_search_container');
const list_search_container = document.querySelector('nav.list_container');
const subjectObj = JSON.parse(localStorage.getItem('subjectObj'));

loadingInformations(subjectObj.title);

function loadingInformations(type){
    switch(type){
        case 0:
            settingLogotype(assuntos.objSubjects[type].logo);
            settingAnchorList(assuntos.objSubjects[type].links);
            settingSearchProperties(assuntos.objSubjects[type].logo, subjectObj.background, assuntos.objSubjects[type].links);
            break;
        case 1:
            settingLogotype(assuntos.objSubjects[type].logo);
            settingAnchorList(assuntos.objSubjects[type].links);
            settingSearchProperties(assuntos.objSubjects[type].logo,  subjectObj.background, assuntos.objSubjects[type].links);
            break;
    }
}

function settingSearchProperties(srcLogo, color, arrAnchor){
    const insertingUrlLogo = () => {
        img_search.setAttribute('src', srcLogo);
    };

    const insertingColorIntoBox = () => {
        box_search_list.style.boxShadow = `2px 2px 2px ${color}`;
    };

    const insertingAnchorsIntoList = () => {
        arrAnchor.forEach(objLink=>{
            list_search_container.innerHTML += `<a href="${objLink.href}" class="anchor_list">
                                                    <p>${objLink.icon} ${objLink.text}</p>
                                                    <i class="bi bi-arrow-right-short"></i>
                                                </a>`;
        });
    };

    insertingUrlLogo();
    insertingColorIntoBox();
    insertingAnchorsIntoList();
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