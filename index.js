let question = document.querySelectorAll('.question');
let answer = document.querySelectorAll('.answer');
let icon = document.querySelectorAll('.icon');

for(let i = 0; i<question.length; i++){
  question[i].addEventListener('click', ()=>{
    if(answer[i].style.height == 'auto'){
      answer[i].style.marginTop = '0px';
      answer[i].style.height = '0px';
      icon[i].src = './assets/images/icon-plus.svg'
    }
    else{
      for(let i = 0; i<question.length; i++){
        answer[i].style.marginTop = '0px';
        answer[i].style.height = '0px';
        icon[i].src = './assets/images/icon-plus.svg'
      }
      answer[i].style.marginTop = '20px';
      answer[i].style.height = 'auto';
      icon[i].src = './assets/images/icon-minus.svg'
    }
  });
}