const HomeWork = {
    data() {
      return {
        products:[
            {
                name: 'Терка TalleR TR-21908 с контейнером',
                prise: 770,
                photo: 'https://avatars.mds.yandex.net/get-mpic/5272194/img_id2041063746694280019.jpeg/orig'
            },
            {
                name: 'Ерш, нержавеющая сталь, 02, IDDIS, BRU02POi47',
                prise: 3390,
                photo: 'https://avatars.mds.yandex.net/get-mpic/4776349/img_id4058274940148783219.jpeg/orig'
            },
            {
                name: 'Гейзерная кофеварка Bialetti Moka Express 3 порции (130мл)',
                prise: 3530,
                photo: 'https://avatars.mds.yandex.net/get-mpic/7179065/img_id8397835732936647547.jpeg/orig'
            },
            {
                name: 'Кувшин 1300мл Basic Фазенда SL (6) 43964SL',
                prise: 510,
                photo: 'https://avatars.mds.yandex.net/get-mpic/3861966/img_id5355525219599141689.jpeg/orig'
            },
            {
                name: 'Френч-пресс TalleR TR-32320 Блисс 600 мл',
                prise: 933,
                photo: 'https://avatars.mds.yandex.net/get-mpic/5376959/img_id6184593353543698695.jpeg/orig'
            },
            {
                name: 'Масленка TalleR TR-61216 Холли',
                prise: 1262,
                photo: 'https://avatars.mds.yandex.net/get-mpic/1571888/img_id6141542822630046565.jpeg/orig'
            }
        ]
      }
    },
    methods:{
        sort_up(){
            this.products.sort((a, b) => {
                if (a.prise < b.prise) {
                    return -1;
                  } else if (a.prise === b.prise) {
                    return 0;
                  } else {
                    return 1;
                  }
            });
        },
        sort_down(){
            this.products.sort((a, b) => {
                if (a.prise > b.prise) {
                    return -1;
                  } else if (a.prise === b.prise) {
                    return 0;
                  } else {
                    return 1;
                  }
            });
        }
    }
  };
  Vue.createApp(HomeWork).mount('#box');