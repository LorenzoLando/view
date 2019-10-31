//here I dinamycally change the href of the link 
var app = new Vue({
    
    el: '#link',
    data: {
      href: 'https://www.google.com/'
    }
  });

  app.href = "www.pietrosantoro.com";