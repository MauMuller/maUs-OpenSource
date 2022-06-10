const transitionPages = JSON.parse(localStorage.getItem('transitionPages'));

flexbox_container.classList.remove('goNextAnimation','goBackAnimation','hidden_element');

if(transitionPages){
    flexbox_container.classList.add('loadAnimationNext');
} else {
    flexbox_container.classList.add('loadAnimationBack');
}

setTimeout(()=>{
    flexbox_container.classList.remove('loadAnimationNext','loadAnimationBack');
},1000);