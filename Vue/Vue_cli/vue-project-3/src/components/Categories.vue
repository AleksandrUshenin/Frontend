<template>
  <div class="hello">
    <div class="head">
      <div class="head_left">
        <a class="label" href="index.html">
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z"
              fill="#CDA274" />
          </svg>
          <p>Interno</p>
        </a>
      </div>
      <div class="head_right">
        <a class="head_right_ref" href="#">Home</a>
        <a class="head_right_ref" href="#">Project</a>
        <a class="head_right_ref" href="#">Blog</a>
      </div>
    </div>
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
          <button @click='click_button(btn.name, index)' v-for="(btn, index) in load_buttons" :key="index" class="btn"
            v-bind:class="{ active: btn.isActive }">
            {{ btn.name }}
        </button>
        </div>
      </div>
      <div class="categories_content">
        <div v-for="(item, index) in load_data" :key="index" class="categories_item">
          <!-- {{ content_categoties }} -->
          <img :src="item.img" class="categories_item_img" alt="img">
          {{ item.titel }} <br />
          {{ item.categories }}
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer_box">
        <a class="label" href="index.html">
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z"
              fill="#CDA274" />
          </svg>
          <p>Interno</p>
        </a>
        <p>It is a long established fact that a reader will be distracted lookings.</p>
        <div class="social_media">
          <a href="#">
            <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.6367 4.59375C17.3398 4.06641 17.9727 3.43359 18.4648 2.69531C17.832 2.97656 17.0938 3.1875 16.3555 3.25781C17.1289 2.80078 17.6914 2.09766 17.9727 1.21875C17.2695 1.64062 16.4609 1.95703 15.6523 2.13281C14.9492 1.39453 14 0.972656 12.9453 0.972656C10.9062 0.972656 9.25391 2.625 9.25391 4.66406C9.25391 4.94531 9.28906 5.22656 9.35938 5.50781C6.30078 5.33203 3.55859 3.85547 1.73047 1.64062C1.41406 2.16797 1.23828 2.80078 1.23828 3.50391C1.23828 4.76953 1.87109 5.89453 2.89062 6.5625C2.29297 6.52734 1.69531 6.38672 1.20312 6.10547V6.14062C1.20312 7.93359 2.46875 9.41016 4.15625 9.76172C3.875 9.83203 3.52344 9.90234 3.20703 9.90234C2.96094 9.90234 2.75 9.86719 2.50391 9.83203C2.96094 11.3086 4.33203 12.3633 5.94922 12.3984C4.68359 13.3828 3.10156 13.9805 1.37891 13.9805C1.0625 13.9805 0.78125 13.9453 0.5 13.9102C2.11719 14.9648 4.05078 15.5625 6.16016 15.5625C12.9453 15.5625 16.6367 9.97266 16.6367 5.08594C16.6367 4.91016 16.6367 4.76953 16.6367 4.59375Z"
                fill="#292F36" />
            </svg>
          </a>
          <a href="#">
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.14062 16V5.48828H0.871094V16H4.14062ZM2.48828 4.08203C3.54297 4.08203 4.38672 3.20312 4.38672 2.14844C4.38672 1.12891 3.54297 0.285156 2.48828 0.285156C1.46875 0.285156 0.625 1.12891 0.625 2.14844C0.625 3.20312 1.46875 4.08203 2.48828 4.08203ZM16.3398 16H16.375V10.2344C16.375 7.42188 15.7422 5.24219 12.4375 5.24219C10.8555 5.24219 9.80078 6.12109 9.34375 6.92969H9.30859V5.48828H6.17969V16H9.44922V10.7969C9.44922 9.42578 9.69531 8.125 11.3828 8.125C13.0703 8.125 13.1055 9.67188 13.1055 10.9023V16H16.3398Z"
                fill="#292F36" />
            </svg>
          </a>
        </div>
      </div>
      <div class="footer_box">
        <h2 class="mini_head">Pages</h2>
        <a href="#">Home</a>
        <a href="#">Project</a>
        <a href="#">Blog</a>
      </div>
      <div class="footer_box">
        <h2 class="mini_head">Contact</h2>
        <p>55 East Birchwood Ave. Brooklyn, New York 11201</p>
        <p>contact@interno.com</p>
        <p>(123) 456 - 7890</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoriesName',
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
      filt: '',
      show: false,
      isActive: true
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
    load_buttons(){
      return this.buttons;
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
.swich_box{
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
.btn:hover{
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
</style>
