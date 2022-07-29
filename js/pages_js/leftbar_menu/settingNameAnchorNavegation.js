{
    const anchors = document.querySelectorAll('a.anchorsSubject');

    anchors.forEach(link=>{
        link.addEventListener('click', () => {
            localStorage.setItem('textAnchor', link.innerText);
        });
    });
}