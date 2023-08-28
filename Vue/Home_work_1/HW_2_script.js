const Controller = {
    data() {
      return {
        message:'Перевернуть'
      }
    },
    methods: {
        message_click(){
          this.message = this.message.split("").reverse().join("");
        }
    },
  };
  Vue.createApp(Controller).mount('#box');

  const ListRendering = {
    data() {
      return {
        todos: [
          { text: 'Learn JavaScript' },
          { text: 'Learn Vue' },
          { text: 'Build something awesome' }
        ]
      }
    },
    methods:{
      click_btn(){
        this.todos.push({text: 'Новый элемент списка'});
      },
      click_btn_del(){
        this.todos.pop();
      }
    }
  };
  Vue.createApp(ListRendering).mount('#list-rendering');