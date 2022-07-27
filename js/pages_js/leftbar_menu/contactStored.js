{
    const subtitles = document.querySelectorAll('h2.subtitle_close'),
          medias = document.querySelectorAll('a.midias_contact_icons'),
          lineLink = document.querySelector('p.lineLink'),
          colorToPutIntoContact = JSON.parse(localStorage.getItem('subjectObj')).background;

    const settingColorIntoTitles = () => {
        subtitles.forEach(subtitle=>{
            subtitle.style.color = colorToPutIntoContact;
            subtitle.style.textShadow = `1px 1px 2px ${colorToPutIntoContact}`;
        });
    };

    const hoverOnMedias = () => {
        medias.forEach(media=>{
            media.addEventListener('mouseenter', () => {
                media.style.color = colorToPutIntoContact
                media.style.textShadow = "2px 2px 5px #000";
            });

            media.addEventListener('mouseleave', () => {
                media.style.color = "#fff"
                media.style.textShadow = "none";
            });
        })
    };

    const settingColorIntoEmailLink = () => {
        lineLink.style.borderBottom = `1px solid${colorToPutIntoContact}`;
        lineLink.children[0].style.color = colorToPutIntoContact;
    };

    settingColorIntoEmailLink();
    settingColorIntoTitles();
    hoverOnMedias();
}