import {componentTest} from 'components/support-item/support.js'

Vue.component(componentTest)
//declaring main navbar component
//where to nest all other components
Vue.component('main-nav', { //1
 template: `<ul>
               
                <mail-item></mail-item> 
                <ghosting-item></ghosting-item> 
                <template-item></template-item> 
                <knowledge-item></knowledge-item>
                <support-item></support-item> 
            </ul>`
})

//declaring mailinda  component

Vue.component('mail-item', { 
    template: '<li>This where mailinda</li>'
   })


//declaring ghosting  component

Vue.component('ghosting-item', { 
    template: '<li>This where ghosting</li>'
   })
   
   
//declaring template -mail   component
Vue.component('template-item', { 
    template: '<li>mails</li>'
   })
   


//declaring template knowledge  component

Vue.component('knowledge-item', { 
    template: '<li>This where mail knowledge</li>'
   })
      

//declaring support component
Vue.component('support-item', { //1


    data: function () {
        return {
            support: [
                {name: 'Pietro', surname: 'Santoro', aviabletime:'10:00'},
                {name: 'jrsme', surname: 'jrsme', aviabletime:'11:00'},
                {name: 'jrsme', surname: 'jrsme', aviabletime:'12:00'},
                {name: 'jrsme', surname: 'jrsme', aviabletime:'13:00'},
                {name: 'jrsme', surname: 'jrsme', aviabletime:'14:00'},
            ]
        }
      },
    template: '<li>{{support[0].name}}</li>'
  })


  //1 dichiaro l`istanza di view che voglio usare
  //2 definisco quale element html avra` questo componente
  var vm = new Vue({ //1
    el: '#appComponent', //2
    data: {

      mailinda: 'mailinda',
      ghostingdata: 'someMoredata',
      templateMail: 'templateMaildata',
      knowledge: 'knowledgebasedata'  
    
    },

    methods: {
        showSupport: function () {
          
        },
    }
})

