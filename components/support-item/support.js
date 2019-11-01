//declaring support component
var componentTest =  Vue.component('support-item', { //1


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
export {componentTest}
  