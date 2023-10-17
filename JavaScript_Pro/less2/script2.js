const ListRendering = {
    data() {
      return {
        todos: [
          { text: 'Отличный телефон! Батарея держится долго.' },
          { text: 'Камера супер, фото выглядят просто потрясающе.' },
          { text: 'Интересный дизайн, но дорогой.' }
        ], 
        dataText: ''
      }
    },
    methods:{
      click_btn(){
        //this.todos.push({text: 'Новый элемент списка'});
        this.todos.push({text: this.dataText});
        console.log(this.dataText);
        this.dataText = ''
      },
      click_btn_del(){
        this.todos.pop();
      }
    }
  };
Vue.createApp(ListRendering).mount('#list-rendering');