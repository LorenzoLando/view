//here I dinamycally change the href of the link 
var app = new Vue({
    
    el: '#link',
    data: {
      href: 'https://www.google.com/'
    }
  });

//visualizzazione condizionale in view

var conditionalDisplay = new Vue({
    
    el: '.conditional',
    data: {
        seen: true
    }
  });

//clikko sul bottone
  document.querySelector('.toggleButton').addEventListener('click', () => {
    //cambio l`attributo all elemento paragrafo sottostante  
    if(conditionalDisplay.seen == true) {
        conditionalDisplay.seen = false;
      } else {
        conditionalDisplay.seen = true;
      }
  }) 
