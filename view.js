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




  //looping element vith view



  var loopingElements = new Vue({
    el: '#appLoop',
    data: {
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    }
  })


  document.querySelector('#submitButton').addEventListener('click', () => {
     var myText = document.querySelector('input[type="text"]').value; 
     loopingElements.todos.push({text: myText});
  }) 




