const app = {
    data() {
        return {
            pages:[
                { src: 'https://source.unsplash.com/random' }
            ],
            page: 0,
            like: 0
        }
    },
    methods: {
        click_like(){
            this.like++;
        }
    },
    mounted() {
        document.querySelector('.img').src = this.pages[this.page].src;

        // const url = 'https://source.unsplash.com/random';
        // const options = {
        //         method: 'Get',
        //         headers: {},
        //         body : ''
        //     };
            // const promis = fetch(url, options);
            // console.log(promis);
            //fetch(url).then(rens => rens.json()).then(console.log);
            // fetch(`https://source.unsplash.com/1600x900/?beach`).then((response) => {   
            //     let item = document.createElement('div');
            //     console.log(response);
            //     item.classList.add('item');
            //     item.innerHTML = `<img class="beach-image" src="${response.url}" alt="beach image"/>`     
            //     document.body.appendChild(item);
            // }) 
        }
    }
Vue.createApp(app).mount('.nav');