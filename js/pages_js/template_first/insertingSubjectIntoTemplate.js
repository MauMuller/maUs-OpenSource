{
    const gettingSubjectData = localStorage.getItem("subjectObj");
    const title_inset = document.querySelectorAll('.title_inset');
    const color_text = document.querySelectorAll('.color_text');

    if(gettingSubjectData !== null){
        const objValues = JSON.parse(gettingSubjectData);
        
        console.log({color_text:color_text, back:objValues.background})
        title_inset.forEach(title=>title.innerHTML = objValues.text);
        color_text.forEach(color_text=>color_text.style.color = objValues.background);
    }
}