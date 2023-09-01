const catalog = {
    data() {
      return {
        blog_cards:[
            {
                img: 'img/blog_1.png',
                head_text:'Let’s Get Solution For Building Construction Work',
                date:'26 December,2022'
            },
            {
                img: 'img/blog_2.png',
                head_text:'Low Cost Latest Invented Interior Designing Ideas.',
                date:'22 December,2022'
            },
            {
                img: 'img/blog_3.png',
                head_text:'Best For Any Office & Business Interior Solution',
                date:'25 December,2022'
            },
            {
                img: 'img/blog_4.png',
                head_text:'Let’s Get Solution For Building Construction Work',
                date:'26 December,2022'
            },
            {
                img: 'img/blog_5.png',
                head_text:'Low Cost Latest Invented Interior Designing Ideas.',
                date:'22 December,2022'
            },
            {
                img: 'img/blog_6.png',
                head_text:'Best For Any Office & Business Interior Solution',
                date:'25 December,2022'
            }
        ]
      }
    }
  };
Vue.createApp(catalog).mount('#blog_cards');