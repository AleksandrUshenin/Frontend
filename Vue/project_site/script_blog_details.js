Vue.component('button-counter', {
    data: function () {     //data()
        return {
            count: 0,
            items_blog2: [
                {
                    id: 1,
                    img: 'img/Kitchen_1.jpg',
                    titel: 'Lorem ipsum dolor sit amet.',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ipsa!',
                    tag: 'Kitchen'
                },
                {
                    id: 2,
                    img: 'img/Bedroom_1.jpg',
                    titel: 'Lorem ipsum dolor sit amet.',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ipsa!',
                    tag: 'Bedroom'
                },
                {
                    id: 3,
                    img: 'img/Building_1.jpg',
                    titel: 'Lorem ipsum dolor sit amet.',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ipsa!',
                    tag: 'Building'
                },
                {
                    id: 4,
                    img: 'img/Architecture_1.jpg',
                    titel: 'Lorem ipsum dolor sit amet.',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ipsa!',
                    tag: 'Architecture'
                },
                {
                    id: 5,
                    img: 'img/Bedroom_1.jpg',
                    titel: 'Lorem ipsum dolor sit amet.',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ipsa!',
                    tag: 'Bedroom'
                },
                {
                    id: 6,
                    img: 'img/Building_1.jpg',
                    titel: 'Lorem ipsum dolor sit amet.',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ipsa!',
                    tag: 'Building'
                }
            ],
            filt: ''
        }
    },
    computed: {
        items_blog() {
            return this.items_blog2.filter(item => item.tag.includes(this.filt));
        }
    },
    methods: {
        clik(filter) {
            this.filt = filter;
        }
    },
    template: `<div class="blog_box">
                    <div class="blog_box_items">
                        <div class="blog_box_item" v-for="item in items_blog">
                            <img class="img_blog" :src=item.img alt="blog-img">
                            <h1>{{item.titel}}</h1>
                            <p>{{item.text}}</p>
                            <p>{{item.tag}}</p>
                        </div>
                    </div>
                    <div class="blog_box_button">
                        <button @click="clik('Kitchen')">Kitchen</button>
                        <button @click="clik('Bedroom')">Bedroom</button>
                        <button @click="clik('Building')">Building</button>
                        <button @click="clik('Architecture')">Architecture</button>
                        <button @click="clik('Kitchen')">Kitchen Planning</button>
                        <button @click="clik('Bedroom')">Bedroom</button>
                        <button @click="clik('')">Reset</button>
                    </div>
                </div>`
})
new Vue({ el: '#filter_blog' })
