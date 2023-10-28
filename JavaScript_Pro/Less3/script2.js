const ListRendering = {
    data() {
      return {
        todos: [], 
        dataText: ''
      }
    },
    methods:{
      click_btn(){
        if (this.dataText == ''){
          return;
        }
        this.todos.push({text: this.dataText});
        console.log(this.dataText);
        this.dataText = ''
      }
    },
    mounted() {
        const name = document.getElementById('Name');
        name.textContent  = localStorage.getItem('Name');
        const values = Object.values(localStorage);
        console.log(values);
        for (let i = 0; i < localStorage.length; i++){
          this.todos.push({text: values[i]});
        }
      }
  };
Vue.createApp(ListRendering).mount('#list-rendering');