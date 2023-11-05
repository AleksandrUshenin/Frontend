const app = {
    data() {
        return {
            pages:[
                { src: 'https://i.pinimg.com/originals/7e/14/5a/7e145a5c396964b50846ad4c98940cea.jpg' },
                { src: 'https://www.bosshunting.com.au/wp-content/uploads/2020/03/ferrari-f1-87-03.jpg' },
                { src: 'https://i.pinimg.com/originals/13/9d/28/139d282fc89b499346c21f3dd28aa5f6.jpg' },
                { src: 'https://i.pinimg.com/originals/63/8e/00/638e003bdbc9e76679bebda5f8e492f0.jpg' },
                { src: 'https://upload.wikimedia.org/wikipedia/commons/5/54/Formula_Geely_engine.jpg' },
                { src: 'https://i.pinimg.com/originals/79/e2/58/79e25825e028d823a48a9a0517f139e7.jpg' }
            ],
            page: 0
        }
    },
    mounted() {
        document.querySelector('.img').src = this.pages[this.page].src;

        document.querySelector('.button_previous').addEventListener('click', e => {
            console.log(this.page);
            if (this.page > 0){
                document.querySelector('.img').src = this.pages[--this.page].src;
            }
        });
        document.querySelector('.button_next').addEventListener('click', e => { 
            console.log(this.page);
            if (this.page < this.pages.length - 1){
                document.querySelector('.img').src = this.pages[++this.page].src;
            }
        });
        document.querySelectorAll('.button_nav').forEach(el => {
            el.addEventListener('click', (index) =>  {
                this.page = index.currentTarget.textContent - 1;
                document.querySelector('.img').src = this.pages[this.page].src;   
            });
        });
    },
};
Vue.createApp(app).mount('.nav');