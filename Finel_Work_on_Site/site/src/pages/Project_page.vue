<template>
    <div>
        <div class="">
            <div class="baner_Blog_page">
                <div class="box_banner">
                    <h1 class="">Our Project</h1>
                    <p class="">Home / Project</p>
                </div>
            </div>
        </div>
        <div class="categoreis">
            <div class="swich_box">
                <div class="swich_categories">
                    <button @click='click_button(btn.name, index)' v-for="(btn, index) in buttons" :key="index" class="btn"
                        v-bind:class="{ active: btn.isActive }">
                        {{ btn.name }}
                    </button>
                </div>
            </div>
            <div class="categories_content">
                <div v-for="(item, index) in load_data" :key="index" class="categories_item">
                    <!-- {{ content_categoties }} -->
                    <img :src="item.img" class="categories_item_img" alt="img">
                    <div class="categories_info">
                        {{ item.titel }}<br />
                        {{ item.categories }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Project_page',
    props: {
        content_categories: {
            type: Object
        }
    },
    data() {
        return {
            buttons: [
                { name: 'Bathroom', isActive: false },
                { name: 'Bed Room', isActive: false },
                { name: 'Kitchan', isActive: false },
                { name: 'Living Area', isActive: false }
            ],
            filt: ''
        }
    },
    methods: {
        click_button(mess, index) {
            // this.show = true;
            this.buttons.forEach(el => { el.isActive = false });
            this.buttons[index].isActive = true
            this.filt = mess;
        }
    },
    computed: {
        load_data() {
            return this.content_categories.filter(item => item.categories.includes(this.filt));
        },
        filterStyle() {
            if (this.show) {
                return {
                    background: 'red'
                }
            } else {
                return ''
            }
        }
    }
}
</script>
<style>
* {
    padding: 0;
    margin: 0;
    font-family: "DM Serif Display", serif;
    font-family: "Jost", sans-serif;
    font-family: "Lato", sans-serif;
    font-family: "Open Sans", sans-serif;
}

a {
    text-decoration: none;
    color: black;
}

.blok_head {
    font-family: DM Serif Display;
    font-size: 50px;
    font-weight: 400;
    line-height: 63px;
    letter-spacing: 0.02em;
    text-align: center;
    color: #292F36;
}

.head {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 44px;
}

.head_right {
    padding-top: 12px;
    padding-bottom: 12px;
}

.head_right_ref {
    font-family: Jost;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: center;
    color: #292F36;
    margin-right: 30px;
}

.head_right_ref:last-child {
    margin-right: 0;
}

.footer {
    display: grid;
    justify-items: center;
    justify-content: center;
    grid-template-columns: 27% 27% 27%;
    margin-top: 96px;
    margin-bottom: 100px;
}

.footer_box {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.footer_box>p {
    font-family: Jost;
    font-size: 22px;
    font-weight: 400;
    line-height: 33px;
    letter-spacing: 0.01em;
    text-align: left;
    color: #4D5053;
}

.footer_box>a {
    font-family: Jost;
    font-size: 22px;
    font-weight: 400;
    line-height: 66px;
    letter-spacing: 0.01em;
    text-align: left;
    color: #4D5053;
}

.label {
    display: flex;
    gap: 5px;
    align-items: center;
}

.baner_Blog_page {
    background-image: url(../assets/categoreis_Banner.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-end;
    min-height: 270px;
    margin-top: 45px;
}

.baner_Blog_page .box_banner {
    background-color: white;
    padding: 41px 78px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 18px 18px 0 0;
}

.swich_box {
    display: flex;
    justify-content: center;
    padding-top: 200px;
    padding-bottom: 61px;
}

.swich_categories {
    display: flex;
    justify-content: center;
    border: 1px solid #CDA274;
    border-radius: 20px;
    gap: 20px;
    /* width: 70vw; */
}

.btn {
    /* style: none; */
    background-color: white;
    border: none;
    padding: 25px 66px;
    border-radius: 19px;
    /* width: 100%; */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.btn:hover {
    cursor: pointer;
}

.active {
    background-color: #CDA274;
}

.categories_item {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.categories_item_img {
    width: 30%;
}
.categories_info{
    padding-top: 28px;
    padding-bottom: 39px;
}
</style>