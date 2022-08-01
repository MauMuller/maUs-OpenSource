{
    const backgroundColor = JSON.parse(localStorage.getItem('subjectObj')).background,
          body = document.querySelector('body');

    body.style.background = `${backgroundColor}1a`;
}