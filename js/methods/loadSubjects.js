const logoType = document.querySelector('img.logo_type');
const navegationList = document.querySelector('nav.nav_links ul');
const subjectObj = JSON.parse(localStorage.getItem('subjectObj'));

loadingInformations(subjectObj.title);

function loadingInformations(type){
    switch(type){
        case 0:
            settingLogotype(assuntos.objSubjects[type].logo);
            settingAnchorList(assuntos.objSubjects[type].links);
            break;
        case 1:
            settingLogotype(assuntos.objSubjects[type].logo);
            settingAnchorList(assuntos.objSubjects[type].links);
            break;
    }
}

function settingLogotype(srcLogo){
    let logo = srcLogo;
    logoType.setAttribute('src', logo);
}

function settingAnchorList(arrAnchor){
    arrAnchor.forEach(objLink=>{
        console.log(objLink.icon);
        navegationList.innerHTML += `<li><a href="${objLink.href}" class="anchorsSubject" title="${objLink.text}">${objLink.icon} ${objLink.text}</a></li>`;
    });
}