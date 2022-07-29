{
    const textAnchor = localStorage.getItem('textAnchor'),
          background = JSON.parse(localStorage.getItem('subjectObj')).background;
          title_page = document.querySelectorAll('.title_page');

    title_page.forEach(title=>{
        title.innerHTML = textAnchor;
        title.style.background = background;
    });


}