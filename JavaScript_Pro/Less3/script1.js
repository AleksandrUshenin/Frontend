const ListRendering = {
    data() {
      return {
        todos: [
          { text: 'Телефон на Android' },
          { text: 'Камера Sony' },
          { text: 'Блендер Xiaomi' }
        ], 
        commits:[
          { index: 0, comit:['Отличный телефон! Батарея держится долго.1', 'Камера супер, фото выглядят просто потрясающе.1', 'Интересный дизайн, но дорогой.1' ] },  
          { index: 1, comit:['Отличный телефон! Батарея держится долго.2', 'Камера супер, фото выглядят просто потрясающе.2', 'Интересный дизайн, но дорогой.2' ] },
          { index: 2, comit:['Отличный телефон! Батарея держится долго.3', 'Камера супер, фото выглядят просто потрясающе.3', 'Интересный дизайн, но дорогой.3' ] }  
        ],
        dataText: ''
      }
    },
    methods:{
      click_ref(index){
        localStorage.setItem('Name', this.todos[index].text);
        this.commits.forEach(element => {
            // localStorage.setItem('comit', element.comit[1]);
            if (element.index == index)
            {
                var id = 0;
                element.comit.forEach(el => {
                    localStorage.setItem('comit ' + id++, el);
                })
            }
        });
      }
    }
  };
Vue.createApp(ListRendering).mount('.box');