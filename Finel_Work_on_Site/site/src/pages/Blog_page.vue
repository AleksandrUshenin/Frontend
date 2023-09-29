<template>
    <div>
        <div class="">
            <div class="baner_Blog_page">
                <div class="box_banner">
                    <h1 class="">Articles & News</h1>
                    <p class="">Home / Blog</p>
                </div>
            </div>
        </div>
        <div class="latest_post">
            <div class="latest_post_head">
                <h1>Latest Post</h1>
            </div>
            <div class="latest_post_box width_box">
                <div class="latest_post_box_img">
                    <img src="../assets/Latest_Post.png" alt="img">
                </div>
                <div class="latest_post_box_text">
                    <h2>Low Cost Latest Invented Interior Designing Ideas</h2>
                    <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere
                        in.Contrary to popular belief.Lorem Ipsum is not simply random text.
                        It has roots in a piece of classica.</p>
                    <div class="latest_post_button">
                        <p>26 December,2022</p>
                        <a href="#">
                            <svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                                <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="blog">
            <div class="blog_header width_box blog_header_left_position">
                <h1 class="blok_head">Articles & News</h1>
            </div>
            <div id="blog_cards" class="blog_items width_box">
                <div v-for="(item, index) in blog_cards" :key="index" class="blog_item">
                    <div class="blog_img_box">
                        <img class="blog_item_img" :src=item.img alt="img home">
                    </div>
                    <div class="blog_info">
                        <p class="mini_head">{{ item.head_text }}</p>
                    </div>
                    <div class="blog_button">
                        <p>{{ item.date }}</p>
                        <a href="#">
                            <svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                                <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="pages">
            <div class="page">
                <a href="#">01</a>
            </div>
            <div class="page">
                <a href="#">02</a>
            </div>
            <div class="page">
                <a href="#">03</a>
            </div>
            <div class="page">
                <a href="#">
                    <svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                        <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <!-- fill="#F4F0EC" -->
                </a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Blog_page',
    data() {
      return {
        blog_cards:[
            {
                img: 'https://rhome.by/wp-content/uploads/2022/12/prevyu.jpg',
                head_text:'Let’s Get Solution For Building Construction Work',
                date:'26 December,2022'
            },
            {
                img: 'https://static.tildacdn.com/tild3132-3732-4763-b335-346130393336/3.jpg',
                head_text:'Low Cost Latest Invented Interior Designing Ideas.',
                date:'22 December,2022'
            },
            {
                img: 'https://www.eremont.ru/upload/iblock/2a0/9629ir34laec7qfbz9v5qxeaqsvn70jd/Stenu-nad-divanom-ukrasili-originalnym-bra.jpg',
                head_text:'Best For Any Office & Business Interior Solution',
                date:'25 December,2022'
            },
            {
                img: 'https://api.interior.ru/media/images/setka/2023_03_22/Karakash_K2interiors_50.jpg.webp',
                head_text:'Let’s Get Solution For Building Construction Work',
                date:'26 December,2022'
            },
            {
                img: 'https://api.interior.ru/media/images/setka/2022_11_14/Solo_09.jpg.webp',
                head_text:'Low Cost Latest Invented Interior Designing Ideas.',
                date:'22 December,2022'
            },
            {
                img: 'https://api.interior.ru/media/images/setka/2022_11_27/Zil_027.jpg.webp',
                head_text:'Best For Any Office & Business Interior Solution',
                date:'25 December,2022'
            }
        ]
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
.blok_head {
  font-family: DM Serif Display;
  font-size: 50px;
  font-weight: 400;
  line-height: 63px;
  letter-spacing: 0.02em;
  text-align: center;
  color: #292F36;
}
a {
    text-decoration: none;
    color: black;
}
.baner_Blog_page {
  background-image: url(../assets/banner_blog.png);
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
.latest_post {
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 27px;
}
.latest_post_head {
  display: flex;
  width: 75%;
  justify-content: flex-start;
}
.latest_post_box {
  display: flex;
  align-items: center;
  gap: 65px;
}
.latest_post_box_text > p {
  margin-top: 22px;
}
.latest_post_box_img > img {
  border-radius: 70px;
}
.latest_post_button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 41px;
}
.blog {
  margin-top: 96px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.blog_header {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.blog_header_left_position {
  align-items: flex-start;
}
.width_box {
  width: 75vw;
}
.blog_items {
  margin-top: 52px;
  display: grid;
  justify-content: center;
  gap: 27px;
  grid-template-columns: 33% 33% 33%;
}
.blog_item {
  border: 1px solid #E7E7E7;
  border-radius: 70px;
  padding: 21px;
  max-width: 342px;
}
.blog_item_img {
  border-radius: 70px 70px 0 0;
  width: 100%;
}
.blog_item:hover {
  background-color: #F4F0EC;
}
.blog_item:hover > .blog_button > a > svg > circle {
  fill: #FFFFFF;
}
.blog_button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 39px;
  padding-bottom: 27px;
}
.blog_button > p {
  font-family: Jost;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.01em;
  text-align: left;
  color: #4D5053;
}
.pages {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 51px;
}

.page {
  padding: 14px 17px;
  border-radius: 70px;
  border: 1px solid #CDA274;
}

.page:last-child {
  padding: 0;
}
</style>