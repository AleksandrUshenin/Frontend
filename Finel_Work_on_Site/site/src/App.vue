<template>
  <div id="app">
    <div class="head">
      <div class="head_left">
        <router-link class="label" to="/go">
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z"
              fill="#CDA274" />
          </svg>
          <p>Interno</p>
        </router-link>
      </div>
      <!-- <nav @click="click_menu" class="head_right">
        <a class="head_right_ref" href="/#Home">Home</a>
        <a class="head_right_ref" href="/#Project">Project</a>
        <a class="head_right_ref" href="/#Blog">Blog</a>
      </nav> -->
      <nav class="head_right">
        <router-link class="head_right_ref" to="/Home">Home</router-link>
        <router-link class="head_right_ref" to="/Project">Project</router-link>
        <router-link class="head_right_ref" to="/Blog">Blog</router-link>
      </nav>
    </div>
    <router-view :content_categories="content_categories" />
    <!-- <Home_page v-if="page === 'Home'" />
    <Blog_page v-if="page === 'Blog'" />
    <Project_page v-if="page === 'Project'" :content_categories="content_categories" /> -->

    <div class="footer">
      <div class="footer_box">
        <router-link class="label" to="/go">
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z"
              fill="#CDA274" />
          </svg>
          <p>Interno</p>
        </router-link>
        <p>It is a long established fact that a reader will be distracted lookings.</p>
        <div class="social_media">
          <a href="#">
            <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.6367 4.59375C17.3398 4.06641 17.9727 3.43359 18.4648 2.69531C17.832 2.97656 17.0938 3.1875 16.3555 3.25781C17.1289 2.80078 17.6914 2.09766 17.9727 1.21875C17.2695 1.64062 16.4609 1.95703 15.6523 2.13281C14.9492 1.39453 14 0.972656 12.9453 0.972656C10.9062 0.972656 9.25391 2.625 9.25391 4.66406C9.25391 4.94531 9.28906 5.22656 9.35938 5.50781C6.30078 5.33203 3.55859 3.85547 1.73047 1.64062C1.41406 2.16797 1.23828 2.80078 1.23828 3.50391C1.23828 4.76953 1.87109 5.89453 2.89062 6.5625C2.29297 6.52734 1.69531 6.38672 1.20312 6.10547V6.14062C1.20312 7.93359 2.46875 9.41016 4.15625 9.76172C3.875 9.83203 3.52344 9.90234 3.20703 9.90234C2.96094 9.90234 2.75 9.86719 2.50391 9.83203C2.96094 11.3086 4.33203 12.3633 5.94922 12.3984C4.68359 13.3828 3.10156 13.9805 1.37891 13.9805C1.0625 13.9805 0.78125 13.9453 0.5 13.9102C2.11719 14.9648 4.05078 15.5625 6.16016 15.5625C12.9453 15.5625 16.6367 9.97266 16.6367 5.08594C16.6367 4.91016 16.6367 4.76953 16.6367 4.59375Z"
                fill="#292F36" />
            </svg>
          </a>
          <router-link to="/go" href="#">
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.14062 16V5.48828H0.871094V16H4.14062ZM2.48828 4.08203C3.54297 4.08203 4.38672 3.20312 4.38672 2.14844C4.38672 1.12891 3.54297 0.285156 2.48828 0.285156C1.46875 0.285156 0.625 1.12891 0.625 2.14844C0.625 3.20312 1.46875 4.08203 2.48828 4.08203ZM16.3398 16H16.375V10.2344C16.375 7.42188 15.7422 5.24219 12.4375 5.24219C10.8555 5.24219 9.80078 6.12109 9.34375 6.92969H9.30859V5.48828H6.17969V16H9.44922V10.7969C9.44922 9.42578 9.69531 8.125 11.3828 8.125C13.0703 8.125 13.1055 9.67188 13.1055 10.9023V16H16.3398Z"
                fill="#292F36" />
            </svg>
          </router-link>
        </div>
      </div>
      <div class="footer_box">
        <h2 class="mini_head">Pages</h2>
        <nav class="head_right footer_box">
          <router-link class="head_right_ref" to="/Home">Home</router-link>
          <router-link class="head_right_ref" to="/Project">Project</router-link>
          <router-link class="head_right_ref" to="/Blog">Blog</router-link>
        </nav>
        <!-- <nav @click="click_menu" class="head_right footer_box"> -->
        <!-- <a class="head_right_ref" href="/#Home">Home</a>
          <a class="head_right_ref" href="/#Project">Project</a>
          <a class="head_right_ref" href="/#Blog">Blog</a> -->
        <!-- </nav> -->
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
//import HelloWorld from './components/HelloWorld.vue'
// import Home_page from './pages/Home_page.vue'
// import Blog_page from './pages/Blog_page.vue'
// import Project_page from './pages/Project_page.vue'

export default {
  name: 'App',
  components: {
    // Home_page,
    // Blog_page,
    // Project_page
  },
  data() {
    return {
      // page: 'Home',
      content_categories: [
        { id: 1, titel: 'titel 1', categories: 'Bed Room', img: 'https://mydizajn.ru/wp-content/uploads/2016/11/Modern-Bedroom-3-1.jpg' },
        { id: 2, titel: 'titel 2', categories: 'Bathroom ', img: 'https://i.pinimg.com/originals/d4/f6/e5/d4f6e55a05c316be0ce5b79131c6b76b.jpg' },
        { id: 3, titel: 'titel 3', categories: 'Kitchan', img: 'https://xn--1-----8vefgeugb1aimdekb0alg1ambq6dd41a2a.xn--p1ai/d/kuhnya_bombej.jpg' },
        { id: 4, titel: 'titel 4', categories: 'Living Area', img: 'https://i.pinimg.com/originals/ba/ff/ec/baffec8f993ff887545d926cba03798a.jpg' },
        { id: 5, titel: 'titel 5', categories: 'Bed Room', img: 'https://mydizajn.ru/wp-content/uploads/2016/11/Modern-Bedroom-3-1.jpg' },
        { id: 6, titel: 'titel 6', categories: 'Bathroom ', img: 'https://i.pinimg.com/originals/d4/f6/e5/d4f6e55a05c316be0ce5b79131c6b76b.jpg' },
        { id: 7, titel: 'titel 7', categories: 'Kitchan', img: 'https://xn--1-----8vefgeugb1aimdekb0alg1ambq6dd41a2a.xn--p1ai/d/kuhnya_bombej.jpg' },
        { id: 8, titel: 'titel 8', categories: 'Living Area', img: 'https://i.pinimg.com/originals/ba/ff/ec/baffec8f993ff887545d926cba03798a.jpg' }
      ]
    }
  },
  methods: {
    // set_page()   {
    //   this.page = window.location.hash.slice(1);
    //   //this.page = 'Project';
    //   //console.log(this.page);
    // },
    // click_menu()   {
    //   this.set_page();    window.addEventListener('hashchange', function  () {
    //     this.set_page;
    //    })
    // }
  },
  mounted() {
    // const links = document.querySelectorAll('.head_right_ref');

    // links.forEach(el => {
    //   el.addEventListener('click', function  (e) {
    //     e.preventDefault();
    //      history.pushState({},  '', el.href)
    //   })
    //  });
  },
  created() {
    this.$router.push({ name: 'Home' })
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
</style>
