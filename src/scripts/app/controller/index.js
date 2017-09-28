'use strict';

define(['vue'], function(Vue){

  var box = new Vue({
    el: '.box',
    data: {
      name: '12xue'
    }
  });

  Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
  });
  var component = new Vue({
    el: '#todo-template',
    data: {
      list: [
        {id:1, text: '蔬菜'},
        {id:2, text: '水果'},
        {id:3, text: '随便什么东西'}
      ]
    }
  });


});